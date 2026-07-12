---
title: "Hick's Law: Warum weniger Optionen bessere Produkte bauen"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/93159440/Hick+s+Law+Warum+weniger+Optionen+bessere+Produkte+bauen"
confluence_version: 2
last_updated: "2026-04-19T07:01:19.211Z"
labels: []
synced_at: "2026-07-12T09:43:39.736824Z"
---

# Hick's Law: Warum weniger Optionen bessere Produkte bauen

# Hick's Law: Warum weniger Optionen bessere Produkte bauen
*Kategorie: UX & Design | Lern-Session: 19. April 2026*

---
Jedes Mal, wenn ein Nutzer auf einen Screen schaut und nicht sofort weiß, was er tun soll, hat das Produkt ein Problem. Hick's Law beschreibt genau diesen Moment – und gibt uns als PMs ein klares Werkzeug, ihn zu vermeiden.

## Was Hick's Law aussagt
Das Gesetz ist simpel: Je mehr Optionen ein Nutzer hat, desto länger braucht er, um eine Entscheidung zu treffen. Dieser Anstieg verläuft nicht linear, sondern logarithmisch – die ersten zusätzlichen Optionen kosten am meisten Zeit. Von zwei auf vier Möglichkeiten zu springen ist schmerzhafter als von zehn auf zwölf.

Für den Alltag als PM bedeutet das: Nicht die Gesamtkomplexität ist das Problem, sondern der Moment, in dem der Nutzer zum ersten Mal wählen muss.

## Wie es in echten Produkten aussieht
### ❌ Negativ-Beispiel: SAP
SAP ist das bekannteste Beispiel für Hick's Law in seiner schlimmsten Form. Wer SAP-Oberflächen kennt, weiß: Dutzende Menüpunkte auf einer Ebene, verschachtelte Transaktionscodes, Formulare mit 30+ Feldern auf einem Screen.

📸 *[Screenshot-Empfehlung: SAP-Hauptmenü oder eine typische Transaktionsmaske – zeigt die Optionsdichte auf einen Blick.]*

Das Ergebnis: Neue Nutzer brauchen Monate, um produktiv zu werden. Erfahrene Nutzer entwickeln Umgehungsstrategien (auswendig gelernte Transaktionscodes), weil die Oberfläche selbst nicht navigierbar ist. Die kognitive Last wird nicht vom System getragen – sondern vom Nutzer.

### ✅ Positiv-Beispiel: Linear
Linear (ein Projektmanagement-Tool für Software-Teams) hat die gegenteilige Philosophie konsequent umgesetzt. Die Navigation ist auf das Wesentliche reduziert, neue Issues werden mit smarten Defaults vorausgefüllt, und komplexere Einstellungen sind in Unterbereichen versteckt, die die meisten Nutzer nie brauchen.

📸 *[Screenshot-Empfehlung: Linear Issue-Erstellungsmaske – zeigt wenige, klare Felder mit Vorauswahl.]*

Der Effekt ist spürbar: Nutzer kommen nach Minuten zu ihrer ersten sinnvollen Aktion – nicht nach Stunden Einarbeitung. Kein Zufall, sondern eine bewusste Produktentscheidung.

## Drei Prinzipien für die Praxis
**1. Progressive Disclosure – Entscheidungen aufteilen**

Die Lösung für komplexe Filter oder Formulare ist nicht Vereinfachung um jeden Preis, sondern Sequenzierung: zuerst eine Oberkategorie, dann Unterkategorien, dann Details. Jede Ebene ist eine kleine, handhabbare Entscheidung.

In meiner Arbeit an Dashboard-Features bei IMC haben wir Filterpfade schrittweise aufgebaut statt alles auf einmal anzuzeigen – Nutzer nutzten Filter danach häufiger und gezielter.

**2. Visuelle Hierarchie – den nächsten Schritt sichtbar machen**

Wenn eine Option klar hervorgehoben ist – durch Farbe, Schriftgröße oder Position – entfällt der Abwägungsprozess weitgehend. Der Nutzer folgt dem visuellen Signal, ohne aktiv zu vergleichen. Das ist kein Trick, sondern gutes Design: Zeig dem Nutzer, was als nächstes sinnvoll ist.

**3. Vorauswahl – die stärkste Reduktion**

Die radikalste Anwendung: die Entscheidung ganz eliminieren. Wenn 80 % der Nutzer einen bestimmten Filter als erstes setzen, sollte dieser Filter bereits vorausgewählt sein. Kein Auswahlaufwand, kein Entscheidungszeitaufwand – und wer abweichen will, kann es trotzdem.

## Was das für Produktentscheidungen bedeutet
Hick's Law ist kein UX-Detail, das man dem Designteam überlässt. Es ist ein Argument, das ich in Refinements und Discovery-Gesprächen aktiv einsetze: Wenn ein Stakeholder mehr Features auf einen Screen packen möchte, ist das keine Frage des Platzes, sondern der Entscheidungszeit des Nutzers.

Die Frage ist nicht „Können wir das noch unterbringen?" Die Frage ist: „Was kostet diese zusätzliche Option den Nutzer – und zahlt sie sich aus?"

## Fazit
Weniger Optionen bedeuten nicht weniger Funktionalität. Sie bedeuten schnellere, sicherere Entscheidungen – und zufriedenere Nutzer. Hick's Law gibt uns als PMs die Sprache, um das in Gesprächen mit Design und Engineering konkret zu begründen: nicht als Meinung, sondern als Prinzip.

---
*Dieser Artikel entstand im Rahmen meines strukturierten Lernprogramms zu UX & Produktmanagement.*

---
## 💼 LinkedIn-Version

---
Jedes Mal, wenn ein Nutzer nicht weiß, wo er klicken soll, hat das Produkt ein Problem.

Hick's Law erklärt warum – und wie man es löst.

Das Gesetz: Je mehr Optionen, desto länger die Entscheidungszeit. Und das Gemeine: Die ersten zusätzlichen Optionen schmerzen am meisten.

Zwei echte Beispiele aus der Praxis:

❌ **SAP**: Dutzende Menüpunkte auf einer Ebene, Formulare mit 30+ Feldern. Neue Nutzer brauchen Monate. Erfahrene lernen Workarounds, weil die UI selbst nicht navigierbar ist.

✅ **Linear**: Reduzierte Navigation, smarte Vorauswahl, Komplexität versteckt hinter dem, was die meisten Nutzer nie brauchen. Neue Nutzer sind nach Minuten produktiv.

Der Unterschied ist keine Frage des Feature-Umfangs. Es ist eine Frage der Entscheidungsarchitektur.

Als PM wende ich daraus drei Prinzipien an:

→ **Progressive Disclosure**: Komplexe Filter in Schritte aufteilen, nicht alles auf einmal zeigen.
→ **Visuelle Hierarchie**: Den nächsten sinnvollen Schritt hervorheben, damit Nutzer nicht vergleichen müssen.
→ **Vorauswahl**: Wenn 80 % der Nutzer dieselbe erste Wahl treffen – diese Wahl als Default setzen.

Die Frage in Stakeholder-Gesprächen ist nicht „Können wir das noch unterbringen?"

Die Frage ist: „Was kostet diese Option den Nutzer – und zahlt sie sich aus?"

---
*Lernst du gerade auch systematisch UX-Prinzipien? Ich dokumentiere meinen Lernpfad regelmäßig hier.*

#ProductManagement #UX #HicksLaw #ProductDesign #Produktmanagement