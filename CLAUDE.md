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
- **Deploy:** Ordner per Drag & Drop auf app.netlify.com/projects/leafy-piroshki-8d1875/deploys

## Architektur

Vier Dateien, keine Dependencies, kein Framework, kein Node.js:

| Datei | Rolle |
|---|---|
| `index.html` | Shell: Header, `#dashboard`, Modals, Firebase-Init via CDN |
| `style.css` | Alle Styles — CSS Custom Properties in `:root` |
| `app.js` | State, Rendering, Events, Firebase-Sync |
| `firebase-config.js` | Firebase-Credentials (vom User ausgefüllt, nicht committen) |
| `manifest.json` | PWA-Manifest (installierbar auf iOS/Android) |
| `sw.js` | Service Worker für PWA |

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
