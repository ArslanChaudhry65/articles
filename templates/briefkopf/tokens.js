/**
 * Design-Identity-Tokens (Arslan Chaudhry) für Word/OOXML.
 *
 * Ein .docx ist druckgebunden, deshalb gilt durchgängig der Paper-Scope
 * aus design-identity/references/tokens.md: paper-0/1/2 -> #FFFFFF,
 * line + line-strong -> #D8CFC0, ink-3 -> ink-2, accent -> #0F4E52,
 * on-accent -> #FFFFFF. Alles andere erbt den Light-Wert.
 *
 * Umrechnung px -> Word-Einheiten (Regel 8: keine freien Zahlen im Layout,
 * nur Referenzen auf diese Tabelle):
 *   1 px = 0,75 pt = 15 twips = 1,5 half-points
 * Zwei Stufen der Typo-Skala liegen nicht auf einem halben Punkt
 * (11 px = 8,25 pt, 13 px = 9,75 pt) und werden auf die nächste
 * Halbpunktstufe gerundet - Word kennt keine feinere Auflösung.
 */

const PX = 15; // twips pro px

// -- Farben (Paper-Scope) ---------------------------------------------------
const color = {
  paper: "FFFFFF",
  ink0: "1F1B15",
  ink1: "3D382F",
  ink2: "5E5649",
  ink3: "5E5649", // Print: fällt auf ink-2 zusammen
  line: "D8CFC0",
  lineStrong: "D8CFC0",
  accent: "0F4E52",
  accentTint: "DFEDED",
  onTint: "0C4448",
  onAccent: "FFFFFF",
};

// -- Typo-Skala (half-points, wie Word sie erwartet) ------------------------
const size = {
  micro: 17, //  11 px -> 8,5 pt
  caption: 18, //  12 px -> 9 pt
  small: 20, //  13 px -> 10 pt
  body: 21, //  14 px -> 10,5 pt
  bodyLg: 24, //  16 px -> 12 pt
  subheading: 27, //  18 px -> 13,5 pt
  heading: 30, //  20 px -> 15 pt
  headingLg: 36, //  24 px -> 18 pt
};

// -- Zeilenhöhen als Verhältnis zur Schriftgröße ----------------------------
// Word rechnet bei "mehrfach" gegen die natürliche Zeilenhöhe der Schrift
// (bei IBM Plex rund 1,32 em), nicht gegen den Schriftgrad. Ein CSS-
// line-height lässt sich deshalb nur als absoluter Wert ausdrücken - siehe
// lineHeight() in build.js.
const leading = {
  display: 1.15,
  heading: 1.26,
  mono: 1.45,
  ui: 1.5,
  prose: 1.75,
};

// -- Laufweite (20stel Punkt) -----------------------------------------------
const tracking = {
  label: 9, // 0,05 em bei 8,5-9 pt - die einzige positive Laufweite
  headingLg: -5, // -0,015 em bei 18 pt
  heading: -4, // -0,015 em bei 15 pt
};

// -- Abstände: 4-px-Raster ---------------------------------------------------
const space = {
  s1: 1 * 4 * PX, //  4 px =  60
  s2: 2 * 4 * PX, //  8 px = 120
  s3: 3 * 4 * PX, // 12 px = 180
  s4: 4 * 4 * PX, // 16 px = 240
  s5: 5 * 4 * PX, // 20 px = 300
  s6: 6 * 4 * PX, // 24 px = 360
  s8: 8 * 4 * PX, // 32 px = 480
  s10: 10 * 4 * PX, // 40 px = 600
  s14: 14 * 4 * PX, // 56 px = 840
  s18: 18 * 4 * PX, // 72 px = 1080
};

// -- Linienstärken (8tel Punkt, wie OOXML-Rahmen sie zählen) ----------------
const stroke = {
  hairline: 6, // 1 px = 0,75 pt
  accentRule: 12, // 2 px = 1,5 pt - die einzige 2-px-Linie im System
};

// -- Schriftfamilien --------------------------------------------------------
// Namen exakt so, wie die IBM-Plex-Dateien sie im name-Table führen.
const font = {
  sans: "IBM Plex Sans", // 400
  sansMedium: "IBM Plex Sans Medm", // 500 - Überschriften
  sansSemiBold: "IBM Plex Sans SmBld", // 600 - ausschließlich Wortmarke
  serif: "IBM Plex Serif", // 400 - Fließtext
  mono: "IBM Plex Mono", // 400 - Labels, Zahlen, Daten
};

// Ersatzschriften für Rechner ohne IBM Plex. Landen als <w:altName> in der
// fontTable; damit degradiert Word vorhersagbar statt beliebig.
const fontFallback = {
  [font.sans]: "Arial",
  [font.sansMedium]: "Arial",
  [font.sansSemiBold]: "Arial",
  [font.serif]: "Georgia",
  [font.mono]: "Consolas",
};

module.exports = {
  PX,
  color,
  size,
  leading,
  tracking,
  space,
  stroke,
  font,
  fontFallback,
};
