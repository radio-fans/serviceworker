self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
});
