// Keeps My Talker working without Wi-Fi once it has been opened.
// The page and fonts come from the cache first; board.json is fetched fresh when online.
var CACHE = 'my-talker-v3';
var SHELL = ['./', 'index.html', 'board.json', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function networkFirst(req) {
  // Store under the address without ?v=… so there is only ever one cached copy.
  var key = req.url.split('?')[0];
  return fetch(req).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(key, copy); }); }
    return res;
  }).catch(function () { return caches.match(key); });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // Only this app's own files and its fonts. Never GitHub saves or anything else.
  var fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (url.origin !== self.location.origin && !fonts) return;
  // The page and the board: fresh when online, cached copy when offline.
  if (req.mode === 'navigate' || url.pathname.endsWith('/board.json') || url.pathname.endsWith('/index.html')) {
    e.respondWith(networkFirst(req));
    return;
  }
  // Everything else (icons, fonts): cached copy first.
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
