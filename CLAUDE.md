# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Wichtig
Nur in **diesem** Ordner arbeiten (`Claude Shared List App`). Nicht in `Claude List App` (das ist das separate Original-Projekt).

## App starten

Kein Build-Schritt. Python-Server (kein Node.js installiert):

```
python -m http.server 3001
# → http://localhost:3001
```

`.claude/launch.json` konfiguriert Port 3001 für das Preview-Panel.

## Live-Deployment

- **Netlify URL:** https://leafy-piroshki-8d1875.netlify.app
- **Netlify Site ID:** `6f1e0dcd-cc6a-479e-bea1-8950a6847bc8`
- **GitHub-Repo:** `tobi020/Shared-Lists` (Branch `main`)
- **Deploy:** **Git-Auto-Deploy** — jeder `git push` auf `main` löst automatisch einen Build aus. Netlify installiert `web-push` (package.json) und bündelt die Function. Konfiguration in `netlify.toml` (`publish = "."`, `functions = "netlify/functions"`).
- **Push-Funktion braucht den Git-Build** (npm install). Reines Drag & Drop deployt die Netlify-Function NICHT korrekt.

## Architektur

Statische Seite + eine Netlify-Function. Kein Framework, kein lokaler Build:

| Datei | Rolle |
|---|---|
| `index.html` | Shell: Header, `#dashboard`, Modals, Firebase-Init via CDN |
| `style.css` | Alle Styles — CSS Custom Properties in `:root` |
| `app.js` | State, Rendering, Events, Firebase-Sync, Push-Abos |
| `firebase-config.js` | Firebase-Credentials (Web-Keys, öffentlich unbedenklich — committed) |
| `manifest.json` | PWA-Manifest (installierbar auf iOS/Android) |
| `sw.js` | Service Worker: PWA + `push`/`notificationclick`-Handler |
| `netlify/functions/send-push.js` | Serverless-Function: verschickt Web-Push via VAPID |
| `package.json` | Nur für die Function (`web-push`), wird von Netlify installiert |
| `netlify.toml` | Deploy-Config (publish dir + functions dir) |

## Firebase / Echtzeit-Sync

- **Datenbank:** Firestore, Projekt `claude-shared-lists`
- **Collection:** `rooms/{roomId}` — ein Dokument pro geteilter Session
- **Room-ID:** UUID im URL-Parameter `?room=` (wird automatisch generiert)
- **SDK:** Via CDN in `index.html` geladen (kein npm)
- Firebase-Globals werden in `index.html` auf `window._firestore*` gesetzt

### Sync-Mechanismus in `app.js`

- `_initFirebase()` — prüft URL auf `?room=`, generiert UUID falls fehlend, startet `onSnapshot`-Listener
- `_pushToFirestore()` — schreibt kompletten State nach Firestore
- `_applyRemoteState(data)` — überschreibt lokalen State, ruft `_renderAll()` auf
- `_setSyncStatus(status)` — setzt CSS-Klasse auf `#sync-indicator` (`syncing`|`synced`|`error`)
- Echo-Unterdrückung: `_writtenBy: clientId` im Dokument, ignoriert eigene Writes

### Dual-Write
Jede Mutation: erst `localStorage` → dann Firestore (wenn `_syncEnabled && _roomId`).

## Push-Benachrichtigungen (Web Push)

Kostenlos, ohne Firebase Blaze / FCM. Standard Web-Push mit VAPID + Netlify-Function.

- **VAPID-Schlüssel:** öffentlicher Key als `VAPID_PUBLIC_KEY` in `app.js` (darf öffentlich sein); privater Key + `VAPID_SUBJECT` als **Netlify Environment-Variablen** (`VAPID_PRIVATE`, `VAPID_PUBLIC`, `VAPID_SUBJECT`, Scope `functions`). Neu erzeugen: P-256-Keypair, base64url (siehe Commit-Historie).
- **Abos:** in `rooms/{roomId}` unter `pushSubs` (Map, in den State-Sync eingebettet). Wird in `_pushToFirestore()` mitgeschrieben und in `_applyRemoteState()` übernommen.
- **Senden:** Das Gerät, das abhakt/hinzufügt, ruft `_sendPush(title, body)` → `POST /.netlify/functions/send-push` mit den Abos der ANDEREN Geräte. Kein Firestore-Trigger nötig. Dedupe nach Endpunkt, eigener Endpunkt wird ausgeschlossen (clientId ist pro Session).
- **Function** (`send-push.js`): signiert/verschickt via `web-push`, meldet abgelaufene Endpunkte (404/410) zurück → `_pruneExpiredSubs()` räumt auf.
- **UI:** Glocken-Button `#notify-btn` im Header (`_initPush` / `_toggleNotifications`). Klassen `.active` / `.denied`.
- **iOS:** Web-Push nur ab iOS 16.4 UND nur als Home-Screen-PWA (nicht im Safari-Tab).
- **Auslöser:** Push bei `addItem` und beim Abhaken (`completed === true`), NICHT beim Enthaken.

## `app.js` Struktur

Eine `ListApp`-Klasse, instanziert mit `new ListApp()`. Alle Methoden privat (Präfix `_`).

### State
- `this.lists` — `Record<listType, item[]>`, in `localStorage` unter `claude-list-app-v1`
- `this.listTypes` — Array der aktiven Listen-IDs (dynamisch, nicht fest)
- `this.listNames` — `Record<listType, string>` für Anzeigenamen
- `this._accordionOpen` — welche Liste auf Mobile aufgeklappt ist
- `this._roomId` — aktuelle Firebase Room-ID

### Rendering
- `_renderAll()` — vollständiges Re-Render des Dashboards. Ruft am Ende `_applyAccordion()` auf (wichtig: Firebase-Sync ruft `_renderAll()` nach Remote-Updates auf, daher muss der Accordion-State danach wiederhergestellt werden)
- `_renderList(listType)` — nur den Listeninhalt einer Karte aktualisieren

### Accordion (Mobile)
- `_applyAccordion()` — klappt alle Karten außer `this._accordionOpen` ein (nur bei viewport ≤ 640px)
- `_accordionOpen` wird in `_renderAll()` persistent wiederhergestellt
- Click auf eingeklappten Card-Header → öffnet diese Liste, klappt andere ein

### Events
Delegation auf `#dashboard` via `data-action`-Attribute: `toggle`, `edit`, `delete`, `start-rename`, `delete-list`. Modal-Events direkt gebunden.

## Item-Schema

```js
{
  id: string,           // crypto.randomUUID()
  text: string,
  completed: boolean,
  createdAt: number,    // Date.now()
  priority: 'low' | 'medium' | 'high',
  listType: string,
  tags: string[],
  notes: string,
}
```

## Features

- **Prioritäten:** `high` = roter Hintergrund + linker Rand, `medium` = orange
- **Mobile Accordion:** Eine Liste aufgeklappt, andere zeigen nur Titelzeile
- **PWA:** Installierbar auf iOS/Android via manifest.json + sw.js
- **Sync-Indikator:** Grün (synced), Amber pulsierend (syncing), Rot (error)
- **Teilen-Button:** Kopiert URL mit `?room=` in Clipboard

## Neue Liste hinzufügen

1. Eintrag in `LIST_CONFIGS` in `app.js` hinzufügen
2. SVG in `ICONS`-Objekt hinzufügen
3. `_defaultLists()` anpassen — kein weiterer Aufwand

## Farb-Theme

Alle Farben als CSS Custom Properties in `:root` in `style.css`. `--accent` / `--accent-hover` für globale Akzentfarbe.
