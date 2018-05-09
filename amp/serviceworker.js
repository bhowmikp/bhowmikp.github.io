self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      console.log("Created serviceworker");
      return cache.addAll([
        '/favicon.ico',
        '/assets/background.jpeg'
      ]);
    })
  );
});
