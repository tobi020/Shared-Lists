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
