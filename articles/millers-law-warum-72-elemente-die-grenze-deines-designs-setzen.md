---
title: "Miller's Law – Warum 7±2 Elemente die Grenze deines Designs setzen"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/103776257/Miller+s+Law+Warum+7+2+Elemente+die+Grenze+deines+Designs+setzen"
confluence_version: 2
last_updated: "2026-05-12T15:15:47.612Z"
labels: []
synced_at: "2026-07-29T10:31:05.761740Z"
---

# Miller's Law – Warum 7±2 Elemente die Grenze deines Designs setzen

Die meisten Dashboards sind zu vollgepackt. Aber das ist nicht Verantwortungslosigkeit – es ist Psychologie. Miller's Law besagt, dass das menschliche Arbeitsgedächtnis etwa sieben, plus oder minus zwei, Informationseinheiten gleichzeitig verarbeiten kann. Das ist eine harte biologische Grenze.

Miller's Law kommt aus Cognitive Psychology und wurde von George A. Miller in seinem Paper „The Magical Number Seven, Plus or Minus Two" formuliert. Das Arbeitsgedächtnis ist nicht der Speicher (das ist das Langzeitgedächtnis) – es ist die Verarbeitungszentrale. Wenn ein Nutzer ein Dashboard öffnet und es enthält 15 verschiedene Metriken, Buttons und Filter gleichzeitig, kann er maximal 7±2 von ihnen kognitiv „halten" und verarbeiten. Der Rest? Wird ignoriert oder verwirrt den Nutzer.

Im PM-Alltag entstehen daraus zwei konkrete Designstrategien. Die erste ist **Chunking**: Statt 15 Elemente auf einer Seite werden verwandte Elemente in logische Gruppen gegliedert – jede Gruppe mit maximal 5-7 Elementen. Die zweite Strategie ist der **Step-by-Step Flow**: Komplexe Prozesse werden in Schritte aufgeteilt, bei denen pro Schritt maximal 7±2 kognitive Einheiten präsent sind. Bei der IMC Learning Suite haben wir genau das umgesetzt: Das alte Dashboard zeigte 15+ Kennzahlen gleichzeitig. Wir gruppierten sie in 3 logisch zusammenhängende Blöcke (Engagement, Performance, Administration) – jeder Block mit 5-6 verwandten Elementen. Das Ergebnis: Bessere Usability, weniger Scrolling, schnellere Entscheidungen.

**Miller's Law und Hick's Law: Zwei Gesetze, eine Richtung**

Miller's Law lässt sich nicht isoliert betrachten. Hick's Law besagt, dass mehr Optionen zu längerer Entscheidungszeit führen. Die Unterscheidung ist wichtig: Hick's Law adressiert ein **Zeit-Problem** (wie lange braucht ein Nutzer zur Entscheidung?), Miller's Law ein **Kapazitäts-Problem** (wie viele Elemente kann der Nutzer gleichzeitig kognitiv verarbeiten?). Beide Gesetze korrelieren positiv: Weniger Elemente reduzieren gleichzeitig Entscheidungszeit und Arbeitsgedächtnis-Überlastung. In der Praxis bedeutet das: Hick's Law nutze ich um Nutzer durch einen Prozess zu führen (Entscheidungsarchitektur), Miller's Law um Klarheit auf einer einzelnen Ansicht sicherzustellen (Informationsarchitektur). Zusammen bilden sie das Grundgerüst für nutzerfreundliche Produktentscheidungen.

Das Wichtige: Miller's Law ist nicht eine Regel „mache alles klein und einfach". Es ist eine Regel über mentale Kapazität. Sieben komplexe Konzepte nutzen die Grenze vollständig. Sieben einfache Toggles sind trotzdem Überlastung – wenn sie keinen Sinn ergeben.

**Fazit:** Miller's Law ist ein konkretes Designkriterium für PM-Arbeit. Beim nächsten Feature-Request ist „Kann der Nutzer 7±2 Elemente kognitiv verarbeiten?" oft das beste Priorisierungs-Argument. Weniger ist nicht immer besser – aber fokussierter ist immer besser.