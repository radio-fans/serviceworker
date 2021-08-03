self.addEventListener('install', async () => {
 self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
 });
})
