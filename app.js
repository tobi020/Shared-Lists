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
}

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
const STORAGE_KEY = 'claude-list-app-v1'
const FIRESTORE_COLLECTION = 'rooms'

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

// ── App ────────────────────────────────────────────────────────────────────

class ListApp {
  constructor() {
    this._db           = window._firestoreDb              || null
    this._docFn        = window._firestoreDoc             || null
    this._setDocFn     = window._firestoreSetDoc          || null
    this._onSnapshotFn = window._firestoreOnSnapshot      || null
    this._serverTsFn   = window._firestoreServerTimestamp || null
    this._syncEnabled  = !!(this._db)
    this._clientId     = _getClientId()
    this._roomId       = null

    const state      = this._loadState()
    this.lists       = state.lists
    this.listTypes   = state.listTypes
    this.listNames   = state.listNames
    this.globalSearch = ''
    this.dragging    = null
    this.dropTarget  = null
    this.editing      = null
    this.editPriority = 'low'
    this._accordionOpen = null  // Track which card is open on mobile
    this._init()
  }

  // ── State persistence ──────────────────────────

  _defaultLists() {
    return { todo: [], kochliste: [], watchlist: [], 'date-ideen': [] }
  }

  _loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return { lists: this._defaultLists(), listTypes: [...LIST_TYPES], listNames: {} }
      const parsed = JSON.parse(raw)
      // New format: { listTypes, listNames, lists }
      if (parsed.lists && typeof parsed.lists === 'object' && !Array.isArray(parsed.lists)) {
        const listTypes = Array.isArray(parsed.listTypes) ? parsed.listTypes : [...LIST_TYPES]
        const listNames = (parsed.listNames && typeof parsed.listNames === 'object') ? parsed.listNames : {}
        const lists = {}
        for (const lt of listTypes) {
          lists[lt] = Array.isArray(parsed.lists[lt]) ? parsed.lists[lt] : []
        }
        return { lists, listTypes, listNames }
      }
      // Old format: { todo: [...], kochliste: [...], ... } — migrate transparently
      const lists = this._defaultLists()
      for (const lt of LIST_TYPES) {
        if (Array.isArray(parsed[lt])) lists[lt] = parsed[lt]
      }
      return { lists, listTypes: [...LIST_TYPES], listNames: {} }
    } catch {
      return { lists: this._defaultLists(), listTypes: [...LIST_TYPES], listNames: {} }
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        listTypes: this.listTypes,
        listNames: this.listNames,
        lists: this.lists,
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
      lists: this.lists,
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
      roomId = crypto.randomUUID()
      _setRoomIdInUrl(roomId)
      this._roomId = roomId
      this._pushToFirestore()
    } else {
      this._roomId = roomId
    }

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
    const lists = {}
    for (const lt of this.listTypes) {
      lists[lt] = Array.isArray(data.lists[lt]) ? data.lists[lt] : []
    }
    this.lists = lists
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        listTypes: this.listTypes,
        listNames: this.listNames,
        lists: this.lists,
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
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg> Kopiert!`
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
    }
  }

  // ── CRUD ───────────────────────────────────────

  addItem(listType, text, priority = 'low') {
    if (!text.trim()) return
    this.lists[listType].push(this._newItem(text, priority, listType))
    this._save()
    this._renderList(listType)
    this._updateCount(listType)
  }

  toggleItem(listType, id) {
    const item = this.lists[listType].find(i => i.id === id)
    if (!item) return
    item.completed = !item.completed
    this._save()
    this._renderList(listType)
    this._updateCount(listType)
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

  renameList(lt, name) {
    this.listNames[lt] = name
    this._save()
  }

  addList(name) {
    const key = 'list-' + Date.now()
    this.listTypes.push(key)
    this.listNames[key] = name
    this.lists[key] = []
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
      this._save()
      this._renderAll()
    })
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

  _applyAccordion() {
    if (window.innerWidth > 640) return
    const open = this._accordionOpen && this.listTypes.includes(this._accordionOpen)
      ? this._accordionOpen
      : this.listTypes[0]
    this._accordionOpen = open
    this.listTypes.forEach(t => {
      document.getElementById(`card-${t}`)?.classList.toggle('collapsed', t !== open)
    })
  }

  _renderAll() {
    document.getElementById('dashboard').innerHTML =
      this.listTypes.map(lt => this._cardHTML(lt)).join('')
    this.listTypes.forEach(lt => { this._renderList(lt); this._updateCount(lt) })
    this._applyAccordion()
    document.querySelectorAll('.priority-select').forEach(s => this._syncSelectColor(s))
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

  _cardHTML(lt) {
    const cfg = this._getConfig(lt)
    const icon = ICONS[lt] || ICONS.list
    const canDelete = this.listTypes.length > 1
    return `
<div class="card" id="card-${lt}">
  <div class="card-header">
    <div class="card-title-row">
      <div class="card-title">
        <div class="card-icon">${icon}</div>
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

    if (items.length === 0) {
      const cfg = this._getConfig(listType)
      el.innerHTML = `<div class="empty-state">${ICONS.empty}<p>${searchActive ? cfg.emptySearchText : cfg.emptyText}</p></div>`
    } else {
      el.innerHTML = items.map(item => this._itemHTML(item, searchActive)).join('')
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
    this.updateItem(this.editing.listType, this.editing.id, {
      text, priority: this.editPriority, tags, notes,
    })
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

  // ── Init & Event Binding ───────────────────────

  _init() {
    this._renderAll()
    this._initFirebase()

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
    const addBackdrop = document.getElementById('add-list-backdrop')
    const addInput    = document.getElementById('add-list-name')

    const openAddModal = () => {
      addInput.value = ''
      addBackdrop.classList.add('open')
      setTimeout(() => addInput.focus(), 60)
    }
    const closeAddModal = () => {
      addBackdrop.classList.remove('open')
    }
    const confirmAdd = () => {
      const name = addInput.value.trim()
      if (!name) { addInput.focus(); return }
      this.addList(name)
      closeAddModal()
    }

    document.getElementById('add-list-btn')    .addEventListener('click', () => openAddModal())
    document.getElementById('add-list-close')  .addEventListener('click', () => closeAddModal())
    document.getElementById('add-list-cancel') .addEventListener('click', () => closeAddModal())
    document.getElementById('add-list-confirm').addEventListener('click', () => confirmAdd())
    addBackdrop.addEventListener('click', e => { if (e.target === e.currentTarget) closeAddModal() })
    addInput.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); confirmAdd() }
      if (e.key === 'Escape') { e.preventDefault(); closeAddModal() }
    })

    // ── Modal
    document.getElementById('modal-close') .addEventListener('click', () => this.closeEdit())
    document.getElementById('modal-cancel').addEventListener('click', () => this.closeEdit())
    document.getElementById('modal-save')  .addEventListener('click', () => this.saveEdit())

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

    // ── Mobile Accordion ───────────────────────────
    window.addEventListener('resize', () => this._applyAccordion())

    // Click card header to expand collapsed card, or collapse open card via toggle-btn
    dash.addEventListener('click', e => {
      if (window.innerWidth > 640) return
      if (e.target.closest('.card-search, .delete-list-btn, .card-label')) return
      const header = e.target.closest('.card-header')
      if (!header) return
      const card = header.closest('.card')
      if (!card) return
      const lt = card.id.replace('card-', '')
      if (card.classList.contains('collapsed')) {
        this._accordionOpen = lt
        this._applyAccordion()
      } else if (e.target.closest('.card-toggle-btn')) {
        // collapse the open card by cycling to next list
        const others = this.listTypes.filter(t => t !== lt)
        this._accordionOpen = others[0] || lt
        this._applyAccordion()
      }
    })
  }
}

// ── Boot ───────────────────────────────────────────────────────────────────

new ListApp()
