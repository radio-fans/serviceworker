self.addEventListener('fetch', async function(event) {
  event.respondWith(
    const response = await caches.match(event.request);
    return response || fetch(event.request);
  );
});
