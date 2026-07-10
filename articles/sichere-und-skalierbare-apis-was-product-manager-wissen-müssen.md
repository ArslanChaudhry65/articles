---
title: "Sichere und skalierbare APIs: Was Product Manager wissen müssen"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/106397697/Sichere+und+skalierbare+APIs+Was+Product+Manager+wissen+m+ssen"
confluence_version: 1
last_updated: "2026-05-18T18:41:22.512Z"
labels: []
synced_at: "2026-07-10T10:44:49.499212Z"
---

# Sichere und skalierbare APIs: Was Product Manager wissen müssen

Als Product Manager muss ich keine APIs selbst entwickeln – aber ich muss verstehen, welche Entscheidungen beim API-Design Produktrisiken erzeugen oder verhindern. Wer diese Grundlagen kennt, trifft bessere Scoping-Entscheidungen und führt produktivere Gespräche mit dem Engineering-Team.

## Authentifizierung und Autorisierung sind nicht dasselbe
Der häufigste Fehler in frühen Produkt-Diskussionen ist, Authentifizierung und Autorisierung als ein einziges Problem zu behandeln. Dabei beschreiben sie zwei grundlegend verschiedene Fragen: „Wer bist du?" und „Was darfst du tun?" Authentifizierung prüft die Identität – zum Beispiel über OAuth-Tokens oder API-Keys. Autorisierung entscheidet danach, welche Ressourcen und Aktionen dieser Identität erlaubt sind. Für mich als PM bedeutet das: Sobald wir externe Partner oder mehrere Nutzerrollen planen, muss ich beide Konzepte im Scoping explizit adressieren – nicht als technisches Detail, sondern als Produktanforderung.

## Rate Limiting schützt das Produkt vor sich selbst
Eine API ohne Mengenbegrenzung ist wie ein Ticket-System ohne Warteliste: Wenn alle gleichzeitig kommen, bricht alles zusammen. Rate Limiting legt fest, wie viele Anfragen ein Aufrufer in einem bestimmten Zeitfenster senden darf. Das schützt nicht nur vor böswilligen Angreifern, sondern auch vor fehlerhaften Integrationen oder unerwartetem Traffic-Anstieg. In der Praxis sitzt Rate Limiting oft im API Gateway – dem zentralen Eintrittspunkt, über den alle Anfragen laufen. Wer als PM ein Partner-API-Feature scopt, sollte die Limits frühzeitig definieren: zu hoch gewählt, riskierst du Stabilität; zu niedrig, frustrierst du legitime Partner.

## Skalierbarkeit beginnt in der Anforderungsphase
Horizontale Skalierung – also mehr Instanzen desselben Services statt einer stärkeren Maschine – ist heute der Standard in modernen Cloud-Architekturen. Als PM muss ich nicht entscheiden, wie skaliert wird. Aber ich muss wissen, ob eine geplante Funktion zustandslos ist (gut skalierbar) oder Sitzungsdaten im Speicher hält (schlecht skalierbar). Diese Frage früh zu stellen spart Nacharbeiten im Sprint und verhindert Architekturentscheidungen, die später schwer rückgängig zu machen sind.

## PM-Anwendung: API-Feature für externe Partner
Bei IMC habe ich ein Feature für externe Partner-Integrationen begleitet. Die erste Version des PRD erwähnte Authentifizierung als einzige Sicherheitsanforderung. In der Refinement-Session stellte sich heraus, dass weder Rate Limiting noch ein klares Autorisierungsmodell definiert waren. Das Engineering-Team hatte Annahmen getroffen, die nicht zu den tatsächlichen Kundenerwartungen passten. Durch ein nachträgliches Scoping-Update konnten wir beides klären – aber der Aufwand wäre vermeidbar gewesen, wenn ich diese Fragen von Anfang an im Template verankert hätte.

## Fazit
Sichere und skalierbare APIs entstehen nicht durch guten Code allein – sie entstehen durch präzise Anforderungen. Als Product Manager ist meine Aufgabe, Authentifizierung, Autorisierung, Rate Limiting und Skalierungsverhalten als eigenständige Akzeptanzkriterien zu behandeln, nicht als implizite Aufgaben des Engineering-Teams.