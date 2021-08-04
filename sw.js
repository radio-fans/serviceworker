self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
});
