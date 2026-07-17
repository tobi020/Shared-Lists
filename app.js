'use strict'

// ── Icons (inline SVG strings) ─────────────────────────────────────────────

const ICONS = {
  todo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
  kochliste: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M3 2v7c0 1.1.9 2 2 2s2-.9 2-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3v7"/></svg>`,
  watchlist: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  'date-ideen': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  grip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="14" height="14"><line x1="9" y1="5" x2="9" y2="5.01"/><line x1="15" y1="5" x2="15" y2="5.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="15" y1="12" x2="15" y2="12.01"/><line x1="9" y1="19" x2="9" y2="19.01"/><line x1="15" y1="19" x2="15" y2="19.01"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="10" height="10"><polyline points="20 6 9 17 4 12"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevron: `<svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  dots: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  bellOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  bellOn: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0" fill="none"/></svg>`,

  // Große Icon-Auswahl für Listen (gleicher Stil: 24x24, stroke-width 2, rund)
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 17h14a2 2 0 002-2v-3l-2.5-5h-13L3 12v3a2 2 0 002 2z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  medical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 22a10 10 0 110-20 8 8 0 018 8c0 2-2 3-4 3h-2a2 2 0 00-1 3.5c.5.8 0 2-1 2.5-1 .5-2 .5-2 3z"/><circle cx="7" cy="10" r="1"/><circle cx="10.5" cy="6.5" r="1"/><circle cx="16" cy="7.5" r="1"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v6a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  pizza: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 2l10 7-10 13L2 9z"/><circle cx="12" cy="10" r="1.1"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/></svg>`,
  smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  paw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="6" cy="9" r="2"/><circle cx="18" cy="9" r="2"/><circle cx="9" cy="5" r="2"/><circle cx="15" cy="5" r="2"/><path d="M12 22c-3.5 0-6-2-6-4.5S8.5 13 12 13s6 2 6 4.5-2.5 4.5-6 4.5z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="4" y="4" width="16" height="11" rx="1"/><line x1="2" y1="19" x2="22" y2="19"/></svg>`,
  lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.5.4.8 1 .8 1.7v.6h6.4v-.6c0-.7.3-1.3.8-1.7A7 7 0 0012 2z"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20.59 13.41L11 3.83A2 2 0 009.59 3H4a1 1 0 00-1 1v5.59a2 2 0 00.59 1.41l9.58 9.58a2 2 0 002.83 0l5.59-5.59a2 2 0 000-2.83z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 20A7 7 0 019 6c0-1.5 1-3 3-4 3 4 6 5 6 10a7 7 0 01-7 8z"/><path d="M9 20c0-6 3-9 6-11"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
}

// Auswahl für den Icon-Picker der Listen (Reihenfolge = Anzeige-Reihenfolge)
const ICON_LIBRARY = [
  { key: 'list',      name: 'Liste' },
  { key: 'todo',      name: 'Checkliste' },
  { key: 'kochliste', name: 'Kochen' },
  { key: 'watchlist', name: 'Fernsehen' },
  { key: 'cart',      name: 'Einkaufen' },
  { key: 'gift',      name: 'Geschenke' },
  { key: 'book',      name: 'Bücher' },
  { key: 'music',     name: 'Musik' },
  { key: 'send',      name: 'Reisen' },
  { key: 'car',       name: 'Auto' },
  { key: 'home',      name: 'Zuhause' },
  { key: 'briefcase', name: 'Arbeit' },
  { key: 'heart',     name: 'Herz' },
  { key: 'star',      name: 'Favorit' },
  { key: 'activity',  name: 'Fitness' },
  { key: 'medical',   name: 'Gesundheit' },
  { key: 'wallet',    name: 'Finanzen' },
  { key: 'gamepad',   name: 'Gaming' },
  { key: 'palette',   name: 'Kunst' },
  { key: 'coffee',    name: 'Kaffee' },
  { key: 'pizza',     name: 'Essen' },
  { key: 'smile',     name: 'Spaß' },
  { key: 'paw',       name: 'Haustier' },
  { key: 'calendar',  name: 'Termine' },
  { key: 'mapPin',    name: 'Ort' },
  { key: 'phone',     name: 'Telefon' },
  { key: 'laptop',    name: 'Technik' },
  { key: 'lightbulb', name: 'Idee' },
  { key: 'tag',       name: 'Etikett' },
  { key: 'leaf',      name: 'Pflanzen' },
  { key: 'sparkles',  name: 'Besonderes' },
  { key: 'bookmark',  name: 'Merkzettel' },
  { key: 'clock',     name: 'Zeit' },
  { key: 'globe',     name: 'Welt' },
]

// ── Default list configuration ─────────────────────────────────────────────

const LIST_CONFIGS = {
  todo: {
    label: 'Todo',
    placeholder: 'Neue Aufgabe hinzufügen...',
    searchPlaceholder: 'In Todo suchen...',
    emptyText: 'Alles erledigt – neue Aufgabe hinzufügen!',
    emptySearchText: 'Keine Treffer gefunden.',
  },
  kochliste: {
    label: 'Kochliste',
    placeholder: 'Rezept oder Zutat hinzufügen...',
    searchPlaceholder: 'In Kochliste suchen...',
    emptyText: 'Kochliste ist leer. Los gehts!',
    emptySearchText: 'Keine Treffer gefunden.',
  },
  watchlist: {
    label: 'Watchlist',
    placeholder: 'Film oder Serie hinzufügen...',
    searchPlaceholder: 'In Watchlist suchen...',
    emptyText: 'Watchlist ist leer. Was möchtest du sehen?',
    emptySearchText: 'Keine Treffer gefunden.',
  },
  'date-ideen': {
    label: 'Date Ideen',
    placeholder: 'Neue Date-Idee hinzufügen...',
    searchPlaceholder: 'In Date Ideen suchen...',
    emptyText: 'Noch keine Date-Ideen. Sei kreativ!',
    emptySearchText: 'Keine Treffer gefunden.',
  },
}

const LIST_TYPES = ['todo', 'kochliste', 'watchlist', 'date-ideen']

// Vorgefertigte Titelbild-Vorlagen für Projekte (statt Fotos aus der Galerie,
// die im schmalen Cover-Format meist nur einen unschönen Ausschnitt zeigen).
// Jede Vorlage: Farbverlauf (CSS-Klasse .cover-default-N) + kleine Silhouetten-
// Szene (SVG), damit es wie eine echte Titelbild-Illustration wirkt statt nur
// eine Flächenfarbe. Silhouetten sind bewusst neutral (schwarz/weiß, teil-
// transparent), damit sie über jedem Verlauf funktionieren.
const _SVG_OPEN = 'viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"'

const COVER_SCENES = {
  'cover-default-1': `<svg ${_SVG_OPEN}>
    <circle cx="232" cy="46" r="20" fill="rgba(255,255,255,0.9)"/>
    <path d="M0,122 Q37.5,107 75,122 T150,122 T225,122 T300,122 V180 H0 Z" fill="rgba(0,0,0,0.22)"/>
    <path d="M0,148 Q37.5,135 75,148 T150,148 T225,148 T300,148 V180 H0 Z" fill="rgba(0,0,0,0.34)"/>
  </svg>`,
  'cover-default-2': `<svg ${_SVG_OPEN}>
    <circle cx="252" cy="66" r="16" fill="rgba(255,255,255,0.8)"/>
    <path d="M0,112 Q75,80 150,106 T300,98 V180 H0 Z" fill="rgba(0,0,0,0.22)"/>
    <path d="M0,142 Q75,120 150,138 T300,130 V180 H0 Z" fill="rgba(0,0,0,0.35)"/>
  </svg>`,
  'cover-default-3': `<svg ${_SVG_OPEN}>
    <circle cx="40" cy="30" r="1.6" fill="rgba(255,255,255,0.8)"/>
    <circle cx="90" cy="20" r="1.3" fill="rgba(255,255,255,0.7)"/>
    <circle cx="140" cy="35" r="1.6" fill="rgba(255,255,255,0.75)"/>
    <circle cx="200" cy="18" r="1.3" fill="rgba(255,255,255,0.7)"/>
    <circle cx="250" cy="28" r="1.6" fill="rgba(255,255,255,0.8)"/>
    <circle cx="270" cy="45" r="1.3" fill="rgba(255,255,255,0.65)"/>
    <rect x="15"  y="100" width="30" height="80"  fill="rgba(0,0,0,0.32)"/>
    <rect x="52"  y="80"  width="25" height="100" fill="rgba(0,0,0,0.4)"/>
    <rect x="84"  y="112" width="34" height="68"  fill="rgba(0,0,0,0.3)"/>
    <rect x="124" y="60"  width="27" height="120" fill="rgba(0,0,0,0.42)"/>
    <rect x="158" y="96"  width="30" height="84"  fill="rgba(0,0,0,0.32)"/>
    <rect x="194" y="76"  width="26" height="104" fill="rgba(0,0,0,0.4)"/>
    <rect x="227" y="106" width="32" height="74"  fill="rgba(0,0,0,0.3)"/>
    <rect x="264" y="86"  width="28" height="94"  fill="rgba(0,0,0,0.38)"/>
  </svg>`,
  'cover-default-4': `<svg ${_SVG_OPEN}>
    <circle cx="245" cy="38" r="14" fill="rgba(255,255,255,0.85)"/>
    <polygon points="35,95 55,140 15,140" fill="rgba(0,0,0,0.24)"/>
    <polygon points="90,85 112,138 68,138" fill="rgba(0,0,0,0.24)"/>
    <polygon points="150,98 170,140 130,140" fill="rgba(0,0,0,0.24)"/>
    <polygon points="15,130 45,180 -15,180" fill="rgba(0,0,0,0.4)"/>
    <polygon points="80,120 115,180 45,180" fill="rgba(0,0,0,0.4)"/>
    <polygon points="150,128 182,180 118,180" fill="rgba(0,0,0,0.4)"/>
    <polygon points="220,118 255,180 185,180" fill="rgba(0,0,0,0.4)"/>
    <polygon points="270,132 300,180 240,180" fill="rgba(0,0,0,0.4)"/>
  </svg>`,
  'cover-default-5': `<svg ${_SVG_OPEN}>
    <circle cx="152" cy="66" r="27" fill="rgba(255,255,255,0.92)"/>
    <polygon points="0,140 60,92 120,132 180,82 240,126 300,96 300,180 0,180" fill="rgba(0,0,0,0.22)"/>
    <polygon points="0,162 70,122 140,156 210,112 300,152 300,180 0,180" fill="rgba(0,0,0,0.4)"/>
  </svg>`,
  'cover-default-6': `<svg ${_SVG_OPEN}>
    <rect x="147" y="90" width="6" height="90" fill="rgba(0,0,0,0.35)"/>
    <circle cx="150" cy="75" r="20" fill="rgba(255,255,255,0.55)"/>
    <circle cx="128" cy="88" r="16" fill="rgba(255,255,255,0.5)"/>
    <circle cx="174" cy="86" r="17" fill="rgba(255,255,255,0.5)"/>
    <circle cx="150" cy="55" r="15" fill="rgba(255,255,255,0.5)"/>
    <circle cx="70" cy="60" r="2.5" fill="rgba(255,255,255,0.6)"/>
    <circle cx="100" cy="130" r="2" fill="rgba(255,255,255,0.55)"/>
    <circle cx="220" cy="95" r="2.5" fill="rgba(255,255,255,0.6)"/>
    <circle cx="240" cy="145" r="2" fill="rgba(255,255,255,0.5)"/>
    <circle cx="55" cy="120" r="1.8" fill="rgba(255,255,255,0.5)"/>
  </svg>`,
  'cover-default-7': `<svg ${_SVG_OPEN}>
    <circle cx="58" cy="52" r="19" fill="rgba(255,255,255,0.85)"/>
    <path d="M0,130 Q60,105 120,128 T240,124 T300,132 V180 H0 Z" fill="rgba(0,0,0,0.18)"/>
    <path d="M0,155 Q60,135 120,152 T240,148 T300,155 V180 H0 Z" fill="rgba(0,0,0,0.3)"/>
  </svg>`,
  'cover-default-8': `<svg ${_SVG_OPEN}>
    <circle cx="222" cy="48" r="17" fill="rgba(255,255,255,0.9)"/>
    <circle cx="230" cy="43" r="15" fill="rgba(0,0,0,0.55)"/>
    <circle cx="35" cy="35" r="1.6" fill="rgba(255,255,255,0.8)"/>
    <circle cx="70" cy="60" r="1.3" fill="rgba(255,255,255,0.65)"/>
    <circle cx="110" cy="30" r="1.8" fill="rgba(255,255,255,0.8)"/>
    <circle cx="150" cy="70" r="1.3" fill="rgba(255,255,255,0.6)"/>
    <circle cx="45" cy="90" r="1.5" fill="rgba(255,255,255,0.65)"/>
    <circle cx="130" cy="105" r="1.6" fill="rgba(255,255,255,0.7)"/>
    <circle cx="180" cy="35" r="1.3" fill="rgba(255,255,255,0.65)"/>
    <circle cx="270" cy="90" r="1.6" fill="rgba(255,255,255,0.7)"/>
    <circle cx="20" cy="130" r="1.3" fill="rgba(255,255,255,0.55)"/>
  </svg>`,
  'cover-default-9': `<svg ${_SVG_OPEN}>
    <circle cx="85" cy="48" r="18" fill="rgba(255,255,255,0.85)"/>
    <path d="M205,180 Q195,130 215,100" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="6" stroke-linecap="round"/>
    <path d="M215,100 Q180,85 155,100 Q182,98 210,112 Z" fill="rgba(0,0,0,0.34)"/>
    <path d="M215,100 Q195,70 200,45 Q215,75 222,105 Z" fill="rgba(0,0,0,0.34)"/>
    <path d="M215,100 Q248,80 270,90 Q240,95 220,110 Z" fill="rgba(0,0,0,0.34)"/>
    <path d="M215,100 Q250,108 265,130 Q232,112 213,108 Z" fill="rgba(0,0,0,0.34)"/>
  </svg>`,
  'cover-default-10': `<svg ${_SVG_OPEN}>
    <circle cx="55" cy="30" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <circle cx="250" cy="25" r="1.6" fill="rgba(255,255,255,0.7)"/>
    <circle cx="180" cy="18" r="1.3" fill="rgba(255,255,255,0.6)"/>
    <path d="M0,50 Q75,20 150,50 T300,45" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="18"/>
    <path d="M0,75 Q75,50 150,78 T300,70" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="14"/>
    <polygon points="0,150 70,115 140,148 210,110 300,145 300,180 0,180" fill="rgba(0,0,0,0.4)"/>
  </svg>`,
  'cover-default-11': `<svg ${_SVG_OPEN}>
    <circle cx="255" cy="35" r="1.6" fill="rgba(255,255,255,0.7)"/>
    <circle cx="225" cy="55" r="1.3" fill="rgba(255,255,255,0.6)"/>
    <circle cx="40" cy="30" r="1.5" fill="rgba(255,255,255,0.65)"/>
    <ellipse cx="145" cy="172" rx="16" ry="7" fill="rgba(255,190,110,0.55)"/>
    <polygon points="95,180 130,110 165,180" fill="rgba(0,0,0,0.4)"/>
    <polygon points="112,180 130,140 148,180" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
    <polygon points="168,180 198,128 228,180" fill="rgba(0,0,0,0.3)"/>
  </svg>`,
  'cover-default-12': `<svg ${_SVG_OPEN}>
    <path d="M0,120 Q75,95 150,118 T300,110 V180 H0 Z" fill="rgba(255,255,255,0.1)"/>
    <path d="M0,145 Q75,125 150,143 T300,136 V180 H0 Z" fill="rgba(0,0,0,0.25)"/>
  </svg>`,
}

const COVER_PRESETS = [
  { key: 'cover-default-1',  name: 'Ozean' },
  { key: 'cover-default-2',  name: 'Weinberge' },
  { key: 'cover-default-3',  name: 'Skyline' },
  { key: 'cover-default-4',  name: 'Wald' },
  { key: 'cover-default-5',  name: 'Sonnenuntergang' },
  { key: 'cover-default-6',  name: 'Kirschblüte' },
  { key: 'cover-default-7',  name: 'Dünen' },
  { key: 'cover-default-8',  name: 'Mitternacht' },
  { key: 'cover-default-9',  name: 'Palme' },
  { key: 'cover-default-10', name: 'Polarlicht' },
  { key: 'cover-default-11', name: 'Lagerfeuer' },
  { key: 'cover-default-12', name: 'Minimal' },
]

const STORAGE_KEY = 'claude-list-app-v1'
const FIRESTORE_COLLECTION = 'rooms'

// Öffentlicher VAPID-Schlüssel (darf im Client stehen — der private liegt nur
// als Env-Var in der Netlify-Funktion). Endpunkt der Push-Funktion:
const VAPID_PUBLIC_KEY = 'BIzaMgivZsLtIqYmsjAbU9De2QUFgbOuZT4ZwtHvDlvxfxxl2uDv8CXbumbR_l-7Dr4VJkLVaj03lHCqKu6k5dE'
const PUSH_ENDPOINT = '/.netlify/functions/send-push'

function _urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw = atob(base64)
  const out = new Uint8Array(raw.length)
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i)
  return out
}

function _getClientId() {
  let id = sessionStorage.getItem('_listAppClientId')
  if (!id) { id = crypto.randomUUID(); sessionStorage.setItem('_listAppClientId', id) }
  return id
}

function _getRoomIdFromUrl() {
  return new URLSearchParams(window.location.search).get('room')
}

function _setRoomIdInUrl(id) {
  const url = new URL(window.location.href)
  url.searchParams.set('room', id)
  window.history.replaceState({}, '', url.toString())
}

// Cookies werden auf iOS zwischen Safari und Standalone-PWA geteilt —
// localStorage hingegen nicht. Daher Room-ID zusätzlich als Cookie speichern.
function _getRoomIdFromCookie() {
  const m = document.cookie.split(';').map(c => c.trim()).find(c => c.startsWith('_listAppRoomId='))
  return m ? m.split('=')[1] : null
}

function _setRoomIdCookie(id) {
  // 1 Jahr Laufzeit, SameSite=Lax damit es bei navigationen mitgesendet wird
  document.cookie = `_listAppRoomId=${id}; path=/; max-age=31536000; SameSite=Lax`
}

// ── App ────────────────────────────────────────────────────────────────────

class ListApp {
  constructor() {
    this._db           = window._firestoreDb              || null
    this._docFn        = window._firestoreDoc             || null
    this._setDocFn     = window._firestoreSetDoc          || null
    this._getDocFn     = window._firestoreGetDoc          || null
    this._onSnapshotFn = window._firestoreOnSnapshot      || null
    this._serverTsFn   = window._firestoreServerTimestamp || null
    this._syncEnabled  = !!(this._db)
    this._clientId     = _getClientId()
    this._roomId       = null

    const state      = this._loadState()
    this.lists       = state.lists
    this.listTypes   = state.listTypes
    this.listNames   = state.listNames
    this.listIcons   = state.listIcons
    this.projects    = state.projects
    this._currentProjectId = null   // null = Start-Ansicht
    this.globalSearch = ''
    this.dragging    = null
    this.dropTarget  = null
    this.editing      = null
    this.editPriority = 'low'
    this._openLists = new Set()  // Which cards are expanded on mobile
    this._pushSubs  = {}         // clientId → { sub, ts } (in Firestore gespiegelt)
    this._mySubJson = null       // eigenes Push-Abo (zum Wiederherstellen)
    this._myName    = localStorage.getItem('_listAppUsername') || ''
    this._imgMem    = new Map()  // imageId → dataURL (Session-Cache)
    this._editImageChanged = false   // wurde das Bild im Edit-Modal geändert?
    this._editImagePending = null    // { id, dataURL } für neu gewähltes Bild
    this._addImagePending  = {}      // listType → { id, dataURL } fürs Anhängen beim Erstellen
    this._addImageTargetList = null  // welche Liste hat den Foto-Picker geöffnet?
    this._coverImageTargetProject = null  // welches Projekt bekommt das nächste Titelbild?
    this._projectMenuEl = null
    this._init()
  }

  // ── State persistence ──────────────────────────

  _defaultLists() {
    return { todo: [], kochliste: [], watchlist: [], 'date-ideen': [] }
  }

  _sanitizeProjects(rawProjects, listTypes) {
    if (!Array.isArray(rawProjects)) return []
    const known = new Set(listTypes)
    return rawProjects
      .filter(p => p && typeof p === 'object' && p.id && p.name)
      .map(p => ({
        id: p.id,
        name: p.name,
        image: p.image || null,
        coverPreset: p.coverPreset || null,
        listTypes: Array.isArray(p.listTypes) ? p.listTypes.filter(lt => known.has(lt)) : [],
      }))
  }

  _loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return { lists: this._defaultLists(), listTypes: [...LIST_TYPES], listNames: {}, listIcons: {}, projects: [] }
      const parsed = JSON.parse(raw)
      // New format: { listTypes, listNames, lists, projects }
      if (parsed.lists && typeof parsed.lists === 'object' && !Array.isArray(parsed.lists)) {
        const listTypes = Array.isArray(parsed.listTypes) ? parsed.listTypes : [...LIST_TYPES]
        const listNames = (parsed.listNames && typeof parsed.listNames === 'object') ? parsed.listNames : {}
        const listIcons = (parsed.listIcons && typeof parsed.listIcons === 'object') ? parsed.listIcons : {}
        const lists = {}
        for (const lt of listTypes) {
          lists[lt] = Array.isArray(parsed.lists[lt]) ? parsed.lists[lt] : []
        }
        const projects = this._sanitizeProjects(parsed.projects, listTypes)
        return { lists, listTypes, listNames, listIcons, projects }
      }
      // Old format: { todo: [...], kochliste: [...], ... } — migrate transparently
      const lists = this._defaultLists()
      for (const lt of LIST_TYPES) {
        if (Array.isArray(parsed[lt])) lists[lt] = parsed[lt]
      }
      return { lists, listTypes: [...LIST_TYPES], listNames: {}, listIcons: {}, projects: [] }
    } catch {
      return { lists: this._defaultLists(), listTypes: [...LIST_TYPES], listNames: {}, listIcons: {}, projects: [] }
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        listTypes: this.listTypes,
        listNames: this.listNames,
        listIcons: this.listIcons,
        lists: this.lists,
        projects: this.projects,
      }))
    } catch (e) { console.warn('localStorage unavailable:', e) }
    if (this._syncEnabled && this._roomId) this._pushToFirestore()
  }

  // ── Firebase sync ──────────────────────────────

  _pushToFirestore() {
    if (!this._db || !this._roomId) return
    this._setSyncStatus('syncing')
    const roomRef = this._docFn(this._db, FIRESTORE_COLLECTION, this._roomId)
    this._setDocFn(roomRef, {
      listTypes: this.listTypes,
      listNames: this.listNames,
      listIcons: this.listIcons,
      lists: this.lists,
      projects: this.projects,
      pushSubs: this._pushSubs || {},
      _writtenBy: this._clientId,
      updatedAt: this._serverTsFn(),
    }).then(() => {
      this._setSyncStatus('synced')
    }).catch(err => {
      this._setSyncStatus('error')
      console.error('[Sync] Firestore write failed:', err)
    })
  }

  async _initFirebase() {
    if (!this._syncEnabled) {
      console.info('[Sync] Firebase not configured — localStorage-only mode.')
      return
    }

    let roomId = _getRoomIdFromUrl()
    if (!roomId) {
      // Beim Start vom Home Screen (Standalone-PWA) gibt es keine URL-Parameter.
      // Cookie zuerst prüfen — wird zwischen Safari und Standalone auf iOS geteilt.
      // localStorage als Fallback (funktioniert auf anderen Plattformen).
      roomId = _getRoomIdFromCookie()
           || localStorage.getItem('_listAppRoomId')
           || crypto.randomUUID()
      _setRoomIdInUrl(roomId)
    }
    // Beide Speicher befüllen: localStorage für Desktop/Android, Cookie für iOS
    localStorage.setItem('_listAppRoomId', roomId)
    _setRoomIdCookie(roomId)
    this._roomId = roomId
    if (!_getRoomIdFromUrl()) this._pushToFirestore()

    const roomRef = this._docFn(this._db, FIRESTORE_COLLECTION, roomId)
    this._onSnapshotFn(roomRef, (snap) => {
      if (!snap.exists()) return
      const data = snap.data()
      if (data._writtenBy === this._clientId) return
      this._applyRemoteState(data)
    }, (err) => {
      console.error('[Sync] Firestore listener error:', err)
      this._setSyncStatus('error')
    })

    this._setSyncStatus('synced')
  }

  _applyRemoteState(data) {
    if (!data || !data.lists || !data.listTypes) return
    this.listTypes = Array.isArray(data.listTypes) ? data.listTypes : this.listTypes
    this.listNames = (data.listNames && typeof data.listNames === 'object') ? data.listNames : this.listNames
    this.listIcons = (data.listIcons && typeof data.listIcons === 'object') ? data.listIcons : this.listIcons
    const lists = {}
    for (const lt of this.listTypes) {
      lists[lt] = Array.isArray(data.lists[lt]) ? data.lists[lt] : []
    }
    this.lists = lists
    this.projects = this._sanitizeProjects(data.projects, this.listTypes)
    if (this._currentProjectId && !this.projects.some(p => p.id === this._currentProjectId)) {
      this._currentProjectId = null
    }
    // Push-Abos der anderen Geräte übernehmen; eigenes Abo nicht verlieren
    if (data.pushSubs && typeof data.pushSubs === 'object') {
      this._pushSubs = data.pushSubs
      if (this._mySubJson && !this._pushSubs[this._clientId]) {
        this._pushSubs[this._clientId] = { sub: this._mySubJson, ts: Date.now() }
      }
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        listTypes: this.listTypes,
        listNames: this.listNames,
        lists: this.lists,
        projects: this.projects,
      }))
    } catch { /* ignore */ }
    this._renderAll()
    this._setSyncStatus('synced')
  }

  _setSyncStatus(status) {
    const el = document.getElementById('sync-indicator')
    if (!el) return
    el.className = `sync-indicator ${status}`
    const labels = { syncing: 'Speichern…', synced: 'Sync aktiv', error: 'Sync-Fehler' }
    el.title = labels[status] || 'Sync-Status'
  }

  // ── Push-Benachrichtigungen ────────────────────

  async _initPush() {
    const btn = document.getElementById('notify-btn')
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const supported = ('serviceWorker' in navigator) && ('PushManager' in window) && ('Notification' in window)

    // iOS Safari (kein PWA): Glocke zeigen, aber erklären wie's geht
    if (!supported && isIOS) { this._setNotifyState('ios-hint'); return }
    if (!supported) { if (btn) btn.style.display = 'none'; return }

    if (Notification.permission === 'denied') { this._setNotifyState('denied'); return }
    try {
      const reg = await navigator.serviceWorker.ready
      const existing = await reg.pushManager.getSubscription()
      if (existing && Notification.permission === 'granted') {
        this._storeOwnSub(existing)
        this._setNotifyState('active')
      } else {
        this._setNotifyState('inactive')
      }
    } catch {
      this._setNotifyState('inactive')
    }
  }

  // Wird per Klick auf die Glocke im Header ausgelöst.
  _onNotifyBtnClick() {
    if (this._notifyState === 'ios-hint') {
      alert('Benachrichtigungen funktionieren auf dem iPhone nur als App.\n\n1. Öffne diese Seite in Safari\n2. Teilen-Symbol → „Zum Home-Bildschirm"\n3. App von dort starten\n4. Glocke antippen')
      return
    }
    if (this._notifyState === 'denied') {
      alert('Benachrichtigungen sind für diese Seite blockiert.\n\nIn den Browser-Einstellungen für diese Seite erlauben.')
      return
    }
    this._toggleNotifications()
  }

  async _toggleNotifications() {
    let reg
    try { reg = await navigator.serviceWorker.ready } catch { return }
    const existing = await reg.pushManager.getSubscription()

    // Bereits abonniert → abmelden
    if (existing) {
      try { await existing.unsubscribe() } catch { /* ignore */ }
      this._mySubJson = null
      if (this._pushSubs && this._pushSubs[this._clientId]) {
        delete this._pushSubs[this._clientId]
        this._pushToFirestore()
      }
      this._setNotifyState('inactive')
      return
    }

    // Erlaubnis anfragen — Menüpunkt zeigt Ladezustand
    this._setNotifyState('pending')
    const perm = await Notification.requestPermission()
    if (perm !== 'granted') {
      this._setNotifyState(perm === 'denied' ? 'denied' : 'inactive')
      return
    }

    // Name abfragen falls noch nicht gesetzt
    if (!this._myName) {
      const name = prompt('Dein Name (erscheint in Benachrichtigungen):') || ''
      this._myName = name.trim() || 'Jemand'
      localStorage.setItem('_listAppUsername', this._myName)
    }

    try {
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: _urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })
      this._storeOwnSub(sub)
      this._pushToFirestore()
      this._setNotifyState('active')
    } catch (e) {
      console.error('[Push] subscribe failed:', e)
      this._setNotifyState('inactive')
    }
  }

  _storeOwnSub(sub) {
    const json = sub.toJSON ? sub.toJSON() : sub
    this._mySubJson = json
    if (!this._pushSubs) this._pushSubs = {}
    this._pushSubs[this._clientId] = { sub: json, ts: Date.now(), name: this._myName || 'Jemand' }
  }

  _setNotifyState(state) {
    this._notifyState = state
    const btn = document.getElementById('notify-btn')
    if (!btn) return
    btn.classList.toggle('active',    state === 'active')
    btn.classList.toggle('denied',    state === 'denied')
    btn.classList.toggle('pending',   state === 'pending')
    btn.classList.toggle('ios-hint',  state === 'ios-hint')
    btn.title = this._notifyLabel()
  }

  _notifyLabel() {
    const labels = {
      active:     'Benachrichtigungen aktiv — zum Deaktivieren tippen',
      inactive:   'Benachrichtigungen aktivieren',
      denied:     'Benachrichtigungen blockiert — in Browser-Einstellungen erlauben',
      pending:    'Warte auf Erlaubnis…',
      'ios-hint': 'Für Push: Zum Home-Bildschirm hinzufügen',
    }
    return labels[this._notifyState] || labels.inactive
  }

  // Schickt einen Push an alle ANDEREN Geräte des Rooms.
  // body enthält bereits den fertigen Satz mit Name.
  _sendPush(body) {
    const myEndpoint = this._mySubJson && this._mySubJson.endpoint
    const byEndpoint = new Map()
    for (const v of Object.values(this._pushSubs || {})) {
      const s = v && v.sub
      if (!s || !s.endpoint) continue
      if (myEndpoint && s.endpoint === myEndpoint) continue
      byEndpoint.set(s.endpoint, s)
    }
    const subs = [...byEndpoint.values()]
    const allSubs = Object.values(this._pushSubs || {})
    console.info(`[Push] Room: ${this._roomId} | Targets: ${subs.length} | All subs: ${allSubs.length} | Names: ${allSubs.map(v => v && v.name || '?').join(', ')}`)
    if (!subs.length) return
    fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscriptions: subs,
        payload: { title: 'Holz&Stein', body, url: window.location.href, tag: this._roomId || 'holz-stein' },
      }),
    })
      .then(r => {
        if (!r.ok) {
          r.text().then(t => console.error('[Push] Function error:', r.status, t))
          return null
        }
        return r.json()
      })
      .then(res => {
        if (!res) return
        console.info('[Push] Sent:', res.sent, '— Expired:', res.expired)
        if (Array.isArray(res.expired) && res.expired.length) {
          this._pruneExpiredSubs(res.expired)
        }
      })
      .catch(err => console.warn('[Push] Fetch failed (offline or local?):', err.message))
  }

  _pruneExpiredSubs(endpoints) {
    const dead = new Set(endpoints)
    let changed = false
    for (const [cid, v] of Object.entries(this._pushSubs || {})) {
      if (v && v.sub && dead.has(v.sub.endpoint)) { delete this._pushSubs[cid]; changed = true }
    }
    if (changed) this._pushToFirestore()
  }

  _listLabel(listType) {
    return this.listNames[listType]
      || (LIST_CONFIGS[listType] && LIST_CONFIGS[listType].label)
      || listType
  }

  _copyShareLink() {
    const url = window.location.href
    const btn = document.getElementById('share-btn')
    if (!btn) return
    const copy = (text) => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => flash()).catch(() => fallback(text))
      } else {
        fallback(text)
      }
    }
    const flash = () => {
      const prev = btn.innerHTML
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg> <span>Kopiert!</span>`
      setTimeout(() => { btn.innerHTML = prev }, 1800)
    }
    const fallback = (text) => { prompt('Link kopieren:', text) }
    copy(url)
  }

  _newItem(text, priority, listType) {
    return {
      id: (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
      priority,
      listType,
      tags: [],
      notes: '',
      image: null,
    }
  }

  // ── CRUD ───────────────────────────────────────

  addItem(listType, text, priority = 'low') {
    if (!text.trim()) return
    const item = this._newItem(text, priority, listType)
    // Beim Erstellen angehängtes Foto übernehmen
    const pending = this._addImagePending[listType]
    if (pending) {
      this._imgPut(pending.id, pending.dataURL)
      item.image = pending.id
      delete this._addImagePending[listType]
      const btn = document.querySelector(`.add-photo-btn[data-list="${listType}"]`)
      if (btn) this._renderAddPhotoBtn(btn, null)
    }
    this.lists[listType].push(item)
    this._save()
    this._renderList(listType)
    this._updateCount(listType)
    this._playSound('add')
    const name = this._myName || 'Jemand'
    this._sendPush(`${name} hat „${text.trim()}" in ${this._listLabel(listType)} hinzugefügt.`)
  }

  toggleItem(listType, id) {
    // FLIP: Positionen vor dem Re-render merken
    const firstTops = {}
    document.querySelectorAll(`#list-${listType} .list-item`).forEach(el => {
      firstTops[el.dataset.id] = el.getBoundingClientRect().top
    })

    const item = this.lists[listType].find(i => i.id === id)
    if (!item) return
    item.completed = !item.completed
    this._playSound(item.completed ? 'check' : 'uncheck')
    if (item.completed) {
      const name = this._myName || 'Jemand'
      this._sendPush(`${name} hat „${item.text}" in ${this._listLabel(listType)} abgehakt.`)
    }
    this._save()
    this._renderList(listType)
    this._updateCount(listType)

    // FLIP: von alter zu neuer Position animieren
    requestAnimationFrame(() => {
      document.querySelectorAll(`#list-${listType} .list-item`).forEach(el => {
        const first = firstTops[el.dataset.id]
        if (first === undefined) return
        const dy = first - el.getBoundingClientRect().top
        if (Math.abs(dy) < 2) return
        el.style.animation = 'none'
        el.style.transform = `translateY(${dy}px)`
        el.style.transition = 'none'
        el.offsetHeight // reflow erzwingen
        el.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)'
        el.style.transform = ''
        el.addEventListener('transitionend', () => {
          el.style.cssText = ''
        }, { once: true })
      })
    })
  }

  deleteItem(listType, id) {
    this.lists[listType] = this.lists[listType].filter(i => i.id !== id)
    this._save()
    this._renderList(listType)
    this._updateCount(listType)
  }

  updateItem(listType, id, updates) {
    const idx = this.lists[listType].findIndex(i => i.id === id)
    if (idx === -1) return
    Object.assign(this.lists[listType][idx], updates)
    this._save()
    this._renderList(listType)
  }

  clearCompleted(listType) {
    this.lists[listType] = this.lists[listType].filter(i => !i.completed)
    this._save()
    this._renderList(listType)
    this._updateCount(listType)
  }

  reorderItems(listType, dragId, targetId, above) {
    const arr = [...this.lists[listType]]
    const fromIdx = arr.findIndex(i => i.id === dragId)
    if (fromIdx === -1) return
    const [moved] = arr.splice(fromIdx, 1)
    const toIdx = arr.findIndex(i => i.id === targetId)
    if (toIdx === -1) { arr.push(moved) } else {
      arr.splice(above ? toIdx : toIdx + 1, 0, moved)
    }
    this.lists[listType] = arr
    this._save()
    this._renderList(listType)
  }

  reorderLists(dragLt, targetLt, above) {
    const arr = [...this.listTypes]
    const fromIdx = arr.indexOf(dragLt)
    if (fromIdx === -1) return
    arr.splice(fromIdx, 1)
    const toIdx = arr.indexOf(targetLt)
    if (toIdx === -1) { arr.push(dragLt) }
    else { arr.splice(above ? toIdx : toIdx + 1, 0, dragLt) }
    this.listTypes = arr
    this._save()
    this._renderAll()
  }

  renameList(lt, name) {
    this.listNames[lt] = name
    this._save()
  }

  setListIcon(lt, key) {
    this.listIcons[lt] = key
    this._save()
    this._renderAll()
  }

  // ── Icon-Auswahl für Listen ─────────────────────

  _openIconPicker(lt) {
    this._iconPickerTargetList = lt
    const grid = document.getElementById('icon-picker-grid')
    grid.innerHTML = ICON_LIBRARY.map(i =>
      `<button class="icon-picker-swatch" data-icon="${i.key}" title="${i.name}" aria-label="${i.name}">${ICONS[i.key]}</button>`
    ).join('')
    document.getElementById('icon-picker-backdrop').classList.add('open')
  }

  _closeIconPicker() {
    document.getElementById('icon-picker-backdrop').classList.remove('open')
  }

  // Per Drag&Drop auf eine Projekt-Karte gezogen: Liste gehört danach zu
  // genau diesem Projekt (wird ggf. aus einem anderen Projekt entfernt).
  addListToProject(lt, projectId) {
    const proj = this.projects.find(p => p.id === projectId)
    if (!proj) return
    this.projects.forEach(p => { p.listTypes = p.listTypes.filter(t => t !== lt) })
    proj.listTypes.push(lt)
    this._save()
    this._renderAll()
  }

  addList(name) {
    const key = 'list-' + Date.now()
    this.listTypes.push(key)
    this.listNames[key] = name
    this.lists[key] = []
    if (this._currentProjectId) {
      const p = this.projects.find(pr => pr.id === this._currentProjectId)
      if (p) p.listTypes.push(key)
    }
    this._save()
    this._renderAll()
  }

  deleteList(lt) {
    const name = this._getLabel(lt)
    const count = this.lists[lt].length
    const msg = count > 0
      ? `Alle ${count} Einträge gehen dabei verloren.`
      : `Diese Aktion kann nicht rückgängig gemacht werden.`
    this._confirm(`Liste "${name}" löschen?`, msg, () => {
      this.listTypes = this.listTypes.filter(t => t !== lt)
      delete this.lists[lt]
      delete this.listNames[lt]
      this.projects.forEach(p => { p.listTypes = p.listTypes.filter(t => t !== lt) })
      this._save()
      this._renderAll()
    })
  }

  // ── Modal: Neue Liste ───────────────────────────

  _openAddListModal() {
    const input = document.getElementById('add-list-name')
    input.value = ''
    document.getElementById('add-list-backdrop').classList.add('open')
    setTimeout(() => input.focus(), 60)
  }

  _closeAddListModal() {
    document.getElementById('add-list-backdrop').classList.remove('open')
  }

  _confirmAddList() {
    const input = document.getElementById('add-list-name')
    const name = input.value.trim()
    if (!name) { input.focus(); return }
    this.addList(name)
    this._closeAddListModal()
  }

  // ── Projekte ────────────────────────────────────

  addProject(name) {
    const id = 'proj-' + Date.now()
    this.projects.push({ id, name, image: null, coverPreset: null, listTypes: [] })
    this._save()
    this._renderAll()
  }

  _openAddProjectModal() {
    const input = document.getElementById('add-project-name')
    input.value = ''
    document.getElementById('add-project-backdrop').classList.add('open')
    setTimeout(() => input.focus(), 60)
  }

  _closeAddProjectModal() {
    document.getElementById('add-project-backdrop').classList.remove('open')
  }

  _confirmAddProject() {
    const input = document.getElementById('add-project-name')
    const name = input.value.trim()
    if (!name) { input.focus(); return }
    this.addProject(name)
    this._closeAddProjectModal()
  }

  renameProject(id, name) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    p.name = name
    this._save()
    this._renderAll()
  }

  setProjectImage(id, imageId) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    p.image = imageId
    p.coverPreset = null
    this._save()
    this._renderAll()
  }

  setProjectCoverPreset(id, key) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    p.coverPreset = key
    p.image = null
    this._save()
    this._renderAll()
  }

  removeProjectCover(id) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    p.image = null
    p.coverPreset = null
    this._save()
    this._renderAll()
  }

  deleteProject(id) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    const count = p.listTypes.length
    const msg = count > 0
      ? `Die ${count === 1 ? 'enthaltene Liste bleibt' : `${count} enthaltenen Listen bleiben`} erhalten und ${count === 1 ? 'wird' : 'werden'} zu losen Listen.`
      : `Diese Aktion kann nicht rückgängig gemacht werden.`
    this._confirm(`Projekt "${p.name}" löschen?`, msg, () => {
      this.projects = this.projects.filter(pr => pr.id !== id)
      if (this._currentProjectId === id) this._currentProjectId = null
      this._save()
      this._renderAll()
    })
  }

  openProject(id) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    this._currentProjectId = id
    this._justOpenedProject = true
    this._renderAll()
    document.getElementById('dashboard').scrollTo({ top: 0 })
  }

  closeProject() {
    this._currentProjectId = null
    this._renderAll()
    document.getElementById('dashboard').scrollTo({ top: 0 })
  }

  _startRenameProject(id) {
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    const name = prompt('Projektname:', p.name)
    if (name && name.trim() && name.trim() !== p.name) this.renameProject(id, name.trim())
  }

  _defaultCoverClass(id) {
    const n = [...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0)
    return `cover-default-${(n % 12) + 1}`
  }

  // ── Search / filter ────────────────────────────

  _localSearch(listType) {
    const el = document.querySelector(`#card-${listType} .card-search`)
    return el ? el.value.trim() : ''
  }

  _filtered(listType) {
    const q = (this.globalSearch || this._localSearch(listType)).toLowerCase()
    if (!q) return this.lists[listType]
    return this.lists[listType].filter(item =>
      item.text.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q)) ||
      (item.notes && item.notes.toLowerCase().includes(q))
    )
  }

  // ── Rendering ──────────────────────────────────

  _getLabel(lt) {
    return this.listNames[lt] || LIST_CONFIGS[lt]?.label || 'Liste'
  }

  _getConfig(lt) {
    if (LIST_CONFIGS[lt]) return LIST_CONFIGS[lt]
    const label = this._getLabel(lt)
    return {
      placeholder: `Eintrag hinzufügen...`,
      searchPlaceholder: `In ${label} suchen...`,
      emptyText: 'Keine Einträge. Füge einen hinzu!',
      emptySearchText: 'Keine Treffer gefunden.',
    }
  }

  _applyOpenState() {
    // Viewport-Check nicht nötig: .collapsed hat per CSS nur auf ≤640px Wirkung
    this.listTypes.forEach(t => {
      document.getElementById(`card-${t}`)?.classList.toggle('collapsed', !this._openLists.has(t))
    })
  }

  _scrollToCard(lt) {
    if (window.innerWidth > 640) return
    const card = document.getElementById(`card-${lt}`)
    if (!card) return
    const dashboard = document.getElementById('dashboard')
    requestAnimationFrame(() => {
      const cardTop  = card.getBoundingClientRect().top
      const dashTop  = dashboard.getBoundingClientRect().top
      const target   = dashboard.scrollTop + cardTop - dashTop - 8
      dashboard.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })
    })
  }

  _renderAll() {
    const dash = document.getElementById('dashboard')
    dash.innerHTML = this._dashboardHTML()
    this.listTypes.forEach(lt => { this._renderList(lt); this._updateCount(lt) })
    this._applyOpenState()
    this._applyAddPhotoStates()
    this._hydrateImages(dash)
    document.querySelectorAll('.priority-select').forEach(s => this._syncSelectColor(s))

    // Kleine Eintritts-Animation, nur direkt nach openProject() — nicht bei
    // jedem Re-Render (sonst würde sie z.B. bei jedem Remote-Sync erneut laufen).
    if (this._justOpenedProject) {
      dash.querySelector('.project-detail-header')?.classList.add('project-enter')
      dash.querySelector('.dashboard-lists')?.classList.add('project-enter')
      this._justOpenedProject = false
    }
  }

  // ── Projekte: Rendering ─────────────────────────

  _groupedListTypes() {
    return new Set(this.projects.flatMap(p => p.listTypes))
  }

  _dashboardHTML() {
    if (this._currentProjectId) {
      const p = this.projects.find(pr => pr.id === this._currentProjectId)
      if (p) return this._projectDetailHTML(p)
      this._currentProjectId = null
    }
    return this._homeHTML()
  }

  _homeHTML() {
    const grouped = this._groupedListTypes()
    const loose = this.listTypes.filter(lt => !grouped.has(lt))
    const projectsHTML = this.projects.length
      ? `<div class="projects-grid">${this.projects.map(p => this._projectCardHTML(p)).join('')}</div>`
      : ''
    return `${projectsHTML}<div class="dashboard-lists">${loose.map(lt => this._cardHTML(lt)).join('')}</div>`
  }

  // Titelbild: Foto > vorgefertigte Illustration > deterministischer Auto-Fallback
  _coverClass(p) {
    if (p.image) return ''
    return ` project-cover-default ${p.coverPreset || this._defaultCoverClass(p.id)}`
  }

  _coverInner(p) {
    if (p.image) return `<img data-img="${p.image}" alt="" />`
    const key = p.coverPreset || this._defaultCoverClass(p.id)
    return `<div class="cover-scene">${COVER_SCENES[key] || ''}</div>`
  }

  _projectDetailHTML(p) {
    const lists = p.listTypes.filter(lt => this.listTypes.includes(lt))
    const count = lists.length
    const coverClass = this._coverClass(p)
    const coverInner = this._coverInner(p)
    const listsHTML = lists.length
      ? lists.map(lt => this._cardHTML(lt)).join('')
      : `<div class="project-empty-state">${ICONS.empty}<p>Noch keine Listen in diesem Projekt.</p></div>`
    return `
<div class="project-detail-header">
  <div class="project-detail-cover${coverClass}">${coverInner}<div class="project-cover-scrim"></div></div>
  <button class="project-back-btn" data-action="close-project" title="Zurück" aria-label="Zurück">${ICONS.arrowLeft}</button>
  <button class="project-menu-btn detail" data-action="project-menu" data-project="${p.id}" title="Optionen" aria-label="Projekt-Optionen">${ICONS.dots}</button>
  <div class="project-detail-title">
    <span class="project-detail-name" data-action="start-rename-project" data-project="${p.id}" title="Klicken zum Umbenennen">${this._esc(p.name)}</span>
    <span class="project-detail-count">${count === 1 ? '1 Liste' : count + ' Listen'}</span>
  </div>
</div>
<div class="dashboard-lists">${listsHTML}</div>`
  }

  _projectCardHTML(p) {
    const count = p.listTypes.length
    const coverClass = this._coverClass(p)
    const coverInner = this._coverInner(p)
    return `
<div class="project-card" data-action="open-project" data-project="${p.id}">
  <div class="project-cover${coverClass}">
    ${coverInner}
    <div class="project-cover-scrim"></div>
    <button class="project-menu-btn" data-action="project-menu" data-project="${p.id}" title="Optionen" aria-label="Projekt-Optionen">${ICONS.dots}</button>
    <div class="project-card-info">
      <div class="project-card-name">${this._esc(p.name)}</div>
      <div class="project-card-count">${count === 1 ? '1 Liste' : count + ' Listen'}</div>
    </div>
  </div>
</div>`
  }

  _openProjectMenu(id, anchor) {
    this._closeProjectMenu()
    const p = this.projects.find(pr => pr.id === id)
    if (!p) return
    const hasCover = !!(p.image || p.coverPreset)
    const menu = document.createElement('div')
    menu.className = 'project-menu'
    menu.innerHTML = `
      <button data-pm="rename">${ICONS.pencil} Umbenennen</button>
      <button data-pm="cover">${ICONS.camera} Titelbild ${hasCover ? 'ändern' : 'festlegen'}</button>
      ${hasCover ? `<button data-pm="cover-remove">${ICONS.x} Titelbild entfernen</button>` : ''}
      <button data-pm="delete" class="danger">${ICONS.trash} Projekt löschen</button>
    `
    document.body.appendChild(menu)
    const r = anchor.getBoundingClientRect()
    const menuWidth = 210
    menu.style.top = Math.round(r.bottom + 6 + window.scrollY) + 'px'
    menu.style.left = Math.round(Math.min(r.left, window.innerWidth - menuWidth - 8)) + 'px'
    this._projectMenuEl = menu

    menu.addEventListener('click', e => {
      const btn = e.target.closest('[data-pm]')
      if (!btn) return
      const action = btn.dataset.pm
      this._closeProjectMenu()
      if (action === 'rename')       this._startRenameProject(id)
      if (action === 'cover')        this._openCoverPicker(id)
      if (action === 'cover-remove') this.removeProjectCover(id)
      if (action === 'delete')       this.deleteProject(id)
    })

    setTimeout(() => {
      document.addEventListener('click', this._projectMenuOutsideHandler = (e) => {
        if (this._projectMenuEl && !this._projectMenuEl.contains(e.target)) this._closeProjectMenu()
      }, { capture: true })
    }, 0)
  }

  _closeProjectMenu() {
    if (this._projectMenuOutsideHandler) {
      document.removeEventListener('click', this._projectMenuOutsideHandler, { capture: true })
      this._projectMenuOutsideHandler = null
    }
    if (this._projectMenuEl) { this._projectMenuEl.remove(); this._projectMenuEl = null }
  }

  // ── Titelbild-Auswahl: Vorlagen-Raster + "Aus Fotos wählen" ─────────────

  _openCoverPicker(projectId) {
    this._coverPickerTargetProject = projectId
    const grid = document.getElementById('cover-picker-grid')
    grid.innerHTML = COVER_PRESETS.map(c =>
      `<div class="cover-picker-swatch ${c.key}" data-preset="${c.key}" title="${c.name}" role="button" aria-label="${c.name}">${COVER_SCENES[c.key] || ''}</div>`
    ).join('') + `<div class="cover-picker-swatch gallery" data-gallery="1" title="Aus Fotos wählen" role="button" aria-label="Aus Fotos wählen">${ICONS.camera}</div>`
    document.getElementById('cover-picker-backdrop').classList.add('open')
  }

  _closeCoverPicker() {
    document.getElementById('cover-picker-backdrop').classList.remove('open')
  }

  // ── "+"-Menü (Header): Neue Liste / Neues Projekt ───────────────────────

  _onAddMenuClick(anchor) {
    if (this._currentProjectId) { this._openAddListModal(); return }
    this._closeProjectMenu()
    const menu = document.createElement('div')
    menu.className = 'project-menu'
    menu.innerHTML = `
      <button data-am="list">${ICONS.list} <span>Neue Liste</span></button>
      <button data-am="project">${ICONS.folder} <span>Neues Projekt</span></button>
    `
    document.body.appendChild(menu)
    const r = anchor.getBoundingClientRect()
    const menuWidth = 190
    menu.style.top = Math.round(r.bottom + 6 + window.scrollY) + 'px'
    menu.style.left = Math.round(Math.min(r.left, window.innerWidth - menuWidth - 8)) + 'px'
    this._addMenuEl = menu

    menu.addEventListener('click', e => {
      const btn = e.target.closest('[data-am]')
      if (!btn) return
      this._closeAddMenu()
      if (btn.dataset.am === 'list')    this._openAddListModal()
      if (btn.dataset.am === 'project') this._openAddProjectModal()
    })

    setTimeout(() => {
      document.addEventListener('click', this._addMenuOutsideHandler = (e) => {
        if (this._addMenuEl && !this._addMenuEl.contains(e.target) && e.target !== anchor) this._closeAddMenu()
      }, { capture: true })
    }, 0)
  }

  _closeAddMenu() {
    if (this._addMenuOutsideHandler) {
      document.removeEventListener('click', this._addMenuOutsideHandler, { capture: true })
      this._addMenuOutsideHandler = null
    }
    if (this._addMenuEl) { this._addMenuEl.remove(); this._addMenuEl = null }
  }

  _renderAddPhotoBtn(btn, pending) {
    if (pending) {
      btn.classList.add('has-photo')
      btn.innerHTML = `<img src="${pending.dataURL}" alt="" />`
      btn.title = 'Foto entfernen'
    } else {
      btn.classList.remove('has-photo')
      btn.innerHTML = ICONS.camera
      btn.title = 'Foto anhängen'
    }
  }

  _applyAddPhotoStates() {
    this.listTypes.forEach(lt => {
      const btn = document.querySelector(`.add-photo-btn[data-list="${lt}"]`)
      if (btn) this._renderAddPhotoBtn(btn, this._addImagePending[lt] || null)
    })
  }

  _makeLabelSpan(lt) {
    const span = document.createElement('span')
    span.className = 'card-label'
    span.setAttribute('data-action', 'start-rename')
    span.setAttribute('data-list', lt)
    span.title = 'Klicken zum Umbenennen'
    span.textContent = this._getLabel(lt)
    return span
  }

  _listIcon(lt) {
    return ICONS[this.listIcons[lt]] || ICONS[lt] || ICONS.list
  }

  _cardHTML(lt) {
    const cfg = this._getConfig(lt)
    const icon = this._listIcon(lt)
    const canDelete = this.listTypes.length > 1
    return `
<div class="card" id="card-${lt}">
  <div class="card-header">
    <div class="card-title-row">
      <div class="card-title">
        <div class="card-grip" data-drag-card="${lt}" title="Liste verschieben">${ICONS.grip}</div>
        <div class="card-icon" data-action="pick-icon" data-list="${lt}" title="Icon ändern">${icon}</div>
        <span class="card-label" data-action="start-rename" data-list="${lt}" title="Klicken zum Umbenennen">${this._getLabel(lt)}</span>
      </div>
      <div class="card-title-actions">
        <span class="item-count" id="count-${lt}">0</span>
        ${canDelete ? `<button class="delete-list-btn" data-action="delete-list" data-list="${lt}" title="Liste löschen">${ICONS.x}</button>` : ''}
        <button class="card-toggle-btn" data-action="toggle-card" data-list="${lt}" title="Ein-/Ausklappen">${ICONS.chevron}</button>
      </div>
    </div>
    <input class="card-search" type="text" placeholder="${cfg.searchPlaceholder}" data-list="${lt}" autocomplete="off" />
  </div>
  <div class="card-list" id="list-${lt}"></div>
  <div class="card-footer">
    <form class="add-form" id="form-${lt}" data-list="${lt}" novalidate>
      <input class="add-input" type="text" placeholder="${cfg.placeholder}" autocomplete="off" maxlength="200" />
      <select class="priority-select" title="Priorität">
        <option value="low">— Niedrig</option>
        <option value="medium">◈ Mittel</option>
        <option value="high">▲ Hoch</option>
      </select>
      <button type="button" class="add-photo-btn" data-list="${lt}" title="Foto anhängen">${ICONS.camera}</button>
      <button type="submit" class="add-btn" title="Hinzufügen">${ICONS.plus}</button>
    </form>
    <button class="clear-btn" id="clear-${lt}" data-list="${lt}" type="button"></button>
  </div>
</div>`
  }

  _renderList(listType) {
    const el = document.getElementById(`list-${listType}`)
    if (!el) return

    const searchActive = !!(this.globalSearch || this._localSearch(listType))
    const items = this._filtered(listType)
    // Abgehakte Items immer ans Ende
    const sorted = items.slice().sort((a, b) => Number(a.completed) - Number(b.completed))

    if (sorted.length === 0) {
      const cfg = this._getConfig(listType)
      el.innerHTML = `<div class="empty-state">${ICONS.empty}<p>${searchActive ? cfg.emptySearchText : cfg.emptyText}</p></div>`
    } else {
      el.innerHTML = sorted.map(item => this._itemHTML(item, searchActive)).join('')
      this._hydrateImages(el)
    }

    const completedCount = this.lists[listType].filter(i => i.completed).length
    const clearBtn = document.getElementById(`clear-${listType}`)
    if (clearBtn) {
      const label = completedCount === 1 ? 'Erledigtes' : 'Erledigte'
      clearBtn.textContent = completedCount > 0
        ? `${completedCount} ${label} löschen`
        : ''
      clearBtn.classList.toggle('visible', completedCount > 0)
    }
  }

  _itemHTML(item, dragDisabled) {
    const completedCls = item.completed ? ' completed' : ''
    const dragCls = dragDisabled ? ' drag-disabled' : ''
    const hasMeta = item.priority !== 'low' || item.tags.length > 0
    const tags = item.tags.map(t => `<span class="tag">${this._esc(t)}</span>`).join('')
    const meta = hasMeta ? `<div class="item-meta">${item.priority !== 'low' ? `<span class="priority-dot ${item.priority}"></span>` : ''}${tags}</div>` : ''
    const notes = item.notes ? `<div class="item-notes">${this._esc(item.notes)}</div>` : ''

    const priorityCls = item.priority !== 'low' ? ` priority-${item.priority}` : ''
    return `<div class="list-item${completedCls}${dragCls}${priorityCls}" data-id="${item.id}" data-list="${item.listType}" draggable="${dragDisabled ? 'false' : 'true'}">
  <div class="drag-handle" data-drag="true">${ICONS.grip}</div>
  <button class="item-checkbox" data-action="toggle" data-id="${item.id}" data-list="${item.listType}">${ICONS.check}</button>
  <div class="item-content">
    <div class="item-text">${this._esc(item.text)}</div>
    ${meta}${notes}
  </div>
  ${item.image ? `<button class="item-thumb" data-action="view-image" data-image-id="${item.image}" title="Foto ansehen" aria-label="Foto ansehen"><img data-img="${item.image}" alt="" /></button>` : ''}
  <div class="item-actions">
    <button class="action-btn" data-action="edit" data-id="${item.id}" data-list="${item.listType}" title="Bearbeiten">${ICONS.pencil}</button>
    <button class="action-btn delete" data-action="delete" data-id="${item.id}" data-list="${item.listType}" title="Löschen">${ICONS.trash}</button>
  </div>
</div>`
  }

  _updateCount(listType) {
    const el = document.getElementById(`count-${listType}`)
    if (!el) return
    const total = this.lists[listType].length
    const done  = this.lists[listType].filter(i => i.completed).length
    el.textContent = done > 0 ? `${done}/${total}` : String(total)
  }

  _priorityColor(value) {
    return { low: '#6b7280', medium: '#f59e0b', high: '#dc2626' }[value] || '#6b7280'
  }

  _syncSelectColor(select) {
    select.style.color = this._priorityColor(select.value)
  }

  _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  // ── Confirm Modal ──────────────────────────────

  _confirm(title, message, onConfirm) {
    document.getElementById('confirm-title').textContent   = title
    document.getElementById('confirm-message').textContent = message
    this._confirmCallback = onConfirm
    document.getElementById('confirm-backdrop').classList.add('open')
    setTimeout(() => document.getElementById('confirm-ok').focus(), 60)
  }

  _closeConfirm() {
    document.getElementById('confirm-backdrop').classList.remove('open')
    this._confirmCallback = null
  }

  // ── Inline rename ──────────────────────────────

  _startRename(lt) {
    const span = document.querySelector(`#card-${lt} .card-label`)
    if (!span) return
    const original = this._getLabel(lt)
    const input = document.createElement('input')
    input.className = 'card-label-input'
    input.value = original
    input.maxLength = 40
    span.replaceWith(input)
    input.focus()
    input.select()

    let done = false
    const commit = (newName) => {
      if (done) return
      done = true
      if (newName && newName !== original) this.renameList(lt, newName)
      input.replaceWith(this._makeLabelSpan(lt))
    }
    const cancel = () => {
      if (done) return
      done = true
      input.replaceWith(this._makeLabelSpan(lt))
    }

    input.addEventListener('blur', () => commit(input.value.trim()))
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); commit(input.value.trim()) }
      if (e.key === 'Escape') { e.preventDefault(); cancel() }
    })
  }

  // ── Edit Modal ─────────────────────────────────

  openEdit(id, listType) {
    const item = this.lists[listType].find(i => i.id === id)
    if (!item) return
    this.editing = { id, listType }
    this.editPriority = item.priority

    document.getElementById('edit-text').value  = item.text
    document.getElementById('edit-tags').value  = item.tags.join(', ')
    document.getElementById('edit-notes').value = item.notes || ''

    document.querySelectorAll('.priority-btn').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.priority === item.priority)
    )

    // Bild-Zustand zurücksetzen und aktuelles Bild (falls vorhanden) anzeigen
    this._editImageChanged = false
    this._editImagePending = null
    this._setEditImagePreview(null)
    if (item.image) {
      this._imgGet(item.image).then(url => {
        if (url && this.editing && this.editing.id === id) this._setEditImagePreview(url)
      })
    }

    document.getElementById('modal-backdrop').classList.add('open')
    setTimeout(() => document.getElementById('edit-text').focus(), 60)
  }

  closeEdit() {
    this.editing = null
    document.getElementById('modal-backdrop').classList.remove('open')
  }

  saveEdit() {
    if (!this.editing) return
    const text = document.getElementById('edit-text').value.trim()
    if (!text) { document.getElementById('edit-text').focus(); return }
    const tags  = document.getElementById('edit-tags').value
      .split(',').map(t => t.trim()).filter(Boolean)
    const notes = document.getElementById('edit-notes').value.trim()
    const updates = { text, priority: this.editPriority, tags, notes }
    if (this._editImageChanged) {
      if (this._editImagePending) {
        // Cache sofort füllen (Sofort-Anzeige); IndexedDB/Firestore schreiben async
        this._imgPut(this._editImagePending.id, this._editImagePending.dataURL)
        updates.image = this._editImagePending.id
      } else {
        updates.image = null
      }
    }
    this.updateItem(this.editing.listType, this.editing.id, updates)
    this._editImageChanged = false
    this._editImagePending = null
    this.closeEdit()
  }

  // ── Drag & Drop ────────────────────────────────

  _onDragStart(e) {
    const item = e.target.closest('.list-item')
    if (!item || item.getAttribute('draggable') === 'false') return
    this.dragging = { id: item.dataset.id, listType: item.dataset.list }
    item.classList.add('dragging')
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', item.dataset.id)
  }

  _onDragOver(e) {
    e.preventDefault()
    if (!this.dragging) return
    const target = e.target.closest('.list-item[draggable="true"]')
    if (!target || target.dataset.id === this.dragging.id) return
    if (target.dataset.list !== this.dragging.listType) return

    target.closest('.card-list').querySelectorAll('.list-item').forEach(el =>
      el.classList.remove('drag-over-top', 'drag-over-bottom')
    )
    const above = e.clientY < target.getBoundingClientRect().top + target.offsetHeight / 2
    target.classList.add(above ? 'drag-over-top' : 'drag-over-bottom')
    this.dropTarget = { id: target.dataset.id, listType: target.dataset.list, above }
  }

  _onDrop(e) {
    e.preventDefault()
    if (!this.dragging || !this.dropTarget) return
    if (this.dragging.listType !== this.dropTarget.listType) return
    this.reorderItems(this.dragging.listType, this.dragging.id, this.dropTarget.id, this.dropTarget.above)
  }

  _onDragEnd() {
    document.querySelectorAll('.list-item').forEach(el =>
      el.classList.remove('dragging', 'drag-over-top', 'drag-over-bottom')
    )
    this.dragging = null
    this.dropTarget = null
  }

  // ── Audio ──────────────────────────────────────

  _initAudio() {
    this._audioCtx = null
    const unlock = () => {
      if (this._audioCtx) return
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (!Ctx) return
      this._audioCtx = new Ctx()
    }
    document.addEventListener('touchstart', unlock, { passive: true })
    document.addEventListener('click', unlock)
  }

  _playSound(type) {
    const ctx = this._audioCtx
    if (!ctx) return
    if (ctx.state === 'suspended') ctx.resume()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    const t = ctx.currentTime
    if (type === 'check') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(520, t)
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.08)
      gain.gain.setValueAtTime(0.12, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
      osc.start(t); osc.stop(t + 0.22)
    } else if (type === 'uncheck') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(520, t)
      osc.frequency.exponentialRampToValueAtTime(260, t + 0.12)
      gain.gain.setValueAtTime(0.08, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
      osc.start(t); osc.stop(t + 0.15)
    } else if (type === 'add') {
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(660, t)
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.06)
      gain.gain.setValueAtTime(0.09, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12)
      osc.start(t); osc.stop(t + 0.12)
    }
  }

  // ── Bilder: Speicher (IndexedDB lokal + Firestore-Spiegel) ─────────────────

  _idb() {
    if (this._idbPromise) return this._idbPromise
    this._idbPromise = new Promise((resolve, reject) => {
      let req
      try { req = indexedDB.open('holzstein-img', 1) }
      catch (e) { reject(e); return }
      req.onupgradeneeded = () => { req.result.createObjectStore('img') }
      req.onsuccess = () => resolve(req.result)
      req.onerror   = () => reject(req.error)
    })
    return this._idbPromise
  }

  async _idbGet(id) {
    const db = await this._idb()
    return new Promise((resolve, reject) => {
      const r = db.transaction('img', 'readonly').objectStore('img').get(id)
      r.onsuccess = () => resolve(r.result || null)
      r.onerror   = () => reject(r.error)
    })
  }

  async _idbPut(id, val) {
    const db = await this._idb()
    return new Promise((resolve, reject) => {
      const tx = db.transaction('img', 'readwrite')
      tx.objectStore('img').put(val, id)
      tx.oncomplete = () => resolve()
      tx.onerror    = () => reject(tx.error)
    })
  }

  // Liefert die dataURL zu einer imageId: Session-Cache → IndexedDB → Firestore
  async _imgGet(id) {
    if (!id) return null
    if (this._imgMem.has(id)) return this._imgMem.get(id)
    try {
      const local = await this._idbGet(id)
      if (local) { this._imgMem.set(id, local); return local }
    } catch { /* IndexedDB nicht verfügbar */ }
    if (this._db && this._getDocFn) {
      try {
        const snap = await this._getDocFn(this._docFn(this._db, 'images', id))
        if (snap.exists()) {
          const data = snap.data().data
          if (data) {
            this._imgMem.set(id, data)
            this._idbPut(id, data).catch(() => {})
            return data
          }
        }
      } catch (e) { console.warn('[Img] Firestore-Laden fehlgeschlagen:', e && e.message) }
    }
    return null
  }

  // Speichert eine dataURL: Cache sofort (für Sofort-Anzeige) + IndexedDB + Firestore
  async _imgPut(id, dataURL) {
    this._imgMem.set(id, dataURL)
    this._idbPut(id, dataURL).catch(() => {})
    if (this._db && this._setDocFn) {
      try {
        await this._setDocFn(this._docFn(this._db, 'images', id), {
          data: dataURL, roomId: this._roomId || null, createdAt: Date.now(),
        })
      } catch (e) { console.warn('[Img] Firestore-Upload fehlgeschlagen:', e && e.message) }
    }
  }

  // Datei → verkleinerte JPEG-dataURL (max. Kantenlänge, Qualität)
  _compressImage(file, maxDim = 1280, quality = 0.72) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file)
      const img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        let w = img.naturalWidth, h = img.naturalHeight
        if (Math.max(w, h) > maxDim) {
          const s = maxDim / Math.max(w, h)
          w = Math.round(w * s); h = Math.round(h * s)
        }
        const canvas = document.createElement('canvas')
        canvas.width = w; canvas.height = h
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)
        try { resolve(canvas.toDataURL('image/jpeg', quality)) }
        catch (e) { reject(e) }
      }
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Bild konnte nicht gelesen werden')) }
      img.src = url
    })
  }

  // Füllt alle <img data-img="…"> mit ihrer dataURL (Cache sofort, sonst async)
  _hydrateImages(root) {
    const scope = root || document
    scope.querySelectorAll('img[data-img]').forEach(img => {
      const id = img.getAttribute('data-img')
      if (!id || img.dataset.loaded === id) return
      const cached = this._imgMem.get(id)
      if (cached) { img.src = cached; img.dataset.loaded = id; return }
      this._imgGet(id).then(url => { if (url) { img.src = url; img.dataset.loaded = id } })
    })
  }

  // ── Vollbild-Viewer: Wischen zum Schließen, Pinch-Zoom, Tap schließt ───────

  _initImageViewer() {
    const v = document.createElement('div')
    v.className = 'img-viewer'
    v.id = 'img-viewer'
    v.innerHTML = `
      <div class="img-viewer-header">
        <div class="img-viewer-avatar"></div>
        <div class="img-viewer-name"></div>
      </div>
      <img class="img-viewer-img" id="img-viewer-img" alt="" />`
    document.body.appendChild(v)
    const img    = v.querySelector('#img-viewer-img')
    const header = v.querySelector('.img-viewer-header')
    const avatar = v.querySelector('.img-viewer-avatar')
    const nameEl = v.querySelector('.img-viewer-name')

    let scale = 1, tx = 0, ty = 0
    let startX = 0, startY = 0, startTx = 0, startTy = 0, startDist = 0, startScale = 1
    let mode = null, moved = false

    const apply = () => { img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})` }
    const hardReset = () => { scale = 1; tx = 0; ty = 0; img.style.transition = ''; img.style.opacity = ''; apply(); v.style.background = ''; header.style.opacity = '' }
    const springBack = () => { img.style.transition = 'transform .28s ease'; scale = 1; tx = 0; ty = 0; apply(); v.style.background = ''; header.style.opacity = '' }
    const dist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)

    const open = (dataURL, ctx) => {
      img.src = dataURL
      avatar.innerHTML = (ctx && ctx.icon) || ICONS.list
      nameEl.textContent = (ctx && ctx.name) || ''
      header.classList.toggle('empty', !(ctx && ctx.name))
      hardReset()
      v.classList.add('open')
    }
    const close = () => {
      v.classList.remove('open')
      setTimeout(() => { img.src = ''; hardReset() }, 260)
    }
    this._openImageViewer = open

    v.addEventListener('touchstart', (e) => {
      img.style.transition = 'none'
      if (e.touches.length === 2) {
        mode = 'pinch'; startDist = dist(e.touches) || 1; startScale = scale
      } else {
        const t = e.touches[0]
        startX = t.clientX; startY = t.clientY; startTx = tx; startTy = ty; moved = false
        mode = scale > 1.02 ? 'pan' : 'drag'
      }
    }, { passive: false })

    v.addEventListener('touchmove', (e) => {
      if (mode === 'pinch' && e.touches.length === 2) {
        scale = Math.min(5, Math.max(1, startScale * (dist(e.touches) / startDist)))
        apply(); e.preventDefault(); return
      }
      const t = e.touches[0]
      if (!t) return
      const dx = t.clientX - startX, dy = t.clientY - startY
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) moved = true
      if (mode === 'pan') {
        tx = startTx + dx; ty = startTy + dy; apply(); e.preventDefault()
      } else if (mode === 'drag') {
        tx = dx; ty = dy
        const p = Math.min(Math.hypot(dx, dy) / 320, 1)
        scale = 1 - p * 0.16
        v.style.background = `rgba(0,0,0,${(0.96 * (1 - p * 0.9)).toFixed(3)})`
        header.style.opacity = String(1 - p)
        apply(); e.preventDefault()
      }
    }, { passive: false })

    v.addEventListener('touchend', () => {
      if (mode === 'pinch') { if (scale <= 1.03) springBack(); mode = null; return }
      if (mode === 'drag') {
        if (Math.hypot(tx, ty) > 120) {
          img.style.transition = 'transform .24s ease, opacity .24s ease'
          tx *= 2.6; ty *= 2.6; img.style.opacity = '0'; apply()
          v.style.background = 'rgba(0,0,0,0)'
          setTimeout(close, 200)
        } else {
          springBack()
        }
        mode = null; return
      }
      mode = null
    })

    // Klick / Tap auf das Bild schließt (nur ohne vorheriges Ziehen, unzoomt)
    v.addEventListener('click', () => {
      if (moved) { moved = false; return }
      if (scale > 1.02) { springBack(); return }
      close()
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && v.classList.contains('open')) close()
    })
  }

  _setEditImagePreview(dataURL) {
    const preview = document.getElementById('edit-image-preview')
    const addBtn  = document.getElementById('edit-image-add')
    const thumb   = document.getElementById('edit-image-thumb')
    if (!preview || !addBtn || !thumb) return
    if (dataURL) {
      thumb.src = dataURL
      preview.classList.remove('hidden')
      addBtn.classList.add('hidden')
    } else {
      thumb.removeAttribute('src')
      preview.classList.add('hidden')
      addBtn.classList.remove('hidden')
    }
  }

  // ── Theme (Hell-/Dunkelmodus) ──────────────────

  _initTheme() {
    this._applyTheme(localStorage.getItem('_listAppTheme') || 'dark')
  }

  _applyTheme(theme) {
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
    document.getElementById('theme-btn')?.classList.toggle('light', theme === 'light')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f7f5' : '#0a0a0a')
  }

  _toggleThemeState() {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    this._applyTheme(next)
    localStorage.setItem('_listAppTheme', next)
  }

  // ── Init & Event Binding ───────────────────────

  _init() {
    this._initTheme()
    this._initAudio()
    this._initImageViewer()
    this._renderAll()
    this._initFirebase()
    this._initPush()

    const dash = document.getElementById('dashboard')

    // ── Clicks (delegated)
    dash.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]')
      if (!btn) return
      const { action, id, list } = btn.dataset
      if (action === 'toggle')       this.toggleItem(list, id)
      if (action === 'edit')         this.openEdit(id, list)
      if (action === 'delete')       this.deleteItem(list, id)
      if (action === 'start-rename') this._startRename(list)
      if (action === 'delete-list')  this.deleteList(list)
      if (action === 'pick-icon')    this._openIconPicker(list)
      if (action === 'open-project')         this.openProject(btn.dataset.project)
      if (action === 'close-project')        this.closeProject()
      if (action === 'project-menu')         this._openProjectMenu(btn.dataset.project, btn)
      if (action === 'start-rename-project') this._startRenameProject(btn.dataset.project)
      if (action === 'view-image') {
        const row  = btn.closest('.list-item')
        const rowLt = row && row.dataset.list
        const item  = rowLt && (this.lists[rowLt] || []).find(i => i.id === row.dataset.id)
        const ctx = { icon: rowLt ? this._listIcon(rowLt) : ICONS.list, name: item ? item.text : '' }
        this._imgGet(btn.dataset.imageId).then(url => { if (url) this._openImageViewer(url, ctx) })
      }
    })

    dash.addEventListener('click', e => {
      const clear = e.target.closest('.clear-btn')
      if (clear) this.clearCompleted(clear.dataset.list)
    })

    // ── Add form
    dash.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target.closest('.add-form')
      if (!form) return
      const input  = form.querySelector('.add-input')
      const select = form.querySelector('.priority-select')
      this.addItem(form.dataset.list, input.value, select ? select.value : 'low')
      input.value = ''
      input.focus()
    })

    // ── Per-card search & priority color
    dash.addEventListener('input', e => {
      const search = e.target.closest('.card-search')
      if (search) this._renderList(search.dataset.list)
    })

    dash.addEventListener('change', e => {
      const select = e.target.closest('.priority-select')
      if (select) this._syncSelectColor(select)
    })

    // ── Drag & drop
    dash.addEventListener('dragstart', e => this._onDragStart(e))
    dash.addEventListener('dragover',  e => this._onDragOver(e))
    dash.addEventListener('drop',      e => this._onDrop(e))
    dash.addEventListener('dragend',   ()  => this._onDragEnd())

    // ── Global search
    const gSearch = document.getElementById('global-search')
    const gClear  = document.getElementById('global-search-clear')

    gSearch.addEventListener('input', () => {
      this.globalSearch = gSearch.value.trim()
      gClear.classList.toggle('hidden', !gSearch.value)
      this.listTypes.forEach(lt => this._renderList(lt))
    })

    gClear.addEventListener('click', () => {
      gSearch.value = ''
      this.globalSearch = ''
      gClear.classList.add('hidden')
      this.listTypes.forEach(lt => this._renderList(lt))
      gSearch.focus()
    })

    // ── Confirm modal
    const confirmBackdrop = document.getElementById('confirm-backdrop')
    document.getElementById('confirm-close') .addEventListener('click', () => this._closeConfirm())
    document.getElementById('confirm-cancel').addEventListener('click', () => this._closeConfirm())
    document.getElementById('confirm-ok')    .addEventListener('click', () => {
      if (this._confirmCallback) this._confirmCallback()
      this._closeConfirm()
    })
    confirmBackdrop.addEventListener('click', e => { if (e.target === e.currentTarget) this._closeConfirm() })
    confirmBackdrop.addEventListener('keydown', e => { if (e.key === 'Escape') this._closeConfirm() })

    // ── Add list modal
    document.getElementById('add-list-close')  .addEventListener('click', () => this._closeAddListModal())
    document.getElementById('add-list-cancel') .addEventListener('click', () => this._closeAddListModal())
    document.getElementById('add-list-confirm').addEventListener('click', () => this._confirmAddList())
    document.getElementById('add-list-backdrop').addEventListener('click', e => {
      if (e.target === e.currentTarget) this._closeAddListModal()
    })
    document.getElementById('add-list-name').addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); this._confirmAddList() }
      if (e.key === 'Escape') { e.preventDefault(); this._closeAddListModal() }
    })

    // ── Add project modal
    document.getElementById('add-project-close')  .addEventListener('click', () => this._closeAddProjectModal())
    document.getElementById('add-project-cancel') .addEventListener('click', () => this._closeAddProjectModal())
    document.getElementById('add-project-confirm').addEventListener('click', () => this._confirmAddProject())
    document.getElementById('add-project-backdrop').addEventListener('click', e => {
      if (e.target === e.currentTarget) this._closeAddProjectModal()
    })
    document.getElementById('add-project-name').addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); this._confirmAddProject() }
      if (e.key === 'Escape') { e.preventDefault(); this._closeAddProjectModal() }
    })

    // ── Cover-Picker modal
    document.getElementById('cover-picker-close').addEventListener('click', () => this._closeCoverPicker())
    document.getElementById('cover-picker-backdrop').addEventListener('click', e => {
      if (e.target === e.currentTarget) this._closeCoverPicker()
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('cover-picker-backdrop').classList.contains('open')) {
        this._closeCoverPicker()
      }
    })
    document.getElementById('cover-picker-grid').addEventListener('click', e => {
      const pid = this._coverPickerTargetProject
      if (!pid) return
      if (e.target.closest('[data-gallery]')) {
        this._closeCoverPicker()
        this._coverImageTargetProject = pid
        this._coverImageInput.click()
        return
      }
      const swatch = e.target.closest('[data-preset]')
      if (swatch) {
        this.setProjectCoverPreset(pid, swatch.dataset.preset)
        this._closeCoverPicker()
      }
    })

    // ── Icon-Picker modal
    document.getElementById('icon-picker-close').addEventListener('click', () => this._closeIconPicker())
    document.getElementById('icon-picker-backdrop').addEventListener('click', e => {
      if (e.target === e.currentTarget) this._closeIconPicker()
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('icon-picker-backdrop').classList.contains('open')) {
        this._closeIconPicker()
      }
    })
    document.getElementById('icon-picker-grid').addEventListener('click', e => {
      const lt = this._iconPickerTargetList
      if (!lt) return
      const swatch = e.target.closest('[data-icon]')
      if (swatch) {
        this.setListIcon(lt, swatch.dataset.icon)
        this._closeIconPicker()
      }
    })

    // ── Header: "+"-Menü, Benachrichtigungen, Theme
    document.getElementById('add-menu-btn').addEventListener('click', (e) => this._onAddMenuClick(e.currentTarget))
    document.getElementById('notify-btn').addEventListener('click', () => this._onNotifyBtnClick())
    document.getElementById('theme-btn').addEventListener('click', () => this._toggleThemeState())

    // ── Projekt-Titelbild (verstecktes File-Input, geteilt von allen Projekten)
    this._coverImageInput = document.createElement('input')
    this._coverImageInput.type = 'file'
    this._coverImageInput.accept = 'image/*'
    this._coverImageInput.style.display = 'none'
    document.body.appendChild(this._coverImageInput)
    this._coverImageInput.addEventListener('change', async () => {
      const file = this._coverImageInput.files && this._coverImageInput.files[0]
      this._coverImageInput.value = ''
      const pid = this._coverImageTargetProject
      if (!file || !pid) return
      try {
        const dataURL = await this._compressImage(file, 1200, 0.75)
        const id = (crypto.randomUUID ? crypto.randomUUID() : 'img-' + Date.now() + Math.random().toString(36).slice(2))
        await this._imgPut(id, dataURL)
        this.setProjectImage(pid, id)
      } catch (e) { console.warn('[Img] Titelbild fehlgeschlagen:', e && e.message) }
    })

    // ── Modal
    document.getElementById('modal-close') .addEventListener('click', () => this.closeEdit())
    document.getElementById('modal-cancel').addEventListener('click', () => this.closeEdit())
    document.getElementById('modal-save')  .addEventListener('click', () => this.saveEdit())

    // ── Bild im Bearbeiten-Modal
    const imgAdd    = document.getElementById('edit-image-add')
    const imgInput  = document.getElementById('edit-image-input')
    const imgRemove = document.getElementById('edit-image-remove')
    const imgThumb  = document.getElementById('edit-image-thumb')
    imgAdd?.addEventListener('click', () => imgInput.click())
    imgInput?.addEventListener('change', async () => {
      const file = imgInput.files && imgInput.files[0]
      imgInput.value = ''
      if (!file) return
      try {
        const dataURL = await this._compressImage(file)
        const id = (crypto.randomUUID ? crypto.randomUUID() : 'img-' + Date.now() + Math.random().toString(36).slice(2))
        this._editImageChanged = true
        this._editImagePending = { id, dataURL }
        this._setEditImagePreview(dataURL)
      } catch (e) { console.warn('[Img] Verkleinern fehlgeschlagen:', e && e.message) }
    })
    imgRemove?.addEventListener('click', () => {
      this._editImageChanged = true
      this._editImagePending = null
      this._setEditImagePreview(null)
    })
    imgThumb?.addEventListener('click', () => {
      if (!imgThumb.src) return
      let ctx = null
      if (this.editing) {
        const it = (this.lists[this.editing.listType] || []).find(i => i.id === this.editing.id)
        ctx = { icon: this._listIcon(this.editing.listType), name: it ? it.text : '' }
      }
      this._openImageViewer(imgThumb.src, ctx)
    })

    // ── Foto direkt beim Erstellen anhängen (Kamera-Button in der Add-Form)
    const addImgInput = document.createElement('input')
    addImgInput.type = 'file'
    addImgInput.accept = 'image/*'
    addImgInput.style.display = 'none'
    document.body.appendChild(addImgInput)
    this._addImageInput = addImgInput
    addImgInput.addEventListener('change', async () => {
      const file = addImgInput.files && addImgInput.files[0]
      addImgInput.value = ''
      const lt = this._addImageTargetList
      if (!file || !lt) return
      try {
        const dataURL = await this._compressImage(file)
        const id = (crypto.randomUUID ? crypto.randomUUID() : 'img-' + Date.now() + Math.random().toString(36).slice(2))
        this._addImagePending[lt] = { id, dataURL }
        const btn = document.querySelector(`.add-photo-btn[data-list="${lt}"]`)
        if (btn) this._renderAddPhotoBtn(btn, this._addImagePending[lt])
      } catch (e) { console.warn('[Img] Verkleinern fehlgeschlagen:', e && e.message) }
    })

    dash.addEventListener('click', e => {
      const pbtn = e.target.closest('.add-photo-btn')
      if (!pbtn) return
      const lt = pbtn.dataset.list
      if (this._addImagePending[lt]) {
        // schon ein Foto angehängt → antippen entfernt es
        delete this._addImagePending[lt]
        this._renderAddPhotoBtn(pbtn, null)
      } else {
        this._addImageTargetList = lt
        addImgInput.click()
      }
    })

    document.getElementById('modal-backdrop').addEventListener('click', e => {
      if (e.target === e.currentTarget) this.closeEdit()
    })

    document.getElementById('edit-text').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); this.saveEdit() }
    })

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeEdit()
    })

    // ── Share button
    document.getElementById('share-btn')?.addEventListener('click', () => this._copyShareLink())

    document.querySelectorAll('.priority-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.editPriority = btn.dataset.priority
        document.querySelectorAll('.priority-btn').forEach(b =>
          b.classList.toggle('active', b === btn)
        )
      })
    })

    // ── Mobile open/close ──────────────────────────
    window.addEventListener('resize', () => this._applyOpenState())

    // Tap collapsed header → expand; tap chevron of open card → collapse
    dash.addEventListener('click', e => {
      if (window.innerWidth > 640) return
      if (e.target.closest('.card-search, .delete-list-btn, .card-label, .card-grip, .card-icon')) return
      const header = e.target.closest('.card-header')
      if (!header) return
      const card = header.closest('.card')
      if (!card) return
      const lt = card.id.replace('card-', '')
      if (card.classList.contains('collapsed')) {
        this._openLists.add(lt)
        this._applyOpenState()
        this._scrollToCard(lt)
      } else if (e.target.closest('.card-toggle-btn')) {
        this._openLists.delete(lt)
        this._applyOpenState()
      }
    })

    this._initCardDrag()
  }

  // ── Card drag-to-reorder ───────────────────────
  _initCardDrag() {
    const dash = document.getElementById('dashboard')
    let dragLt = null, ghost = null, dropTarget = null, dropProjectId = null

    const cleanup = () => {
      ghost?.remove(); ghost = null
      document.querySelectorAll('.card').forEach(c =>
        c.classList.remove('card-dragging', 'card-drop-above', 'card-drop-below')
      )
      document.querySelectorAll('.project-card').forEach(c => c.classList.remove('project-drop-target'))
      dragLt = null; dropTarget = null; dropProjectId = null
    }

    // el: das Element unter dem Zeiger (noch nicht auf .card/.project-card reduziert)
    const markTarget = (el, clientY) => {
      document.querySelectorAll('.card').forEach(c =>
        c.classList.remove('card-drop-above', 'card-drop-below')
      )
      document.querySelectorAll('.project-card').forEach(c => c.classList.remove('project-drop-target'))
      dropTarget = null; dropProjectId = null

      const projectCard = el?.closest ? el.closest('.project-card') : null
      if (projectCard) {
        projectCard.classList.add('project-drop-target')
        dropProjectId = projectCard.dataset.project
        return
      }

      const card = el?.closest ? el.closest('.card') : null
      if (!card || card.id === `card-${dragLt}`) return
      const above = clientY < card.getBoundingClientRect().top + card.offsetHeight / 2
      card.classList.add(above ? 'card-drop-above' : 'card-drop-below')
      dropTarget = { lt: card.id.replace('card-', ''), above }
    }

    const commitDrop = () => {
      if (dragLt && dropProjectId) this.addListToProject(dragLt, dropProjectId)
      else if (dragLt && dropTarget) this.reorderLists(dragLt, dropTarget.lt, dropTarget.above)
    }

    // ── HTML5 drag (Desktop) ──
    dash.addEventListener('dragstart', e => {
      const grip = e.target.closest('[data-drag-card]')
      if (!grip) return
      dragLt = grip.dataset.dragCard
      document.getElementById(`card-${dragLt}`)?.classList.add('card-dragging')
      e.dataTransfer.effectAllowed = 'move'
    })
    dash.addEventListener('dragover', e => {
      if (!dragLt) return
      e.preventDefault()
      markTarget(e.target, e.clientY)
    })
    dash.addEventListener('drop', e => {
      e.preventDefault()
      commitDrop()
      cleanup()
    })
    dash.addEventListener('dragend', cleanup)

    // ── Touch drag (Mobile) ──
    dash.addEventListener('touchstart', e => {
      const grip = e.target.closest('[data-drag-card]')
      if (!grip) return
      dragLt = grip.dataset.dragCard
      const card = document.getElementById(`card-${dragLt}`)
      card?.classList.add('card-dragging')
      const r = card.getBoundingClientRect()
      ghost = document.createElement('div')
      ghost.className = 'card-ghost'
      ghost.style.cssText = `left:${r.left}px;top:${r.top}px;width:${r.width}px;`
      document.body.appendChild(ghost)
      e.preventDefault()
    }, { passive: false })

    dash.addEventListener('touchmove', e => {
      if (!dragLt) return
      const t = e.touches[0]
      if (ghost) ghost.style.top = (t.clientY - 24) + 'px'
      const el = document.elementFromPoint(t.clientX, t.clientY)
      markTarget(el, t.clientY)
      e.preventDefault()
    }, { passive: false })

    dash.addEventListener('touchend', e => {
      commitDrop()
      cleanup()
    })
  }
}

// ── Boot ───────────────────────────────────────────────────────────────────

window.app = new ListApp()
