self.addEventListener('install', async () => {
 const cache = await caches.open('ksHuLyC9');
 try {
  const addAll = await cache.addAll(['/', 'index.html']);
  console.log('Cached');
 } catch (e) {
  console.log('Error');
 }
})