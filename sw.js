self.addEventListener('fetch', async function(e) {
 const r = await caches.match(e.request);
 e.respondWith(r || fetch(e.request));
});
