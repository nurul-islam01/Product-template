/* eslint-disable func-names */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
// Set this to true for production
const doCache = true;

// Name our cache
const CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log(`Deleting cache: ${key}`);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', (event) => {
  if (doCache) {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => {
          // Get the assets manifest so we can see what our js file is named
          // This is because webpack hashes it
          fetch('/asset-manifest.json')
            .then((response) => {
              response.json();
            })
            // eslint-disable-next-line no-unused-vars
            .then((assets) => {
              // Open a cache and cache our files
              // We want to cache the page and the main.js generated by webpack
              // We could also cache any static assets like CSS or images
              const urlsToCache = ['/'];
              cache.addAll(urlsToCache);
              console.log('cached');
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
    );
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', (event) => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
