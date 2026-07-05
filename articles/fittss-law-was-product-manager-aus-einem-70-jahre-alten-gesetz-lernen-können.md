---
title: "Fitts's Law: Was Product Manager aus einem 70 Jahre alten Gesetz lernen können"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/104398849/Fitts+s+Law+Was+Product+Manager+aus+einem+70+Jahre+alten+Gesetz+lernen+k+nnen"
confluence_version: 1
last_updated: "2026-05-13T14:52:13.182Z"
labels: []
synced_at: "2026-07-05T10:03:57.657979Z"
---

# Fitts's Law: Was Product Manager aus einem 70 Jahre alten Gesetz lernen können

## Fitts's Law: Was Product Manager aus einem 70 Jahre alten Gesetz lernen können
Dass gutes UI-Design intuitiv wirkt, ist kein Zufall – es folgt messbaren Prinzipien. Fitts's Law, formuliert von Paul Fitts im Jahr 1954, beschreibt mathematisch, wie lange ein Mensch braucht, um ein Ziel mit einer Zeige-Bewegung zu treffen. Die zwei entscheidenden Variablen: die Distanz zum Ziel und dessen Größe. Je weiter entfernt und je kleiner ein Element, desto länger die Bewegungszeit – und desto höher die Fehlerrate.

Für Product Manager ist das keine akademische Fußnote. Es ist ein operatives Designprinzip mit direktem Einfluss auf Conversion, Fehlerquoten und Nutzerzufriedenheit.

## Drei Implikationen für die Produktpraxis
Erstens: Primäre Aktionen gehören groß und nah. Der wichtigste Button auf einem Screen – „Weiter", „Kaufen", „Speichern" – sollte die größte Zielfläche haben und dort platziert sein, wo der Daumen bei mobiler Nutzung natürlich landet. Ein kleiner CTA-Button am oberen Bildschirmrand ist eine Designentscheidung gegen die eigene Conversion.

Zweitens: Screenränder sind kostenlos. Fitts's Law enthält einen oft übersehenen Sonderfall: Elemente, die an einen Bildschirmrand gestoßen werden, haben effektiv unendliche Tiefe – der Cursor kann nicht darüber hinaus. Desktopmenüs an der oberen Bildschirmkante oder der macOS-Menüleiste nutzen genau dieses Prinzip.

Drittens: Fehlkritische Aktionen sollten klein und isoliert sein. „Löschen"- oder „Abbrechen"-Buttons profitieren bewusst von schlechter Erreichbarkeit. Wer sie schwerer trifft, macht seltener Fehler. Das ist kein schlechtes Design – es ist Risikomanagement durch Fitts.

## Anwendung im Produktalltag
In meiner Arbeit an mobilen Dashboards bei IMC Learning war die Platzierung von Primär- vs. Sekundäraktionen ein wiederkehrendes Diskussionsthema im Refinement. Entwickler optimieren für technische Sauberkeit, Designer für visuelle Balance – aber keiner stellt systematisch die Frage: Welche Aktion wird am häufigsten ausgeführt, und wie groß ist ihre Zielfläche? Fitts's Law liefert dafür ein klares Kriterium, das ich in PRDs als Akzeptanzkriterium verankern kann: „Primäraktion muss mindestens 44×44pt Zielfläche haben (Apple HIG-Standard)."

## Fazit
Fitts's Law ist kein Designdetail – es ist ein Priorisierungswerkzeug. Als PM solltest du bei jedem Screen eine Frage stellen: Was ist die wichtigste Aktion, und ist sie für den Nutzer am einfachsten erreichbar? Wenn nicht, ist das ein Bug in der Informationsarchitektur, kein kosmetisches Problem.