---
title: "DSGVO (GDPR)"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/16121868/DSGVO+GDPR"
confluence_version: 6
last_updated: "2025-10-05T15:54:27.934Z"
labels: ["gdpr", "dsgvo", "cookie-banner"]
synced_at: "2026-08-09T08:31:02.399504Z"
---

# DSGVO (GDPR)

## GDPR Relevance for Product Development
The General Data Protection Regulation (GDPR) is the EU's comprehensive data protection law that affects any product or service handling personal data of EU residents, regardless of where the company is based.

| **Key Requirements for Products**

 | **Actionable Insights**

 | **Key GDPR Requirements for Analytics**

 | **Actionable Insights**

 |
| - **Territorial Scope** - Applies to any product used by EU residents, even if your company is outside the EU (Article 3)

- **Legal Basis for Processing** - Must have valid justification for collecting personal data: consent, contract fulfillment, legal obligation, vital interests, public task, or legitimate interests (Article 6)

- **Data Subject Rights** - Products must enable users to access, rectify, erase, restrict processing, and port their data (Articles 15-20)

- **Privacy by Design** - Data protection must be built into products from the start, not added later (Article 25)

- **Data Minimization** - Only collect personal data that's necessary for your stated purpose (Article 5)

- **Consent Management** - If using consent as legal basis, must be freely given, specific, informed, and withdrawable (Article 7)

- **Data Retention** - Must delete personal data when no longer needed for original purpose (Article 5)

- **Cross-Border Transfers** - Special protections required when sending EU personal data outside the EU (Chapter V)

 | - **Conduct Data Mapping** - Document what personal data you collect, where it's stored, who accesses it, and how long you keep it

- **Implement Privacy Controls** - Build user dashboards for data access, correction, and deletion requests

- **Review Third-Party Services** - Ensure analytics, payment processors, and cloud providers are GDPR-compliant

- **Create Privacy Policies** - Write clear, specific privacy notices explaining your data practices (Article 13)

- **Establish Breach Response** - Plan for notifying authorities within 72 hours of discovering data breaches (Article 33)

- **Consider DPO Appointment** - Large-scale processing or sensitive data may require a Data Protection Officer (Article 37)

- **Budget for Compliance** - Fines can reach 4% of annual global revenue or €20 million, whichever is higher (Article 83)

 | - **Personal Data Classification** - IP addresses, device IDs, user sessions, and behavioral patterns are personal data requiring GDPR protection (Article 4)

- **Legal Basis Required** - Must establish valid justification for analytics data collection: typically legitimate interests or consent (Article 6)

- **Cookie Consent** - Analytics cookies require explicit user consent before deployment, not just notification (ePrivacy Directive + GDPR Article 7)

- **Purpose Limitation** - Can only use analytics data for the specific purposes disclosed to users (Article 5)

- **Data Retention Limits** - Must delete analytics data when no longer needed for business purposes, typically 26 months maximum (Article 5)

- **Third-Party Processors** - Analytics vendors (Google Analytics, Mixpanel, etc.) must have Data Processing Agreements covering GDPR compliance (Article 28)

- **User Rights Application** - Users can request access to their analytics data, corrections, or complete deletion (Articles 15-17)

- **Cross-Border Transfers** - US-based analytics platforms require adequate transfer mechanisms like Standard Contractual Clauses (Chapter V)

 | - **Audit Current Analytics** - Document all tracking tools, data types collected, and retention periods across your product

- **Implement Consent Management** - Deploy cookie banners that block analytics until users actively consent

- **Configure Data Retention** - Set automatic deletion periods in analytics platforms (Google Analytics allows 14-50 months)

- **Anonymize Data Collection** - Remove or hash IP addresses, avoid collecting personally identifiable information in custom events

- **Review Processor Agreements** - Ensure all analytics vendors have signed GDPR-compliant Data Processing Agreements

- **Create Opt-Out Mechanisms** - Provide users easy methods to withdraw consent and stop future tracking

- **Document Legitimate Interests** - If using this legal basis, conduct balancing tests showing business needs outweigh privacy risks (Article 6)

- **Plan for Data Requests** - Establish processes to extract, correct, or delete individual user data from analytics systems within 30 days (Article 12)

 |

---
## Preconditions for Tracking Data in Product Analytics
| **Legal Basis Requirements**

 | **Technical Prerequisites**

 | **User Transparency Requirements**

 | **Actionable Insights**

 |
| Legitimate Interest Assessment - Conduct balancing test showing business need outweighs user privacy impact; document this assessment (GDPR Article 6(1)(f))

Consent Mechanism - Implement active opt-in consent for non-essential analytics; pre-checked boxes are invalid (GDPR Article 7)

Cookie Classification - Distinguish essential cookies (no consent needed) from analytics cookies (consent required) per ePrivacy Directive

Legal Basis Documentation - Maintain records proving valid legal ground for each data processing activity (GDPR Article 30)

Data Processing Agreements - Execute contracts with analytics vendors before data sharing begins (GDPR Article 28)

 | Consent Management Platform - Deploy cookie banner that blocks tracking until user accepts (GDPR Article 7(3))

Data Minimization Configuration - Configure analytics tools to collect only necessary data points (GDPR Article 5(1)(c))

IP Address Anonymization - Enable IP masking or truncation in analytics platforms (GDPR Article 25)

Cross-Border Transfer Safeguards - Implement Standard Contractual Clauses or adequacy decisions for international data transfers (GDPR Chapter V)

User Identification Controls - Avoid combining analytics data with directly identifiable information without explicit consent (GDPR Article 4)

 | Privacy Policy Updates - Document all analytics purposes, data types, and retention periods before collection starts (GDPR Article 13)

Granular Consent Options - Separate analytics consent from essential website functions (GDPR Article 7(4))

Withdrawal Mechanisms - Provide easy opt-out methods accessible from privacy settings (GDPR Article 7(3))

Data Subject Rights Information - Explain how users can access, correct, or delete their analytics data (GDPR Articles 15-17)

 | Pre-Launch Legal Review - Audit existing legal basis documentation and update privacy policies before enabling new tracking

Consent Architecture Planning - Map out user journey showing when and how consent is requested for different analytics tools

Vendor Due Diligence - Verify all analytics providers offer GDPR-compliant configurations and signed processing agreements

Data Flow Mapping - Document what data flows where, ensuring each transfer has proper legal justification

User Control Implementation - Build privacy dashboard allowing users to view and control their analytics preferences

Staff Training Documentation - Create guidelines for product teams on GDPR requirements when adding new tracking features

Incident Response Preparation - Establish procedures for handling data subject requests related to analytics data within 30-day response requirement (GDPR Article 12)

 |

---
- Art. 1 = Irrelevant, nur Intro

- Art. 2 

gilt nicht für ausschließlich persönliche Tätigkeiten

- gilt für (automatische/nicht automatische) Verarbeitung von personenbezogenen Daten 

- Art. 3 = gilt, wenn Menschen aus der EU betroffen sind auch wenn die Daten außerhalb der EU verarbeitet werden

### Art. 4 Begriffsbestimmungen
- „personenbezogene Daten“ alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;

- „Verarbeitung“ jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;

### Art. 5 Grundsätze für die Verarbeitung
- Abs. 1

Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz

- Zweckbindung

Nutzung nur für den festgelegten Zweck

- Datenminimierung

nur soviel Daten wie es für den Zweck mind. notwendig ist

- Richtigkeit

Daten müssen korrekt sein (falsche, berichtigen oder löschen) + auf dem neuesten Stand sein

- Speicherbegrenzung 

Identifizierung der Person nur so lange möglich wie der Zweck gilt

- Eine längere Speicherung ist nur erlaubt, wenn die Daten ausschließlich für Zwecke wie Archivierung im öffentlichen Interesse, wissenschaftliche oder historische Forschung oder für Statistiken genutzt werden – und auch nur, wenn dabei besondere Schutzmaßnahmen getroffen werden, um die Rechte der betroffenen Personen zu wahren.

- Integrität und Vertraulichkeit

Schutzmaßnahmen vor unbefugter Verarbeitung, Zerstörung und Schädigung durch technische und organisatorische Maßnahmen

- Abs. 2 Rechenschaftspflicht

Einhaltung von Art. 5 Abs. muss man nachweisen können

### Art. 6 Rechtmäßigkeit der Verarbeitung
- Abs. 1 Verarbeitung ist rechtmäßig, wenn mindestens eine der nachstehenden Bedingungen erfüllt ist:

Person hat Einwillung zur Verarbeitung ihrer Daten für einen oder mehrere Zwecke gegeben

- Verarbeitung ist für vorvertragliche Maßnahmen oder für die Erfüllung eines Vertrages notwendig mit der betroffenen Person

- Verarbeitung ist rechtlich verpflichtend

- Verarbeitung ist erforderlich um lebenswichtige Interessen der betroffenen oder anderen natürlichen Person zu schützen

- Verarbeitung für eine Aufgabe im öffentlichen Interesse oder öffentlicher Gewalt 

- Verarbeitung zur Wahrung der berechtigten Interessen des Verantwortlichen/eines Dritten erforderlich - sofern die Interessen der betroffenen Person nicht überwiegen

- Abs. 4 Wenn jemand Daten ursprünglich für einen bestimmten Zweck erhoben hat, aber sie später für einen anderen Zweck verwenden möchte, der nicht mit dem ursprünglichen Zweck zusammenhängt, ist das nur unter bestimmten Bedingungen erlaubt. Dabei muss geprüft werden, ob die neue Verwendung mit dem ursprünglichen Zweck vereinbar ist.

### Art. 7 Bedingungen für die Einwilligung
- Nachweis über Einwilligung erforderlich + muss Info über Effekt von Widerruf enthalten

- Widerruf muss möglich sein

### Art. 8 Bedingungen für die Einwilligung eines Kindes in Bezug auf Dienste der Informationsgesellschaft
### Art. 9 Verarbeitung besonderer Kategorien personenbezogener Daten
- Abs. 1 Die Verarbeitung personenbezogener Daten, aus denen die rassische und **ethnische** **Herkunft**, **politische Meinungen, religiöse oder weltanschauliche Überzeugungen** oder die **Gewerkschaftszugehörigkeit** hervorgehen, sowie die Verarbeitung von **genetischen** Daten, **biometrischen** Daten zur eindeutigen Identifizierung einer natürlichen Person, **Gesundheitsdaten** oder Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person ist **untersagt**.

- Abs. 2 Ausnahmefälle

c) lebenswichtige Interessen der Person oder einer anderen natürlichen Person und Einwilligung ist körperlich nicht möglich

- e) öffentlich gemachte Daten

- f) gerichtlich oder für Rechtsansprüche notwendig

### Art. 11 Verarbeitung, für die eine Identifizierung der betroffenen Person nicht erforderlich ist
- wenn die Person nicht identifizierbar ist nach Möglichkeit informieren - abgesehen davon keine Anwendung von Art. 15-20

- 2 h – DSGVO-Grundprinzipien, Rechtsgrundlagen (Art. 5–6, 13–15 DSGVO)

- 2 h – Datenarten, Einwilligung, Pseudonymisierung, Zweckbindung

- 2 h – Produktentwicklung: Privacy by Design / Default (Art. 25)

- 2 h – Produktanalytik: Tracking, Consent, DPA, Auftragsverarbeitung (Art. 28)

- ggf. weitere 2–4 h für Case Studies, Dokumentationspflicht, Tools

- dsgvo fortbildung für PM?