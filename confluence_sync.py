#!/usr/bin/env python3
"""
Confluence → GitHub Markdown Sync
Fetches pages from a Confluence space and saves them as .md files.
"""

import os
import re
import json
import requests
from pathlib import Path
from datetime import datetime

# ── Config from environment variables (set as GitHub Secrets) ──────────────
CONFLUENCE_BASE_URL = os.environ["CONFLUENCE_BASE_URL"]   # e.g. https://arslan-chaudhry.atlassian.net/wiki
CONFLUENCE_EMAIL    = os.environ["CONFLUENCE_EMAIL"]       # your Atlassian account email
CONFLUENCE_API_TOKEN = os.environ["CONFLUENCE_API_TOKEN"]  # Atlassian API token
CONFLUENCE_SPACE_KEY = os.environ.get("CONFLUENCE_SPACE_KEY", "PS")  # your space key
PARENT_PAGE_ID      = os.environ.get("CONFLUENCE_PARENT_PAGE_ID", "") # optional: only sync children of this page

OUTPUT_DIR = Path("articles")  # folder in your GitHub repo


def get_auth():
    return (CONFLUENCE_EMAIL, CONFLUENCE_API_TOKEN)


def get_pages_in_space(space_key: str, parent_id: str = "") -> list[dict]:
    """Fetch all pages in a space, optionally filtered by parent page."""
    url = f"{CONFLUENCE_BASE_URL}/rest/api/content"
    params = {
        "spaceKey": space_key,
        "type": "page",
        "status": "current",
        "expand": "ancestors,version",
        "limit": 100,
    }
    if parent_id:
        params["ancestorId"] = parent_id

    pages = []
    while url:
        response = requests.get(url, params=params, auth=get_auth())
        response.raise_for_status()
        data = response.json()
        pages.extend(data["results"])
        # pagination
        next_link = data.get("_links", {}).get("next")
        url = f"{CONFLUENCE_BASE_URL}{next_link}" if next_link else None
        params = {}  # already encoded in next_link

    return pages


def get_page_as_markdown(page_id: str) -> str:
    """Fetch a single page and return its body as markdown via the Confluence API."""
    url = f"{CONFLUENCE_BASE_URL}/rest/api/content/{page_id}"
    params = {
        "expand": "body.export_view,metadata.labels,version,ancestors",
        "representation": "export_view",
    }
    response = requests.get(url, params=params, auth=get_auth())
    response.raise_for_status()
    data = response.json()

    title = data["title"]
    html_body = data["body"]["export_view"]["value"]
    version = data["version"]["number"]
    updated_at = data["version"]["when"]
    labels = [l["name"] for l in data.get("metadata", {}).get("labels", {}).get("results", [])]
    page_url = f"{CONFLUENCE_BASE_URL}{data['_links']['webui']}"

    # Convert HTML to rough markdown
    md_body = html_to_markdown(html_body)

    # Build frontmatter
    frontmatter = f"""---
title: "{title}"
confluence_url: "{page_url}"
confluence_version: {version}
last_updated: "{updated_at}"
labels: {json.dumps(labels)}
synced_at: "{datetime.utcnow().isoformat()}Z"
---

"""
    return frontmatter + f"# {title}\n\n" + md_body


def html_to_markdown(html: str) -> str:
    """Basic HTML → Markdown conversion without external dependencies."""
    # Headings
    for i in range(6, 0, -1):
        html = re.sub(rf"<h{i}[^>]*>(.*?)</h{i}>", lambda m, i=i: "#" * i + " " + m.group(1).strip() + "\n", html, flags=re.DOTALL | re.IGNORECASE)

    # Bold / italic
    html = re.sub(r"<strong[^>]*>(.*?)</strong>", r"**\1**", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<b[^>]*>(.*?)</b>", r"**\1**", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<em[^>]*>(.*?)</em>", r"*\1*", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<i[^>]*>(.*?)</i>", r"*\1*", html, flags=re.DOTALL | re.IGNORECASE)

    # Links
    html = re.sub(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', r"[\2](\1)", html, flags=re.DOTALL | re.IGNORECASE)

    # Lists
    html = re.sub(r"<li[^>]*>(.*?)</li>", r"- \1\n", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<[uo]l[^>]*>", "", html, flags=re.IGNORECASE)
    html = re.sub(r"</[uo]l>", "\n", html, flags=re.IGNORECASE)

    # Paragraphs & line breaks
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.IGNORECASE)
    html = re.sub(r"<p[^>]*>(.*?)</p>", r"\1\n\n", html, flags=re.DOTALL | re.IGNORECASE)

    # Horizontal rule
    html = re.sub(r"<hr\s*/?>", "\n---\n", html, flags=re.IGNORECASE)

    # Code blocks
    html = re.sub(r"<code[^>]*>(.*?)</code>", r"`\1`", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<pre[^>]*>(.*?)</pre>", r"```\n\1\n```\n", html, flags=re.DOTALL | re.IGNORECASE)

    # Tables (basic)
    html = re.sub(r"<th[^>]*>(.*?)</th>", r"| \1 ", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<td[^>]*>(.*?)</td>", r"| \1 ", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"</tr>", "|\n", html, flags=re.IGNORECASE)
    html = re.sub(r"<t[rhd][^>]*>|</t[rhd]>|<thead>|</thead>|<tbody>|</tbody>|<table[^>]*>|</table>", "", html, flags=re.IGNORECASE)

    # Strip remaining HTML tags
    html = re.sub(r"<[^>]+>", "", html)

    # Decode common HTML entities
    html = html.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
    html = html.replace("&nbsp;", " ").replace("&quot;", '"').replace("&#39;", "'")
    html = html.replace("&ndash;", "–").replace("&mdash;", "—")

    # Clean up excessive blank lines
    html = re.sub(r"\n{3,}", "\n\n", html)

    return html.strip()


def slugify(title: str) -> str:
    """Convert page title to a safe filename."""
    slug = title.lower()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_]+", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    return slug


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Fetching pages from space '{CONFLUENCE_SPACE_KEY}'...")
    pages = get_pages_in_space(CONFLUENCE_SPACE_KEY, PARENT_PAGE_ID)
    print(f"Found {len(pages)} pages.")

    synced = []
    for page in pages:
        page_id = page["id"]
        title = page["title"]
        slug = slugify(title)
        filepath = OUTPUT_DIR / f"{slug}.md"

        print(f"  → Syncing: {title}")
        try:
            markdown = get_page_as_markdown(page_id)
            filepath.write_text(markdown, encoding="utf-8")
            synced.append({"title": title, "file": str(filepath)})
        except Exception as e:
            print(f"    ⚠ Error syncing '{title}': {e}")

    # Write index file
    index_lines = ["# Synced Articles\n", f"*Last sync: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC*\n\n"]
    for item in sorted(synced, key=lambda x: x["title"]):
        index_lines.append(f"- [{item['title']}]({item['file']})\n")
    (OUTPUT_DIR / "README.md").write_text("".join(index_lines), encoding="utf-8")

    print(f"\n✅ Synced {len(synced)} pages to '{OUTPUT_DIR}/'")


if __name__ == "__main__":
    main()
