---
title: "LTI"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/9437185/LTI"
confluence_version: 2
last_updated: "2025-07-31T13:23:44.815Z"
labels: []
synced_at: "2026-07-04T10:00:11.691218Z"
---

# LTI

## LTI 1.3
### Necessary information
- OIDC login initation URL

entry step to OIDC flow

- necessary for authorization → tool (provider) provides the LMS with the necessary information (for token generation) via session specific parameters + nonce (random, unique number) + setting redirect uri

- Tool redirect URL

necessary for the user to be redirected back to LMS after with JWT for token (LMS authenticates and issues signed token)

- can have multiple URLs, at least one needed

- LTI 1.3 target URL

LMS redirects back to tool’s endpoint with signed token

- Tool public key OR Tool JWKS URL

validates the signed token for correctness and expiry

- public key is outdated as it is static, JWKS is preferred as it changes dynamically

- if both are available JWKS should be used

### Optional
- LTI organiser ID

A clear identification for this LMS. The DNS name of the organisation is usually used. If this field is empty, the host name of the learning platform is used.

- should still work without the lti organiser id

- Deeplink URL

linking directly to a media