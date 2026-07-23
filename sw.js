// Al-Hiwar Service Worker v22.0
const CACHE_NAME = 'al-hiwar-v22';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './ustadz_avatar.jpg',
  './data/data-loader.js',
  './data/theme-taaruf.js',
  './data/theme-matham.js',
  './data/theme-madrasah.js',
  './data/theme-suq.js',
  './data/theme-usrah.js',
  './data/theme-mathar.js',
  './data/theme-hiwayah.js',
  './data/theme-mustasyfa.js',
  './data/dictionary.js',
  './data/nahwu.js',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Outfit:wght@300;400;500;600;700;800&display=swap',
  'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
];

// Install - cache all essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app assets...');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Some assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch - serve from cache first, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and API calls
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('generativelanguage.googleapis.com')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache successful responses for future
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for HTML pages
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
