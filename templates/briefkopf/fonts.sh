#!/usr/bin/env bash
#
# Holt IBM Plex und legt die fünf eingebetteten Schnitte als TTF unter fonts/ ab.
# Die Schriftdateien liegen bewusst nicht im Repository - build.js baut auch
# ohne sie, dann fehlen der fertigen .docx allerdings die eingebetteten
# Schriften und die Datei hängt an einer lokalen IBM-Plex-Installation.
#
# IBM Plex steht unter der SIL Open Font License 1.1; Einbetten ist erlaubt.

set -euo pipefail
cd "$(dirname "$0")"

npm install --no-save @ibm/plex-sans @ibm/plex-serif @ibm/plex-mono
python3 -m pip install --quiet --disable-pip-version-check fonttools brotli

mkdir -p fonts
python3 - <<'PY'
from fontTools.ttLib import TTFont

# IBM liefert nur woff2 aus; für die Einbettung in ein .docx braucht Word TTF.
faces = [
    ("plex-sans",  "IBMPlexSans",  ["Regular", "Medium", "SemiBold"]),
    ("plex-serif", "IBMPlexSerif", ["Regular"]),
    ("plex-mono",  "IBMPlexMono",  ["Regular"]),
]

for package, stem, styles in faces:
    for style in styles:
        font = TTFont(f"node_modules/@ibm/{package}/fonts/complete/woff2/{stem}-{style}.woff2")
        font.flavor = None
        out = f"fonts/{stem}-{style}.ttf"
        font.save(out)
        print(out)
PY
