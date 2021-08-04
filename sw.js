self.addEventListener('fetch', async function(e) {
	caches.match(e.request).then(r => e.respondWith(r || fetch(e.request)));
});
