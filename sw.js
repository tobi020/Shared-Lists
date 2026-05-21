const CACHE = 'shared-lists-v3'
// Nur statische Assets cachen; JS/CSS immer vom Netz (sofortige Updates)
const STATIC = ['./', './index.html', './manifest.json']
const NO_CACHE = ['/app.js', '/style.css', '/firebase-config.js']

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)))
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ))
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  const url = new URL(e.request.url)
  // JS/CSS immer vom Netz holen
  if (NO_CACHE.some(p => url.pathname.endsWith(p))) {
    e.respondWith(fetch(e.request))
    return
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})
