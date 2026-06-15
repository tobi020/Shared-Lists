// Network-only Service Worker — kein Caching, immer frische Dateien
// (verhindert Probleme mit veralteten JS/CSS-Versionen nach Updates)

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', e => {
  // Alle alten Caches löschen
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))))
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  e.respondWith(fetch(e.request))
})

// ── Web-Push ──────────────────────────────────────────────────────────────
// Zeigt eine Mitteilung an, wenn ein Push vom Server eintrifft (auch wenn die
// App geschlossen ist).
self.addEventListener('push', (event) => {
  let data = {}
  try { data = event.data ? event.data.json() : {} } catch { /* ignore */ }
  const title = data.title || 'Holz&Stein'
  const options = {
    body: data.body || '',
    tag: data.tag || 'holz-stein',
    renotify: true,
    data: { url: data.url || '/' },
    vibrate: [60, 40, 60],
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

// Tippt man auf die Mitteilung → App in den Vordergrund holen (oder öffnen).
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const target = (event.notification.data && event.notification.data.url) || '/'
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      for (const win of wins) {
        if ('focus' in win) { win.focus(); return }
      }
      if (clients.openWindow) return clients.openWindow(target)
    })
  )
})
