---
title: "Learning List"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/92798977/Learning+List"
confluence_version: 9
last_updated: "2026-04-23T21:27:03.204Z"
labels: []
synced_at: "2026-05-03T09:15:04.263251Z"
---

# Learning List

# Learning List
Diese Seite enthält alle Lernmaterialien, strukturiert nach vier Kategorien. Jedes Material ist mit einer Priorität versehen für den automatisierten Lernassistenten.

**Prioritäten:** 🔴 Hoch – direkt relevant für aktuelle Rolle | 🟡 Mittel – wichtig, kein Zeitdruck | 🟢 Backlog – nachrangig

**Rotation:** Täglich wird pro Kategorie ein noch nicht absolviertes 🔴-Element ausgewählt. Bücher sind **nicht Teil der täglichen Rotation** – sie stehen in der separaten Sektion am Ende und werden nur auf explizite Anfrage empfohlen.

**Hinweis System Design:** Die extrahierten Themen decken die PM-relevante Konzeptebene ab. Die übrigen Themen im ByteByteGo-Repo (Kubernetes-Internals, Cloud-Infrastruktur-Details etc.) sind kein fixes Pflichtprogramm – bei Bedarf situativ nachlesen.

---
## 1. Technische Skills
### 1.1 Technical Foundations (Kurs-Recap)
Interne Notizenseite: [https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/4554753](https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/4554753/Technical+Foundations)

| Material

 | Link

 | Priorität

 | Status

 |
| Scaling a REST Application

 | [Link](https://albusdd.medium.com/scaling-a-rest-application-b50b3d9c3b10)

 | 🔴 Hoch

 |  |
| Best Practices for Secure & Scalable APIs (MuleSoft)

 | [Link](https://www.mulesoft.com/api/best-practices-building-secure-and-scalable-api)

 | 🔴 Hoch

 |  |
| How the Web Works (YouTube)

 | [Link](https://www.youtube.com/watch?v=j3XufmvEMiM)

 | 🟡 Mittel

 |  |
| HTTP & Web Fundamentals (YouTube)

 | [Link](https://www.youtube.com/watch?v=eIQh02xuVw4)

 | 🟡 Mittel

 |  |
| Web Performance Basics (YouTube)

 | [Link](https://www.youtube.com/watch?v=4vLxWqE94l4)

 | 🟢 Backlog

 |  |
### 1.2 API Fundamentals (Kurs-Recap)
| Material

 | Link

 | Priorität

 | Status

 |
| HTTP Status Codes – Übersicht

 | [Link](https://umbraco.com/knowledge-base/http-status-codes/)

 | 🔴 Hoch

 |  |
| API Styles Guide (REST, GraphQL, gRPC, WebSocket)

 | [Link](https://speakerdeck.com/zdne/what-api-your-guide-to-api-styles)

 | 🔴 Hoch

 |  |
| Top 7 API Authentication Methods

 | [Link](https://zuplo.com/learning-center/top-7-api-authentication-methods-compared)

 | 🔴 Hoch

 |  |
| Adidas API Design Guidelines (Real-World Beispiel)

 | [Link](https://adidas.gitbook.io/api-guidelines)

 | 🔴 Hoch

 |  |
| API Design – Kurs-Repository (Paraskakis)

 | [Link](https://github.com/paraskakis/apidesign/tree/main/maven)

 | 🔴 Hoch

 |  |
| OpenAPI Specification (Offizielle Docs)

 | [Link](https://spec.openapis.org/oas/v3.2.0.html)

 | 🟡 Mittel

 |  |
| Swagger Editor

 | [Link](https://editor.swagger.io/)

 | 🟡 Mittel

 |  |
| OpenAPI Tools Übersicht

 | [Link](https://openapi.tools/)

 | 🟡 Mittel

 |  |
| OpenAPI Fundamentals Kurs (Linux Foundation)

 | [Link](https://training.linuxfoundation.org/express-learning/openapi-fundamentals-lfel1011/)

 | 🟡 Mittel

 |  |
| Arazzo Specification (API Workflows)

 | [Link](https://www.openapis.org/arazzo-specification)

 | 🟡 Mittel

 |  |
| Moesif – API Analytics Tool

 | [Link](https://www.moesif.com/)

 | 🟡 Mittel

 |  |
| API Developer Experience Canvas (Miro)

 | [Link](https://miro.com/miroverse/api-developer-experience-canvas/)

 | 🟡 Mittel

 |  |
| API Design Patterns & Best Practices (GitHub Gist)

 | [Link](https://gist.github.com/kislayverma/d48b84db1ac5d737715e8319bd4dd368)

 | 🟡 Mittel

 |  |
| What is an API? (YouTube)

 | [Link](https://www.youtube.com/watch?v=aAb7hSCtvGw)

 | 🟡 Mittel

 |  |
| UUID Versions erklärt

 | [Link](https://ntietz.com/blog/til-uses-for-the-different-uuid-versions/)

 | 🟢 Backlog

 |  |
| [Schema.org](http://Schema.org)

 | [Link](https://schema.org/)

 | 🟢 Backlog

 |  |
| IANA Media Types

 | [Link](https://www.iana.org/assignments/media-types/media-types.xhtml)

 | 🟢 Backlog

 |  |
| Mockbin – API Testing

 | [Link](https://mockbin.io/)

 | 🟢 Backlog

 |  |
| HTTPie – API Client

 | [Link](https://httpie.io/app)

 | 🟢 Backlog

 |  |
| JSON Lint

 | [Link](https://jsonlint.com/)

 | 🟢 Backlog

 |  |
| UUID Generator

 | [Link](https://www.uuidgenerator.net/version7)

 | 🟢 Backlog

 |  |
| URL Encoder

 | [Link](https://www.urlencoder.org/)

 | 🟢 Backlog

 |  |

---
## 2. System Design
**Quelle:** ByteByteGo system-design-101 – [https://github.com/ByteByteGoHq/system-design-101/blob/main/README.md](https://github.com/ByteByteGoHq/system-design-101/blob/main/README.md)

Jedes Thema unten ist eine eigenständige Lern-Session. Anker-Links führen direkt zum jeweiligen Abschnitt im README.

### 2.1 Kommunikation & APIs
| Thema

 | Link

 | Priorität

 | Status

 |
| REST vs. GraphQL vs. gRPC vs. WebSocket

 | [Link](https://github.com/ByteByteGoHq/system-design-101#communication-protocols)

 | 🔴 Hoch

 |  |
| Was passiert wenn du eine URL aufrufst?

 | [Link](https://github.com/ByteByteGoHq/system-design-101#what-happens-when-you-type-a-url)

 | 🔴 Hoch

 |  |
| API Gateway – Funktion & Einsatz

 | [Link](https://github.com/ByteByteGoHq/system-design-101#api-gateway)

 | 🔴 Hoch

 |  |
| Load Balancer – Algorithmen & Typen

 | [Link](https://github.com/ByteByteGoHq/system-design-101#load-balancer)

 | 🔴 Hoch

 |  |
### 2.2 Datenspeicherung & Datenbanken
| Thema

 | Link

 | Priorität

 | Status

 |
| SQL vs. NoSQL – Wann was?

 | [Link](https://github.com/ByteByteGoHq/system-design-101#sql-vs-nosql)

 | 🔴 Hoch

 |  |
| Datenbanktypen im Überblick

 | [Link](https://github.com/ByteByteGoHq/system-design-101#types-of-databases)

 | 🔴 Hoch

 |  |
| Caching-Strategien (wo & wie cachen?)

 | [Link](https://github.com/ByteByteGoHq/system-design-101#cache)

 | 🟡 Mittel

 |  |
| Redis – Warum so schnell & Anwendungsfälle

 | [Link](https://github.com/ByteByteGoHq/system-design-101#why-is-redis-so-fast)

 | 🟡 Mittel

 |  |
### 2.3 Sicherheit & Authentifizierung
| Thema

 | Link

 | Priorität

 | Status

 |
| OAuth 2.0 – Ablauf visualisiert

 | [Link](https://github.com/ByteByteGoHq/system-design-101#oauth-20-with-openid-connect)

 | 🔴 Hoch

 |  |
| JWT erklärt (Header, Payload, Signature)

 | [Link](https://github.com/ByteByteGoHq/system-design-101#jwt-json-web-token)

 | 🔴 Hoch

 |  |
| Session vs. Token vs. JWT vs. SSO

 | [Link](https://github.com/ByteByteGoHq/system-design-101#session-cookie-jwt-token-sso-and-oauth)

 | 🟡 Mittel

 |  |
| Passwort-Hashing & Salting

 | [Link](https://github.com/ByteByteGoHq/system-design-101#how-to-store-passwords-safely)

 | 🟡 Mittel

 |  |
### 2.4 Architekturmuster
| Thema

 | Link

 | Priorität

 | Status

 |
| Microservices vs. Monolith

 | [Link](https://github.com/ByteByteGoHq/system-design-101#microservices)

 | 🔴 Hoch

 |  |
| Event-Driven Architecture & Message Queues

 | [Link](https://github.com/ByteByteGoHq/system-design-101#message-queue)

 | 🟡 Mittel

 |  |
| CI/CD Pipeline visualisiert

 | [Link](https://github.com/ByteByteGoHq/system-design-101#cicd-pipeline)

 | 🟡 Mittel

 |  |
| Docker erklärt

 | [Link](https://github.com/ByteByteGoHq/system-design-101#docker-vs-kubernetes)

 | 🟢 Backlog

 |  |
| Kubernetes in 15 Minuten

 | [Link](https://github.com/ByteByteGoHq/system-design-101#kubernetes)

 | 🟢 Backlog

 |  |
### 2.5 Real-World Architekturen
| Thema

 | Link

 | Priorität

 | Status

 |
| Netflix Systemarchitektur

 | [Link](https://github.com/ByteByteGoHq/system-design-101#netflix)

 | 🟡 Mittel

 |  |
| Airbnb – Von Monolith zu Microservices

 | [Link](https://github.com/ByteByteGoHq/system-design-101#airbnb)

 | 🟡 Mittel

 |  |
| Twitter/X Architektur

 | [Link](https://github.com/ByteByteGoHq/system-design-101#twitter)

 | 🟢 Backlog

 |  |

---
## 3. UX & Design
**Hinweis:** Alle drei Quellen enthalten jeweils viele Sub-Ressourcen. Jede Zeile unten ist eine eigenständige Lern-Session.

### 3.1 Laws of UX – 21 Einzelgesetze ([lawsofux.com](http://lawsofux.com))
Jedes Gesetz hat eine eigene Seite mit Erklärung, Beispielen und PM-Implikationen.

| Gesetz

 | Link

 | Priorität

 | Status

 |
| Hick's Law – Weniger Optionen = schnellere Entscheidung

 | [Link](https://lawsofux.com/hicks-law/)

 | 🔴 Hoch

 | ✅ Erledigt

 |
| Jakob's Law – Nutzer erwarten bekannte Muster

 | [Link](https://lawsofux.com/jakobs-law/)

 | 🔴 Hoch

 | ✅ Erledigt

 |
| Miller's Law – 7 ± 2 Elemente im Arbeitsgedächtnis

 | [Link](https://lawsofux.com/millers-law/)

 | 🔴 Hoch

 |  |
| Fitts's Law – Größe & Distanz von Klickzielen

 | [Link](https://lawsofux.com/fittss-law/)

 | 🔴 Hoch

 |  |
| Peak-End Rule – Erinnerung an Höhepunkt & Ende

 | [Link](https://lawsofux.com/peak-end-rule/)

 | 🔴 Hoch

 |  |
| Aesthetic-Usability Effect – Schönes wirkt nutzbarer

 | [Link](https://lawsofux.com/aesthetic-usability-effect/)

 | 🔴 Hoch

 |  |
| Tesler's Law – Komplexität lässt sich nicht eliminieren

 | [Link](https://lawsofux.com/teslers-law/)

 | 🔴 Hoch

 |  |
| Goal-Gradient Effect – Näher am Ziel = mehr Motivation

 | [Link](https://lawsofux.com/goal-gradient-effect/)

 | 🟡 Mittel

 |  |
| Zeigarnik Effect – Unfertige Aufgaben bleiben im Kopf

 | [Link](https://lawsofux.com/zeigarnik-effect/)

 | 🟡 Mittel

 |  |
| Von Restorff Effect – Das Andersartige wird erinnert

 | [Link](https://lawsofux.com/von-restorff-effect/)

 | 🟡 Mittel

 |  |
| Pareto Principle – 80/20 Regel

 | [Link](https://lawsofux.com/pareto-principle/)

 | 🟡 Mittel

 |  |
| Doherty Threshold – Reaktion unter 400ms

 | [Link](https://lawsofux.com/doherty-threshold/)

 | 🟡 Mittel

 |  |
| Parkinson's Law – Aufgaben füllen verfügbare Zeit

 | [Link](https://lawsofux.com/parkinsons-law/)

 | 🟡 Mittel

 |  |
| Postel's Law – Tolerant empfangen, präzise senden

 | [Link](https://lawsofux.com/postels-law/)

 | 🟡 Mittel

 |  |
| Serial Position Effect – Erstes & Letztes wird erinnert

 | [Link](https://lawsofux.com/serial-position-effect/)

 | 🟡 Mittel

 |  |
| Law of Proximity – Nähe signalisiert Zusammengehörigkeit

 | [Link](https://lawsofux.com/law-of-proximity/)

 | 🟢 Backlog

 |  |
| Law of Similarity – Ähnliches wird als Gruppe wahrgenommen

 | [Link](https://lawsofux.com/law-of-similarity/)

 | 🟢 Backlog

 |  |
| Law of Common Region – Gemeinsamer Bereich = Gruppe

 | [Link](https://lawsofux.com/law-of-common-region/)

 | 🟢 Backlog

 |  |
| Law of Uniform Connectedness – Verbundenes gehört zusammen

 | [Link](https://lawsofux.com/law-of-uniform-connectedness/)

 | 🟢 Backlog

 |  |
| Occam's Razor – Einfachste Lösung bevorzugen

 | [Link](https://lawsofux.com/occams-razor/)

 | 🟢 Backlog

 |  |
| Prägnanzprinzip – Ordnung wird bevorzugt wahrgenommen

 | [Link](https://lawsofux.com/pr%C3%A4gnanzprinzip/)

 | 🟢 Backlog

 |  |