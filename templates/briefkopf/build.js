/**
 * Briefkopfvorlage - DIN 5008 Form B, gestaltet nach der Design Identity
 * von Arslan Chaudhry.
 *
 *   node build.js [ausgabe.docx]
 *
 * Geometrie (DIN 5008:2020, Form B, Maße ab oberer Blattkante):
 *   Briefkopf            0     - 45,00 mm
 *   Anschriftfeld       45,00  - 85,00 mm   (85 mm breit, 40 mm hoch)
 *     Zusatz-/Vermerkzone  3 Zeilen
 *     Anschriftzone        6 Zeilen
 *   Informationsblock   45,00  -            (rechtsbündig, max. 75 mm breit)
 *   Betreffzeile        98,46 mm
 *   Falzmarke 1        105,00 mm
 *   Lochmarke          148,50 mm
 *   Falzmarke 2        210,00 mm
 *   Ränder             links 24,1 mm, rechts 20 mm, unten 30 mm
 */

const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");
const {
  AlignmentType,
  BorderStyle,
  CharacterSet,
  Document,
  Footer,
  FrameAnchorType,
  FrameWrap,
  Header,
  HeightRule,
  LineRuleType,
  PageBreak,
  PageNumber,
  Packer,
  Paragraph,
  ShadingType,
  Tab,
  TabStopType,
  Table,
  TableBorders,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
  convertMillimetersToTwip: mm,
} = require("docx");

const T = require("./tokens");

// --------------------------------------------------------------------------
// DIN-5008-Geometrie
// --------------------------------------------------------------------------
const PAGE = { w: 210, h: 297 };
const MARGIN = { top: 45, right: 20, bottom: 30, left: 24.1, header: 12, footer: 10 };
const ADDRESS = { top: 45, width: 85, height: 40 };
const INFO_WIDTH = 75;
const SUBJECT_TOP = 98.46;
const MARKS = [
  { y: 105, w: 5 }, // Falzmarke 1
  { y: 148.5, w: 8 }, // Lochmarke
  { y: 210, w: 5 }, // Falzmarke 2
];
const MARK_X = 6;

const CONTENT_W = mm(PAGE.w) - mm(MARGIN.left) - mm(MARGIN.right);
const ADDRESS_W = mm(ADDRESS.width);
const INFO_COL_W = CONTENT_W - ADDRESS_W; // enthält den Zwischenraum
const INFO_GUTTER = INFO_COL_W - mm(INFO_WIDTH);
const INFO_LABEL_W = mm(38);
const INFO_VALUE_W = mm(INFO_WIDTH) - INFO_LABEL_W;
const FOOT_COLS = [mm(50), mm(50), CONTENT_W - mm(100)];

const NO_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

// --------------------------------------------------------------------------
// Bausteine
// --------------------------------------------------------------------------

/** Kurze Akzentlinie, 24 px breit, 2 px hoch - das Signaturelement. */
function accentRule() {
  return new Table({
    columnWidths: [T.space.s6],
    width: { size: T.space.s6, type: WidthType.DXA },
    borders: TableBorders.NONE,
    rows: [
      new TableRow({
        height: { value: T.space.s1 / 2, rule: HeightRule.EXACT }, // 2 px
        children: [
          new TableCell({
            width: { size: T.space.s6, type: WidthType.DXA },
            margins: NO_MARGINS,
            shading: { type: ShadingType.CLEAR, color: "auto", fill: T.color.accent },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0, line: T.space.s1 / 2, lineRule: LineRuleType.EXACT },
                children: [new TextRun({ text: "", size: 2 })],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

/** Falz- und Lochmarke: seitenabsolut positionierte Haarlinie im linken Rand. */
function foldMark({ y, w }) {
  return new Paragraph({
    frame: {
      type: "absolute",
      position: { x: mm(MARK_X), y: mm(y) },
      width: mm(w),
      height: T.space.s1,
      anchor: { horizontal: FrameAnchorType.PAGE, vertical: FrameAnchorType.PAGE },
      wrap: FrameWrap.NONE,
    },
    border: {
      top: { style: BorderStyle.SINGLE, size: T.stroke.hairline, color: T.color.line, space: 0 },
    },
    spacing: { before: 0, after: 0, line: T.space.s1, lineRule: LineRuleType.EXACT },
    children: [new TextRun({ text: "", size: 2 })],
  });
}

const text = (value, style) => new Paragraph({ style, children: [new TextRun(value)] });

/** Zelle ohne Rahmen und ohne Innenabstand. */
function cell(width, children, extra = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    margins: NO_MARGINS,
    children,
    ...extra,
  });
}

function plainTable(columnWidths, rows) {
  return new Table({
    columnWidths,
    width: { size: columnWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    borders: TableBorders.NONE,
    rows,
  });
}

// --------------------------------------------------------------------------
// Briefkopf (Kopfzeile der ersten Seite, 12 - 45 mm)
// --------------------------------------------------------------------------
const briefkopf = new Header({
  children: [
    ...MARKS.map(foldMark),
    accentRule(),
    text("[Wortmarke]", "ACWortmarke"),
    text("[POSITION ODER LEISTUNGSVERSPRECHEN]", "ACEyebrow"),
  ],
});

// --------------------------------------------------------------------------
// Kopfzeile der Folgeseiten
// --------------------------------------------------------------------------
const folgeseitenKopf = new Header({
  children: [
    new Paragraph({
      style: "ACKopfzeile",
      children: [
        new TextRun("[wortmarke] · [betreff]"),
        new TextRun({ children: [new Tab()] }),
        new TextRun("seite "),
        new TextRun({ children: [PageNumber.CURRENT] }),
        new TextRun(" von "),
        new TextRun({ children: [PageNumber.TOTAL_PAGES] }),
      ],
    }),
  ],
});

// --------------------------------------------------------------------------
// Anschriftfeld und Informationsblock (45 - 85 mm)
// --------------------------------------------------------------------------
// Drei Zeilen Zusatz-/Vermerkzone, dann die Anschrift. Vier vorbelegte
// Anschriftzeilen halten das Feld unter 40 mm; DIN erlaubt sechs, zwei weitere
// lassen das Feld und damit alles darunter nach unten wachsen.
const anschriftfeld = [
  text("[Absender] · [Straße Nr.] · [PLZ Ort]", "ACRuecksendeangabe"),
  text("[Versandvermerk]", "ACVermerk"),
  new Paragraph({ style: "ACVermerk" }),
  text("[Firma oder Organisation]", "ACAnschrift"),
  text("[Anrede Vorname Nachname]", "ACAnschrift"),
  text("[Straße Nr.]", "ACAnschrift"),
  text("[PLZ Ort]", "ACAnschrift"),
];

// Bezugszeichen, Datum, Rufnummer, Adresse: durchweg Kennungen, also Mono -
// und die Spalte bekommt dadurch eine saubere linke Kante.
const INFO_ROWS = [
  ["IHR ZEICHEN", "[—]"],
  ["IHRE NACHRICHT VOM", "[TT.MM.JJJJ]"],
  ["UNSER ZEICHEN", "[—]"],
  ["TELEFON", "[+49 000 000000]"],
  ["E-MAIL", "[mail@domain.de]"],
  ["DATUM", "[TT.MM.JJJJ]"],
];

// Label und Wert stehen auf unterschiedlich hohen Zeilen (Mono 8,5 pt gegen
// Sans 10,5 pt); unten ausgerichtet liegen ihre Grundlinien aufeinander.
const bottom = { verticalAlign: VerticalAlign.BOTTOM };

const informationsblock = plainTable(
  [INFO_LABEL_W, INFO_VALUE_W],
  INFO_ROWS.map(
    ([label, value]) =>
      new TableRow({
        children: [
          cell(INFO_LABEL_W, [text(label, "ACLabel")], bottom),
          cell(INFO_VALUE_W, [text(value, "ACWertZahl")], bottom),
        ],
      }),
  ),
);

const kopfblock = new Table({
  columnWidths: [ADDRESS_W, INFO_COL_W],
  width: { size: CONTENT_W, type: WidthType.DXA },
  borders: TableBorders.NONE,
  rows: [
    new TableRow({
      height: { value: mm(ADDRESS.height), rule: HeightRule.ATLEAST },
      children: [
        cell(ADDRESS_W, anschriftfeld),
        new TableCell({
          width: { size: INFO_COL_W, type: WidthType.DXA },
          margins: { ...NO_MARGINS, left: INFO_GUTTER },
          // Word verlangt nach einer Tabelle einen Absatz; er bleibt hier ohne Höhe.
          children: [informationsblock, new Paragraph({ style: "ACNull" })],
        }),
      ],
    }),
  ],
});

// --------------------------------------------------------------------------
// Geschäftsangaben (Fußzeile der ersten Seite)
// --------------------------------------------------------------------------
// Je Spalte eine Schrift: die Anschrift ist Text, Kontaktwege und Kennungen
// sind Kennungen. Gemischt franst die linke Kante der Spalte aus.
const FOOT_COLUMNS = [
  ["ANSCHRIFT", "ACFusszeile", ["[Absender]", "[Straße Nr.]", "[PLZ Ort]"]],
  ["KONTAKT", "ACFusszeileZahl", ["[+49 000 000000]", "[mail@domain.de]", "[www.domain.de]"]],
  [
    "RECHTLICHES",
    "ACFusszeileZahl",
    ["[Amtsgericht · HRB 00000]", "[USt-IdNr. DE000000000]", "[IBAN DE00 0000 0000 0000 0000 00]"],
  ],
];

const geschaeftsangaben = new Footer({
  children: [
    new Paragraph({
      style: "ACLeer",
      border: {
        bottom: { style: BorderStyle.SINGLE, size: T.stroke.hairline, color: T.color.line, space: 4 },
      },
    }),
    plainTable(FOOT_COLS, [
      new TableRow({
        children: FOOT_COLUMNS.map(([heading, style, lines], i) =>
          cell(FOOT_COLS[i], [text(heading, "ACLabel"), ...lines.map((line) => text(line, style))]),
        ),
      }),
    ]),
    new Paragraph({ style: "ACLeer" }),
  ],
});

// --------------------------------------------------------------------------
// Brieftext
// --------------------------------------------------------------------------
const brief = [
  kopfblock,
  text("[Betreff der Nachricht]", "ACBetreff"),
  text("Sehr geehrte Damen und Herren,", "ACAnrede"),
  text(
    "[Erster Absatz. Ersetzen Sie diesen Text durch Ihren Inhalt. Der Fließtext steht in IBM Plex Serif, " +
      "12 pt, mit einer Zeilenhöhe von 1,75 - das ist die Leseeinstellung der Design Identity für Dokumente.]",
    "ACFliesstext",
  ),
  text(
    "[Zweiter Absatz. Absätze werden durch Abstand getrennt, nicht durch Leerzeilen, damit der Zeilenfall " +
      "über Seitenumbrüche hinweg stabil bleibt.]",
    "ACFliesstext",
  ),
  text("Mit freundlichen Grüßen", "ACGruss"),
  text("[Vorname Nachname]", "ACSignaturName"),
  text("[Funktion]", "ACSignaturFunktion"),
  text("ANLAGEN", "ACLabelBlock"),
  text("[Anlage 1]", "ACWert"),
];

// --------------------------------------------------------------------------
// Hinweisseite
// --------------------------------------------------------------------------
/**
 * Datentabelle: Kopfzeile in Mono-Versalien über einer Linie, Zeilen durch
 * Haarlinien getrennt, letzte Zeile ohne Linie, keine Senkrechten.
 */
function dataTable(widths, headers, rows, monoColumn) {
  const rule = (color) => ({
    bottom: { style: BorderStyle.SINGLE, size: T.stroke.hairline, color },
  });
  return plainTable(widths, [
    new TableRow({
      tableHeader: true,
      children: headers.map((head, i) =>
        cell(widths[i], [text(head, "ACLabel")], { borders: rule(T.color.lineStrong) }),
      ),
    }),
    ...rows.map(
      (row, r) =>
        new TableRow({
          children: row.map((value, i) =>
            cell(widths[i], [text(value, i === monoColumn ? "ACTabelleZahl" : "ACTabelle")], {
              borders: r === rows.length - 1 ? TableBorders.NONE : rule(T.color.line),
            }),
          ),
        }),
    ),
  ]);
}

const GEOMETRIE = dataTable(
  [mm(40), mm(32), CONTENT_W - mm(72)],
  ["ELEMENT", "MASS", "ANMERKUNG"],
  [
    ["Briefkopf", "0–45 mm", "Kopfzeile der ersten Seite"],
    ["Anschriftfeld", "45–85 mm", "85 mm breit; weitere Anschriftzeilen schieben alles darunter nach unten"],
    ["Informationsblock", "ab 45 mm", "rechtsbündig, 75 mm breit"],
    ["Betreffzeile", "98,46 mm", "ohne das Wort „Betreff“, seit DIN 5008:2005"],
    ["Falzmarken", "105 / 210 mm", "Lochmarke bei 148,5 mm, alle drei im linken Rand"],
    ["Ränder", "24,1 / 20 mm", "links / rechts, oben 45 mm, unten 30 mm"],
  ],
  1,
);

const FORMATE = dataTable(
  [mm(50), CONTENT_W - mm(50)],
  ["FORMATVORLAGE", "VERWENDUNG"],
  [
    ["AC Betreff", "Betreffzeile, Sans Medium 12 pt"],
    ["AC Anrede, AC Fließtext", "Brieftext, Serif 12 pt, Zeilenhöhe 1,75"],
    ["AC Zwischenüberschrift", "Gliederung im Text, Sans Medium 12 pt"],
    ["AC Anschrift", "Anschriftzone, Sans 10,5 pt"],
    ["AC Label, AC Wert", "Feldbezeichner in Mono-Versalien, Inhalt in Sans"],
    ["AC Signatur Name", "Unterschriftszeile, Sans Medium 12 pt"],
  ],
);

const hinweise = [
  new Paragraph({ style: "ACNull", children: [new PageBreak()] }),
  accentRule(),
  text("Hinweise zur Vorlage", "ACSeitentitel"),
  new Table({
    columnWidths: [CONTENT_W],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: TableBorders.NONE,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            margins: { top: T.space.s3, bottom: T.space.s3, left: T.space.s4, right: T.space.s4 },
            shading: { type: ShadingType.CLEAR, color: "auto", fill: T.color.accentTint },
            children: [
              text(
                "Diese Seite gehört nicht zum Brief. Vor dem Versand löschen: Cursor an den Anfang dieser " +
                  "Seite, Strg+Umschalt+Ende, Entf.",
                "ACCallout",
              ),
            ],
          }),
        ],
      }),
    ],
  }),
  new Paragraph({ style: "ACLeer" }),

  accentRule(),
  text("Aufbau nach DIN 5008 Form B", "ACZwischen"),
  GEOMETRIE,
  new Paragraph({ style: "ACLeer" }),

  accentRule(),
  text("Formatvorlagen", "ACZwischen"),
  FORMATE,
  new Paragraph({ style: "ACLeer" }),
  text(
    "Ändern Sie die Formatvorlage statt des einzelnen Absatzes - dann bleibt das Dokument in sich stimmig. " +
      "IBM Plex ist eingebettet, eine Installation ist nicht nötig. Petrol #0F4E52 ist die einzige Farbe " +
      "neben dem warmen Grau und markiert nur die kurze Akzentlinie.",
    "ACFliesstext",
  ),
];

// --------------------------------------------------------------------------
// Formatvorlagen
// --------------------------------------------------------------------------

/**
 * Zeilenhöhe wie im CSS gemeint: ein Vielfaches des Schriftgrades, nicht der
 * natürlichen Zeilenhöhe der Schrift. Word kennt das nur als absoluten Wert.
 * "Mindestens" statt "genau", damit ein Ä nie oben abgeschnitten wird, wenn
 * das Verhältnis knapper ausfällt als die Schrift selbst braucht.
 *
 * @param {number} ratio Verhältnis aus T.leading
 * @param {number} size  Schriftgrad in halben Punkten (T.size)
 */
const lineHeight = (ratio, size) => ({
  line: Math.round(ratio * size * 10), // halbe Punkte -> 20stel Punkt
  lineRule: LineRuleType.ATLEAST,
});

const label = {
  font: T.font.mono,
  size: T.size.micro,
  color: T.color.ink3,
  characterSpacing: T.tracking.label,
};

const paragraphStyles = [
  {
    id: "ACWortmarke",
    name: "AC Wortmarke",
    basedOn: "Normal",
    next: "ACFliesstext",
    quickFormat: true,
    run: {
      font: T.font.sansSemiBold,
      size: T.size.headingLg,
      color: T.color.ink0,
      characterSpacing: T.tracking.headingLg,
    },
    paragraph: {
      spacing: { before: T.space.s3, after: 0, ...lineHeight(T.leading.heading, T.size.headingLg) },
    },
  },
  {
    id: "ACEyebrow",
    name: "AC Eyebrow",
    basedOn: "Normal",
    next: "ACFliesstext",
    quickFormat: true,
    run: label,
    paragraph: {
      spacing: { before: T.space.s2, after: 0, ...lineHeight(T.leading.mono, T.size.micro) },
    },
  },
  {
    id: "ACKopfzeile",
    name: "AC Kopfzeile",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: { font: T.font.mono, size: T.size.micro, color: T.color.ink3 },
    paragraph: {
      spacing: { before: 0, after: 0, ...lineHeight(T.leading.mono, T.size.micro) },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: T.stroke.hairline, color: T.color.line, space: 4 },
      },
      tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
    },
  },
  {
    id: "ACRuecksendeangabe",
    name: "AC Rücksendeangabe",
    basedOn: "Normal",
    next: "ACAnschrift",
    run: { font: T.font.sans, size: T.size.caption, color: T.color.ink2 },
    paragraph: {
      spacing: { before: 0, after: T.space.s1, ...lineHeight(T.leading.ui, T.size.caption) },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: T.stroke.hairline, color: T.color.line, space: 2 },
      },
    },
  },
  {
    id: "ACVermerk",
    name: "AC Versandvermerk",
    basedOn: "Normal",
    next: "ACAnschrift",
    run: { font: T.font.sans, size: T.size.caption, color: T.color.ink2 },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.caption) } },
  },
  {
    id: "ACAnschrift",
    name: "AC Anschrift",
    basedOn: "Normal",
    next: "ACAnschrift",
    quickFormat: true,
    run: { font: T.font.sans, size: T.size.body, color: T.color.ink1 },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.body) } },
  },
  {
    id: "ACLabel",
    name: "AC Label",
    basedOn: "Normal",
    next: "ACWert",
    quickFormat: true,
    run: label,
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.mono, T.size.micro) } },
  },
  {
    id: "ACLabelBlock",
    name: "AC Label Block",
    basedOn: "ACLabel",
    next: "ACWert",
    paragraph: { spacing: { before: T.space.s8, after: T.space.s1 } },
  },
  {
    id: "ACWert",
    name: "AC Wert",
    basedOn: "Normal",
    next: "ACWert",
    quickFormat: true,
    run: { font: T.font.sans, size: T.size.body, color: T.color.ink1 },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.body) } },
  },
  {
    id: "ACWertZahl",
    name: "AC Wert Zahl",
    basedOn: "ACWert",
    next: "ACWert",
    run: { font: T.font.mono, size: T.size.body },
  },
  {
    id: "ACBetreff",
    name: "AC Betreff",
    basedOn: "Normal",
    next: "ACAnrede",
    quickFormat: true,
    run: { font: T.font.sansMedium, size: T.size.bodyLg, color: T.color.ink0 },
    paragraph: {
      // Abstand zum Anschriftfeld, damit die Betreffzeile auf 98,46 mm liegt
      spacing: {
        before: mm(SUBJECT_TOP - ADDRESS.top - ADDRESS.height),
        after: 0,
        ...lineHeight(T.leading.heading, T.size.bodyLg),
      },
      keepNext: true,
    },
  },
  {
    id: "ACAnrede",
    name: "AC Anrede",
    basedOn: "Normal",
    next: "ACFliesstext",
    quickFormat: true,
    run: { font: T.font.serif, size: T.size.bodyLg, color: T.color.ink1 },
    paragraph: {
      spacing: { before: T.space.s8, after: T.space.s4, ...lineHeight(T.leading.prose, T.size.bodyLg) },
      keepNext: true,
    },
  },
  {
    id: "ACFliesstext",
    name: "AC Fließtext",
    basedOn: "Normal",
    next: "ACFliesstext",
    quickFormat: true,
    run: { font: T.font.serif, size: T.size.bodyLg, color: T.color.ink1 },
    paragraph: {
      spacing: { before: 0, after: T.space.s4, ...lineHeight(T.leading.prose, T.size.bodyLg) },
    },
  },
  {
    id: "ACSeitentitel",
    name: "AC Seitentitel",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: {
      font: T.font.sansMedium,
      size: T.size.headingLg,
      color: T.color.ink0,
      characterSpacing: T.tracking.headingLg,
    },
    paragraph: {
      spacing: { before: T.space.s2, after: T.space.s5, ...lineHeight(T.leading.heading, T.size.headingLg) },
      keepNext: true,
    },
  },
  {
    id: "ACZwischen",
    name: "AC Zwischenüberschrift",
    basedOn: "Normal",
    next: "ACFliesstext",
    quickFormat: true,
    run: { font: T.font.sansMedium, size: T.size.bodyLg, color: T.color.ink0 },
    paragraph: {
      spacing: { before: T.space.s2, after: T.space.s3, ...lineHeight(T.leading.heading, T.size.bodyLg) },
      keepNext: true,
    },
  },
  {
    id: "ACCallout",
    name: "AC Callout",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: { font: T.font.sans, size: T.size.body, color: T.color.onTint },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.body) } },
  },
  {
    id: "ACTabelle",
    name: "AC Tabelle",
    basedOn: "Normal",
    next: "ACTabelle",
    run: { font: T.font.sans, size: T.size.small, color: T.color.ink1 },
    paragraph: {
      spacing: { before: T.space.s1, after: T.space.s1, ...lineHeight(T.leading.ui, T.size.small) },
    },
  },
  {
    id: "ACTabelleZahl",
    name: "AC Tabelle Zahl",
    basedOn: "ACTabelle",
    next: "ACTabelle",
    run: { font: T.font.mono, size: T.size.small },
  },
  {
    id: "ACGruss",
    name: "AC Grußformel",
    basedOn: "Normal",
    next: "ACSignaturName",
    quickFormat: true,
    run: { font: T.font.serif, size: T.size.bodyLg, color: T.color.ink1 },
    paragraph: {
      spacing: { before: T.space.s4, after: 0, ...lineHeight(T.leading.prose, T.size.bodyLg) },
    },
  },
  {
    id: "ACSignaturName",
    name: "AC Signatur Name",
    basedOn: "Normal",
    next: "ACSignaturFunktion",
    quickFormat: true,
    run: { font: T.font.sansMedium, size: T.size.bodyLg, color: T.color.ink0 },
    paragraph: {
      // 72 px Raum für die eigenhändige Unterschrift
      spacing: { before: T.space.s18, after: 0, ...lineHeight(T.leading.ui, T.size.bodyLg) },
      keepNext: true,
    },
  },
  {
    id: "ACSignaturFunktion",
    name: "AC Signatur Funktion",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: { font: T.font.sans, size: T.size.caption, color: T.color.ink2 },
    paragraph: { spacing: { before: T.space.s1, after: 0, ...lineHeight(T.leading.ui, T.size.caption) } },
  },
  {
    id: "ACFusszeile",
    name: "AC Fußzeile",
    basedOn: "Normal",
    next: "ACFusszeile",
    run: { font: T.font.sans, size: T.size.caption, color: T.color.ink2 },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.caption) } },
  },
  {
    id: "ACFusszeileZahl",
    name: "AC Fußzeile Zahl",
    basedOn: "ACFusszeile",
    next: "ACFusszeile",
    run: { font: T.font.mono, size: T.size.micro },
  },
  {
    id: "ACLeer",
    name: "AC Abstand",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: { size: T.size.caption },
    paragraph: { spacing: { before: 0, after: 0, ...lineHeight(T.leading.ui, T.size.caption) } },
  },
  {
    // Pflichtabsatz nach einer Tabelle, ohne eigene Höhe.
    id: "ACNull",
    name: "AC Ohne Höhe",
    basedOn: "Normal",
    next: "ACFliesstext",
    run: { size: 2 },
    paragraph: { spacing: { before: 0, after: 0, line: 20, lineRule: LineRuleType.EXACT } },
  },
];

// --------------------------------------------------------------------------
// Eingebettete Schriften
// --------------------------------------------------------------------------
const FONT_FILES = [
  [T.font.sans, "IBMPlexSans-Regular.ttf"],
  [T.font.sansMedium, "IBMPlexSans-Medium.ttf"],
  [T.font.sansSemiBold, "IBMPlexSans-SemiBold.ttf"],
  [T.font.serif, "IBMPlexSerif-Regular.ttf"],
  [T.font.mono, "IBMPlexMono-Regular.ttf"],
];

function loadFonts() {
  const dir = path.join(__dirname, "fonts");
  const fonts = [];
  for (const [name, file] of FONT_FILES) {
    const full = path.join(dir, file);
    if (!fs.existsSync(full)) {
      console.warn(`  ! ${file} fehlt - ${name} wird nicht eingebettet (siehe fonts.sh)`);
      continue;
    }
    fonts.push({ name, data: fs.readFileSync(full), characterSet: CharacterSet.ANSI });
  }
  return fonts;
}

// --------------------------------------------------------------------------
// Dokument
// --------------------------------------------------------------------------
const doc = new Document({
  creator: "design-identity",
  title: "Briefkopfvorlage",
  description: "Briefbogen nach DIN 5008 Form B, gestaltet nach der Design Identity",
  fonts: loadFonts(),
  styles: {
    default: {
      document: {
        run: { font: T.font.serif, size: T.size.bodyLg, color: T.color.ink1 },
        paragraph: {
          spacing: { after: T.space.s4, ...lineHeight(T.leading.prose, T.size.bodyLg) },
        },
      },
    },
    paragraphStyles,
  },
  sections: [
    {
      properties: {
        titlePage: true,
        page: {
          size: { width: mm(PAGE.w), height: mm(PAGE.h) },
          margin: {
            top: mm(MARGIN.top),
            right: mm(MARGIN.right),
            bottom: mm(MARGIN.bottom),
            left: mm(MARGIN.left),
            header: mm(MARGIN.header),
            footer: mm(MARGIN.footer),
          },
        },
      },
      headers: { first: briefkopf, default: folgeseitenKopf },
      footers: { first: geschaeftsangaben, default: new Footer({ children: [new Paragraph({ style: "ACLeer" })] }) },
      children: [...brief, ...hinweise],
    },
  ],
});

/**
 * Zwei Dinge, die docx-js nicht selbst erledigt:
 *
 * 1. Der fontKey der eingebetteten Schriften muss laut ECMA-376 in Großbuchstaben
 *    stehen; docx-js schreibt ihn klein, wodurch die Datei das Schema verletzt und
 *    Word wie LibreOffice sie ablehnen. Nur die Schreibweise ändert sich - die
 *    Bytes des Schlüssels, mit denen die Schriftdaten verschlüsselt sind, bleiben
 *    dieselben.
 * 2. Word verwendet eingebettete Schriften erst, wenn embedTrueTypeFonts gesetzt
 *    ist. Zusammen mit altName ergibt das die Kette: eingebettete Plex-Fassung,
 *    sonst die installierte, sonst die benannte Ersatzschrift.
 */
async function postProcess(buffer) {
  const zip = await JSZip.loadAsync(buffer);

  let fontTable = await zip.file("word/fontTable.xml").async("string");
  fontTable = fontTable.replace(
    /w:fontKey="\{([0-9a-fA-F-]+)\}"/g,
    (_, guid) => `w:fontKey="{${guid.toUpperCase()}}"`,
  );
  for (const [name, alt] of Object.entries(T.fontFallback)) {
    fontTable = fontTable.replace(
      `<w:font w:name="${name}">`,
      `<w:font w:name="${name}"><w:altName w:val="${alt}"/>`,
    );
  }
  zip.file("word/fontTable.xml", fontTable);

  const settings = (await zip.file("word/settings.xml").async("string")).replace(
    "<w:displayBackgroundShape/>",
    '<w:displayBackgroundShape/><w:embedTrueTypeFonts/><w:saveSubsetFonts w:val="false"/>',
  );
  zip.file("word/settings.xml", settings);

  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
}

const out = process.argv[2] || path.join(__dirname, "..", "Briefkopfvorlage-DIN5008-B.docx");
Packer.toBuffer(doc)
  .then(postProcess)
  .then((buffer) => {
    fs.writeFileSync(out, buffer);
    console.log(`geschrieben: ${out} (${(buffer.length / 1024).toFixed(0)} kB)`);
  });
