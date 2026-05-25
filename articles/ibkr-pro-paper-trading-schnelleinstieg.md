---
title: "IBKR Pro + Paper Trading – Schnelleinstieg"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/100990977/IBKR+Pro+Paper+Trading+Schnelleinstieg"
confluence_version: 5
last_updated: "2026-05-24T07:33:57.298Z"
labels: []
synced_at: "2026-05-25T11:44:36.201077Z"
---

# IBKR Pro + Paper Trading – Schnelleinstieg

/**/

- [1. Konto & Setup](#IBKRPro+PaperTrading–Schnelleinstieg-1.Konto&Setup)

- [2. API & ib_insync Setup](#IBKRPro+PaperTrading–Schnelleinstieg-2.API&ib_insyncSetup)

- [4. Broker-Anbindung checken](#IBKRPro+PaperTrading–Schnelleinstieg-4.Broker-Anbindungchecken)

- [5. Erste Strategie – Struktur](#IBKRPro+PaperTrading–Schnelleinstieg-5.ErsteStrategie–Struktur)

- [6. Checkliste vor Start](#IBKRPro+PaperTrading–Schnelleinstieg-6.ChecklistevorStart)

- [7. Nächste Schritte](#IBKRPro+PaperTrading–Schnelleinstieg-7.NächsteSchritte)

- [8. Wichtige Links](#IBKRPro+PaperTrading–Schnelleinstieg-8.WichtigeLinks)

- [9. Skripte](#IBKRPro+PaperTrading–Schnelleinstieg-9.Skripte)

[Skript für Wertbestimmung bei der Pullback-Strategie](#IBKRPro+PaperTrading–Schnelleinstieg-SkriptfürWertbestimmungbeiderPullback-Strategie)

- [10. Automatisierung mit Claude Code](#IBKRPro+PaperTrading–Schnelleinstieg-10.AutomatisierungmitClaudeCode)

## 1. Konto & Setup
**Schritt 1: Konto eröffnen**

- Webseite: [http://www.interactivebrokers.com](http://www.interactivebrokers.com) 

- Account-Typ: **IBKR Pro**

- Kein Mindesteinzahlung nötig

- Kontoeröffnung: ~1–3 Werktage digital

- Verifizierung: Personalausweis + Adressnachweis

**Schritt 2: Plattform installieren**

- **TWS (Trader Workstation)** (**IB Gateway, später wenn ohne UI)** herunterladen

- Nach Login: Paper Trading (Port: 7497 statt für echtes trading 7496) aktivieren (Schalter in den Settings)

## 2. API & ib_insync Setup
**Installation:**

pip install ib_insync

**Minimales Testskript:**

from ib_insync import *

# Verbindung zu IB Gateway
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Kontodaten abrufen
account = ib.accountSummary()
print(account)

# Kurs abrufen (Apple)
contract = Stock('AAPL', 'SMART', 'USD')
ticker = ib.reqMktData(contract)
print(f"Apple Kurs: {ticker.last}")

ib.disconnect()

**Wichtig:** IB Gateway muss vor dem Script laufen!

## 4. Broker-Anbindung checken
- TWS starten

- Mit deinen IBKR-Credentials einloggen

- Paper Trading Modus aktivieren

- Script ausführen → sollte ohne Fehler durchlaufen

## 5. Erste Strategie – Struktur

from ib_insync import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# 1. Daten abrufen
contract = Stock('SAP', 'SMART', 'EUR')
bars = ib.reqHistoricalData(
    contract, 
    endDateTime='', 
    durationStr='3 M',
    barSizeSetting='1 day',
    whatToShow='CLOSE'
)

# 2. Regel anwenden (Beispiel: Simple Moving Average)
closes = [b.close for b in bars]
ma20 = sum(closes[-20:]) / 20
ma50 = sum(closes[-50:]) / 50

# 3. Order platzieren
if ma20 > ma50 and not position_exists:
    order = MarketOrder('BUY', 10)
    trade = ib.placeOrder(contract, order)
    print(f"Order platziert: {trade}")

ib.disconnect()

## 6. Checkliste vor Start
- [ ] IBKR Konto aktiviert

- [ ] TWS/IB Gateway installiert & getestet

- [ ] ib_insync installiert (`pip list | grep ib_insync`)

- [ ] Testverbindung funktioniert (Script läuft ohne Fehler)

- [ ] Paper Trading aktiviert (im Gateway sichtbar)

- [ ] Erste Strategie-Idee notiert (z.B. welche Regel, welche Aktie)

## 7. Nächste Schritte
- **Backtesting:** Strategie mit Backtrader testen mind. 5 Jahre besser 10, 1d Signal

- **Paper Trading:** 1 Monat und mind. 30 Trades mit echten Daten testen

## 8. Wichtige Links
- IBKR Dokumentation: [https://interactivebrokers.com/en/software/tws/usersguidebook/introduction/introduction.htm](https://interactivebrokers.com/en/software/tws/usersguidebook/introduction/introduction.htm) 

Architektur: [https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/](https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/) 

- Contracts: [https://www.interactivebrokers.com/campus/ibkr-api-page/contracts/](https://www.interactivebrokers.com/campus/ibkr-api-page/contracts/) 

- Order Types: [https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/](https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/) 

- Market Data Subscriptions: [https://www.interactivebrokers.com/campus/ibkr-api-page/market-data-subscriptions/](https://www.interactivebrokers.com/campus/ibkr-api-page/market-data-subscriptions/) 

- ib_insync GitHub: 

[https://github.com/IbPy/ib_insync](https://github.com/IbPy/ib_insync)- Backtesting (Backtrader): [https://www.backtrader.com/](https://www.backtrader.com/) 

## 9. Skripte
Zu bestimmende Werte, MSCI World ETF, NASDAQ, VISA, Mastercard

### Skript für Wertbestimmung bei der Pullback-Strategie
[pullback_analyse.py](/wiki/spaces/PS/pages/100990977/IBKR+Pro+Paper+Trading+Schnelleinstieg?preview=%2F100990977%2F101482497%2Fpullback_analyse.py)   

**So startest du es:**

pip install yfinance pandas numpy
python pullback_analyse.py

**Was du bekommst** – für jede Aktie einen Bericht wie diesen:

══════════════════════════════════════════════
  Pullback-Analyse: AAPL
══════════════════════════════════════════════
  Lokale Hochs gefunden:  47
  Ø Korrektur:            -6.3%
  Maximale Korrektur:     -31.4%
  Ø Dauer bis zum Tief:   18 Handelstage

  Schwelle     Ereignisse    Häufigkeit    Ø Dauer bis Signal
  ──────────────────────────────────────────────────────
  -2%          44            94%           4 Tage
  -3%          38            81%           7 Tage
  -5%          22            47%           14 Tage
  -7%          14            30%           19 Tage
  -10%         8             17%           26 Tage

  → Empfohlener Einstiegspunkt für AAPL: -3%

Die entscheidende Zeile ist die Empfehlung am Ende – das Skript sucht automatisch die Schwelle mit mindestens 20% Häufigkeit. Die Werte oben sind Beispielzahlen; deine echten Ergebnisse werden abweichen.

Du kannst oben im Skript unter `EINSTELLUNGEN` Ticker, Zeitraum und Schwellen-Prozente direkt anpassen. Schick mir die Ausgabe wenn du sie hast – dann kalibrieren wir gemeinsam das X% für deine Strategie.

## 10. Automatisierung mit Claude Code
Wenn du es so einrichten willst, dass Claude Code das Skript regelmäßig ausführt und die Ergebnisse prüft, wäre das über `/schedule` oder `/loop` möglich — Sonnet 4.6 reicht dafür vollständig aus.