self.addEventListener('fetch', function(event) {
	event.respondWith(
		async function() {
			const response = await caches.match(event.request);
			return response || fetch(event.request);
		});
});
