# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Open `index.html` directly in a browser, or serve it:

```
python -m http.server 3000
# → http://localhost:3000
```

The `.claude/launch.json` configures this server for the preview panel.

## Architecture

Three files, no dependencies, no framework:

| File | Role |
|---|---|
| `index.html` | Static shell: sticky header, empty `#dashboard` div, modal markup |
| `style.css` | All styles — CSS custom properties in `:root` for the color theme |
| `app.js` | Everything else: state, rendering, events |

### `app.js` structure

A single `ListApp` class is instantiated on load (`new ListApp()`). All methods are private (prefixed `_`) except the three public modal methods (`openEdit`, `closeEdit`, `saveEdit`).

**State** lives entirely in `this.lists` (a `Record<listType, item[]>`) and is persisted to `localStorage` under the key `claude-list-app-v1`. Every mutation calls `this._save()` immediately after.

**Rendering** is innerHTML-based with two levels:
- `_renderAll()` — called once on boot; generates the full card HTML for all four lists and writes it to `#dashboard`. The card shell (header + footer) is never re-rendered after this.
- `_renderList(listType)` — called after every mutation; replaces only the `#list-{listType}` div's innerHTML and updates the clear-button state. The card search input retains its value because it sits in the header, not the list area.

**Events** use delegation: a single `click`, `submit`, and `input` listener on `#dashboard` handles all list interactions by reading `data-action`, `data-id`, and `data-list` attributes from the target. Modal events are bound directly to the static elements in `index.html`.

**Drag-and-drop** uses the native HTML5 Drag API. Cross-list dragging is intentionally blocked (`dragging.listType !== dropTarget.listType`). Drag is automatically disabled (via `draggable="false"` on items) when a search query is active to avoid index mismatches.

### Adding a new list type

1. Add an entry to `LIST_TYPES` array and `LIST_CONFIGS` object in `app.js`
2. Add an SVG string to the `ICONS` object
3. Add the list key to `_defaultState()` — no other changes needed

### Item schema

```js
{
  id: string,          // crypto.randomUUID()
  text: string,
  completed: boolean,
  createdAt: number,   // Date.now()
  priority: 'low' | 'medium' | 'high',
  listType: string,
  tags: string[],      // comma-separated input, split on save
  notes: string,
}
```

### Color theme

All colors are CSS custom properties on `:root` in `style.css`. Change `--accent` / `--accent-hover` to retheme the red accent color globally.
