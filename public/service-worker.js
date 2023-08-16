const CACHE_NAME = 'receipt-management-system-2RMS';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/asset-manifest.json',
  // Add other URLs of static content to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Cache hit, return response
        }
        
        // Clone the request because it's a one-time-use stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response because it's a one-time-use stream
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache); // Cache the fetched response
              });

            return response;
          });
      })
  );
});
