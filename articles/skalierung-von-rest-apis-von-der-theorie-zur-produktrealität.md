---
title: "Skalierung von REST APIs – Von der Theorie zur Produktrealität"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/103743489/Skalierung+von+REST+APIs+Von+der+Theorie+zur+Produktrealit+t"
confluence_version: 2
last_updated: "2026-05-12T15:15:24.810Z"
labels: []
synced_at: "2026-06-18T11:45:14.197269Z"
---

# Skalierung von REST APIs – Von der Theorie zur Produktrealität

REST-APIs sind das Nervensystem moderner Anwendungen – aber nur, wenn sie unter Last nicht zusammenbrechen. Skalierbarkeit ist nicht nur ein technisches Problem. Es ist eine Produktdefinitions-Herausforderung.

Die Skalierbarkeit von REST-Anwendungen basiert auf drei Dimensionen: der **vertikalen Skalierung** (mehr Power auf einer Maschine), der **horizontalen Skalierung** (mehrere Maschinen) und dem **Datenspeicher-Skalierungsmodell** (wie Daten verteilt werden). Letzteres bedeutet konkret: weniger Datenbankzugriffe durch Caching, Indexing und Query-Optimierung – nicht nur durch vereinfachte Anfragen. Jede dieser Dimensionen hat unterschiedliche Implikationen für die Produktentwicklung.

Wenn ich als PM eine neue Integrations-API definiere, muss ich verstehen: Wird diese als Single-Instance laufen oder muss sie von Anfang an horizontal skalierbar sein? Das bestimmt die Architekturentscheidungen des Teams. Hier ist die entscheidende Unterscheidung: **Stateless vs. Stateful**.

Ein **Stateless-System** speichert keine Nutzersession auf dem Server – jeder Request ist in sich selbst vollständig. Das ermöglicht echtes horizontales Skalieren, weil ein Load Balancer Requests frei auf beliebige Server verteilen kann. Bei einem **Stateful-System** hingegen "klebt" die Session an einem bestimmten Server. Load Balancer können das zwar über sogenannte *Sticky Sessions* abbilden – aber das ist eine Notlösung, keine Skalierungsstrategie. Fällt der gebundene Server aus, verlieren alle seine Nutzer ihre Session. Der Load Balancer existiert, erfüllt aber seinen eigentlichen Zweck nicht: freie, redundante Verteilung.

Für den PM ist das eine relevante Frühentscheidung: Stateless-Architektur ist keine Selbstverständlichkeit. Features wie "zuletzt geöffnete Dokumente" oder "aktiver Warenkorb" setzen Session-Management voraus – und damit muss das Team eine bewusste Entscheidung treffen, wie der State gespeichert wird (z.B. in einer externen Datenbank oder einem Cache wie Redis), damit das System trotzdem skalierbar bleibt.

Ein praktisches Beispiel: Bei IMC hatten wir ein Report-Export-Feature, das bei vielen gleichzeitigen Anfragen langsam wurde. Die Lösung war nicht einfach „mehr Server", sondern eine Umstrukturierung auf asynchrone, queued Jobs – das ist eine Produktentscheidung, nicht nur eine technische. Diese Unterscheidung zwischen vertikaler und horizontaler Skalierung, zwischen Stateless- und Stateful-Systemen, prägt die gesamte Architektur und sollte bereits in der PRD-Phase bedacht sein.

Zur Praxis: Moderne REST-APIs skalieren durch Kombination von Load Balancing (Requests verteilen), Caching (weniger DB-Hits), und Asynchronous Processing (lange Aufgaben auslagern). Ein PM muss nicht selbst Load-Balancer-Algorithmen erklären können – aber verstehen, dass „schneller under Load" bedeutet: Redundanz braucht Koordination. Und Koordination kostet.

**Fazit:** Die Skalierungsfähigkeit einer REST-API definiert nicht nur technische Grenzen, sondern auch Produktmöglichkeiten. Stateless ist dabei nicht nur „besser für Load Balancing" – es ist die Voraussetzung dafür, dass Load Balancing seinen eigentlichen Zweck erfüllt. Diese Unterscheidung gehört in die Feature-Definition – nicht erst in die Implementierung.