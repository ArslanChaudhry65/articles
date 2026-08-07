# Briefkopfvorlage

Briefbogen als Word-Dokument: **DIN 5008 Form B** für die Geometrie, die
[Design Identity](../../) für Typografie, Farbe und Form. Ergebnis:
[`../Briefkopfvorlage-DIN5008-B.docx`](../Briefkopfvorlage-DIN5008-B.docx).

Die Datei hat zwei Seiten: den fertigen Briefbogen und eine Hinweisseite, die
vor dem Versand gelöscht wird. Alle Inhalte sind Platzhalter in eckigen
Klammern und tragen bereits die richtige Formatierung — wer sie überschreibt,
muss nichts nachformatieren.

## Bauen

```bash
./fonts.sh      # einmalig: IBM Plex holen und nach TTF wandeln
npm install
npm run build   # schreibt ../Briefkopfvorlage-DIN5008-B.docx
```

`build.js` nimmt optional einen Ausgabepfad als Argument.

## Geometrie

Alle Maße ab der oberen Blattkante, DIN 5008:2020 Form B:

| Element | Maß |
|---|---|
| Briefkopf | 0–45 mm (Kopfzeile der ersten Seite) |
| Anschriftfeld | 45–85 mm, 85 mm breit — 3 Zeilen Zusatz-/Vermerkzone, bis 6 Zeilen Anschrift |
| Informationsblock | ab 45 mm, rechtsbündig, 75 mm breit |
| Betreffzeile | 98,46 mm |
| Falzmarken | 105 mm und 210 mm |
| Lochmarke | 148,5 mm |
| Ränder | links 24,1 mm, rechts 20 mm, oben 45 mm, unten 30 mm |

Anschriftfeld und Informationsblock stehen in einer rahmenlosen Tabelle mit
einer Mindesthöhe von 40 mm. Vier vorbelegte Anschriftzeilen halten das Feld
darunter; kommen weitere hinzu, wächst die Zeile und alles darunter rückt nach.
Das ist gewollt — die Alternative wäre eine feste Höhe, die überzählige Zeilen
abschneidet.

Falz- und Lochmarken sind seitenabsolut verankerte Absätze mit Oberlinie
(`frame` mit `anchor: PAGE`) und liegen im linken Rand, damit sie mit dem
Textfluss nichts zu tun haben.

## Umrechnung der Tokens

Die Design Identity ist in px notiert, Word rechnet in halben Punkten, Twips
und Achtelpunkten. `tokens.js` hält die Umrechnung an einer Stelle:

```
1 px = 0,75 pt = 15 twips = 1,5 half-points
```

Damit fällt das 4-px-Raster auf ein 60-Twip-Raster. Zwei Stufen der Typo-Skala
liegen nicht auf einem halben Punkt (11 px = 8,25 pt, 13 px = 9,75 pt) und
werden auf die nächste Halbpunktstufe gerundet — feiner kann Word nicht.

Zwei Dinge weichen bewusst ab:

**Farben.** Ein .docx ist druckgebunden, deshalb gilt durchgängig der
Paper-Scope aus `references/tokens.md`: die Papiertöne gehen auf `#FFFFFF`,
`line` und `line-strong` fallen auf `#D8CFC0` zusammen, `ink-3` auf `ink-2`,
der Akzent auf `#0F4E52`. Kein warmer Grund, weil er auf Papier entweder Toner
kostet oder verschwindet, sobald der Treiber Hintergründe unterdrückt.

**Zeilenhöhe.** Word rechnet bei „mehrfach" gegen die natürliche Zeilenhöhe der
Schrift (bei IBM Plex rund 1,32 em), nicht gegen den Schriftgrad. Ein
CSS-`line-height` von 1,75 wäre so 2,31 em geworden. `lineHeight()` in
`build.js` rechnet das Verhältnis deshalb in einen absoluten Wert um und setzt
ihn als *Mindestabstand*, damit ein Ä nie oben abgeschnitten wird.

## Schriften

IBM Plex Sans, Serif und Mono sind als TTF in die .docx eingebettet — die
Vorlage braucht auf dem Zielrechner keine Installation. Die Kette ist:
eingebettete Fassung, sonst eine installierte gleichen Namens, sonst die in
`fontTable.xml` hinterlegte Ersatzschrift (Arial, Georgia, Consolas).

Zwei Eingriffe nach dem Packen erledigt `postProcess()` in `build.js`, weil
docx-js sie nicht selbst vornimmt:

1. Der `fontKey` muss laut ECMA-376 in Großbuchstaben stehen. docx-js schreibt
   ihn klein, wodurch die Datei das Schema verletzt und weder Word noch
   LibreOffice sie öffnen. Nur die Schreibweise ändert sich; die Bytes des
   Schlüssels, mit denen die Schriftdaten verschlüsselt sind, bleiben gleich.
2. `<w:embedTrueTypeFonts/>` in `settings.xml` — ohne dieses Flag ignoriert
   Word die eingebetteten Schriften.

Die Namen sind die der IBM-Dateien, inklusive der abgekürzten Schnitte
`IBM Plex Sans Medm` (500) und `IBM Plex Sans SmBld` (600). Das sieht in der
Schriftauswahl ungewohnt aus, deckt sich aber mit einer regulären
IBM-Plex-Installation — ausgeschriebene Namen würden dort auseinanderlaufen.

## Formatvorlagen

Alle Absatzformate tragen das Präfix `AC` und stehen in Word unter den
Formatvorlagen: `AC Betreff`, `AC Anrede`, `AC Fließtext`,
`AC Zwischenüberschrift`, `AC Anschrift`, `AC Label`, `AC Wert`,
`AC Signatur Name` und weitere. Anpassungen gehören in die Formatvorlage, nicht
in den einzelnen Absatz.

Gewichte: 400 Fließtext, 500 Überschriften, 600 ausschließlich die Wortmarke.
Mono trägt Labels, Kennungen, Datums- und Zahlenangaben — nie Fließtext.
Petrol `#0F4E52` markiert nur die kurze Akzentlinie über der Wortmarke und über
den Zwischenüberschriften; die einzige größere Farbfläche ist der eine
Callout-Kasten auf der Hinweisseite.

## Prüfen

```bash
python3 ~/.claude/skills/docx/scripts/office/validate.py ../Briefkopfvorlage-DIN5008-B.docx
soffice --headless --convert-to pdf --outdir /tmp ../Briefkopfvorlage-DIN5008-B.docx
```

Der Linter der Design Identity (`scripts/lint.py`) prüft HTML und greift hier
nicht; die Token-Treue steckt stattdessen in `tokens.js`, aus dem `build.js`
jeden Wert bezieht.
