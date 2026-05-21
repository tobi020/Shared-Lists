# Shared Lists

Eine geteilte Echtzeit-Listen-App für zwei Personen — kein Account nötig, einfach Link teilen.

## Features

- **Echtzeit-Sync** via Firebase Firestore — Änderungen erscheinen sofort auf beiden Geräten
- **Teilen per Link** — URL mit `?room=` Parameter kopieren und verschicken
- **PWA** — installierbar auf iOS und Android wie eine native App
- **4 Listen** — Todo, Kochliste, Watchlist, Date Ideen (weitere hinzufügbar)
- **Prioritäten** — Einträge als Niedrig / Mittel / Hoch markieren
- **Mobile Accordion** — auf kleinen Bildschirmen immer nur eine Liste aufgeklappt
- **Offline-fähig** — localStorage als Fallback ohne Internetverbindung

## Live

[leafy-piroshki-8d1875.netlify.app](https://leafy-piroshki-8d1875.netlify.app)

## Lokaler Start

Kein Build-Schritt, kein Node.js nötig:

```bash
python -m http.server 3001
# → http://localhost:3001
```

## Technik

Vier Dateien, keine Dependencies, kein Framework — reines HTML/CSS/JS mit Firebase SDK via CDN.
