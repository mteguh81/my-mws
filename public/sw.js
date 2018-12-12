const staticCacheName = 'my-mws-static-006';

// list of assets to cache on install
// cache each my-mws detail page as well
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll([
                '/index.html',
                '/project1/calculator.html',
                '/project2/peta.html',
                '/project3/fetch-json.html',
                '/css/main.css',
                '/css/responsive.css',
                '/project1/css/calculator.css',
                '/project2/css/peta.css',
                '/project3/css/peta.css',
                '/js/custom.js',
                '/js/register_sw.js',
                '/project1/js/calculator.js',
                '/project2/js/peta.js',
                '/project3/js/peta.js',
                '/images/fixed/offline_img1.png',
                '/images/logo-gdk.png',
                '/images/mws_logo.jpeg',
                '/project3/images/anomali-coffee-menteng.jpeg',
                '/project3/images/logo-7langit.jpg',
                '/project3/images/starbucks-coffee-menteng.jpg',
            ]).catch(error => {
                console.log('Caches open failed: ' + error);
            });
        })
    );
});


// intercept all requests
// either return cached asset or fetch from network
self.addEventListener('fetch', event => {
    event.respondWith(
        // Add cache.put to cache images on each fetch
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(staticCacheName).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(error => {
            if (event.request.url.includes('.jpg')) {
                return caches.match('/images/fixed/offline_img1.png');
            }
            // if (event.request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
            //   return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><title id="offline-title">Offline</title><path fill="rgba(145,145,145,0.5)" d="M0 0h400v225H0z" /><text fill="rgba(0,0,0,0.33)" font-family="Helvetica Neue,Arial,sans-serif" font-size="27" text-anchor="middle" x="200" y="113" dominant-baseline="central">offline</text></svg>', {headers: {'Content-Type': 'image/svg+xml'}});
            // }
            return new Response('Not connected to the internet', {
                status: 404,
                statusText: "Not connected to the internet"
            });
        })
    );
});

// delete old/unused static caches
self.addEventListener('activate', event => {
    event.waitUntil(
        // caches.delete('-my-mws-static-001')
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('my-mws-static-') && cacheName !== staticCacheName;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});