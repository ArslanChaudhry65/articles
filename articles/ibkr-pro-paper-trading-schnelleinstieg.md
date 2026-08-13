---
title: "IBKR Pro + Paper Trading – Schnelleinstieg"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/100990977/IBKR+Pro+Paper+Trading+Schnelleinstieg"
confluence_version: 7
last_updated: "2026-05-27T16:20:42.480Z"
labels: []
synced_at: "2026-08-13T09:03:12.359579Z"
---

# IBKR Pro + Paper Trading – Schnelleinstieg

/**/

- [Wichtige Links](#IBKRPro+PaperTrading–Schnelleinstieg-WichtigeLinks)

- [Checkliste vor Start](#IBKRPro+PaperTrading–Schnelleinstieg-ChecklistevorStart)

- [Nächste Schritte](#IBKRPro+PaperTrading–Schnelleinstieg-NächsteSchritte)

- [Generelles Setup](#IBKRPro+PaperTrading–Schnelleinstieg-GenerellesSetup)

[Konto & Setup](#IBKRPro+PaperTrading–Schnelleinstieg-Konto&Setup)

- [API & ib_insync Setup](#IBKRPro+PaperTrading–Schnelleinstieg-API&ib_insyncSetup)

- [Claude Strategie](#IBKRPro+PaperTrading–Schnelleinstieg-ClaudeStrategie)

[Erste Strategie – Struktur](#IBKRPro+PaperTrading–Schnelleinstieg-ErsteStrategie–Struktur)

- [Skript für Wertbestimmung bei der Pullback-Strategie](#IBKRPro+PaperTrading–Schnelleinstieg-SkriptfürWertbestimmungbeiderPullback-Strategie)

## Wichtige Links
- Trader Workstation (TWS) Docu: [https://www.ibkrguides.com/traderworkstation/transfer-login-authentication.htm](https://www.ibkrguides.com/traderworkstation/transfer-login-authentication.htm) 

- IBKR API Dokumentation: [https://interactivebrokers.com/en/software/tws/usersguidebook/introduction/introduction.htm](https://interactivebrokers.com/en/software/tws/usersguidebook/introduction/introduction.htm) 

Intro: [https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/](https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/) 

- Contracts: [https://www.interactivebrokers.com/campus/ibkr-api-page/contracts/](https://www.interactivebrokers.com/campus/ibkr-api-page/contracts/) 

- Order Types: [https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/](https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/) 

Market (MKT)[https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#market-order](https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#market-order) 

- Stop (STP)[https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#stop-order](https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#stop-order) 

- Limit (LMT) [https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#limit-order](https://www.interactivebrokers.com/campus/ibkr-api-page/order-types/#limit-order) 

- Market Data Subscriptions: [https://www.interactivebrokers.com/campus/ibkr-api-page/market-data-subscriptions/](https://www.interactivebrokers.com/campus/ibkr-api-page/market-data-subscriptions/) → lohnt sich nicht für Swing Trading, yfinance als Datenquelle ist ausreichend

- ib_insync library GitHub: [https://github.com/IbPy/ib_insync](https://github.com/IbPy/ib_insync)

- Backtesting (Backtrader): [https://www.backtrader.com/](https://www.backtrader.com/) 

## Checkliste vor Start
- [ ] IBKR Konto aktiviert

- [ ] TWS/IB Gateway installiert & getestet

- [ ] ib_insync installiert (`pip list | grep ib_insync`)

- [ ] Testverbindung funktioniert (Script läuft ohne Fehler)

- [ ] Paper Trading aktiviert (im Gateway sichtbar)

- [ ] Erste Strategie-Idee notiert (z.B. welche Regel, welche Aktie)

## Nächste Schritte
- **Backtesting:** Strategie mit Backtrader testen mind. 5 Jahre besser 10, 1d Signal

- **Paper Trading:** 1 Monat und mind. 30 Trades mit echten Daten testen

Broker-Anbindung checken

TWS starten

- Mit deinen IBKR-Credentials einloggen

- Paper Trading Modus aktivieren

- Script ausführen → sollte ohne Fehler durchlaufen

# Generelles Setup

## Konto & Setup
**Schritt 1: Konto eröffnen**

- Webseite: [http://www.interactivebrokers.com](http://www.interactivebrokers.com) 

- Account-Typ: **IBKR Pro**

- Kein Mindesteinzahlung nötig

- Kontoeröffnung: ~1–3 Werktage digital

- Verifizierung: Personalausweis + Adressnachweis

**Schritt 2: Plattform installieren**

- **TWS (Trader Workstation)** (**IB Gateway, später wenn ohne UI)** herunterladen

- Nach Login: Paper Trading (Port: 7497 statt für echtes trading 7496) aktivieren (Schalter in den Settings)

## API & ib_insync Setup
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

# Claude Strategie

## Erste Strategie – Struktur

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

## Skript für Wertbestimmung bei der Pullback-Strategie
Zu bestimmende Werte, MSCI World ETF, NASDAQ, VISA, Mastercard

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