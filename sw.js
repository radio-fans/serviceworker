addEventListener('install', event => {
	const preCache = async () => {
		const cache = await caches.open('radiofansreceptorcache');
		return cache.addAll([
			'',
			'logo.png'
		]);
	};
	event.waitUntil(preCache());
});

self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
});
