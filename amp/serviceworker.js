self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/assets/background.jpeg',
        '/assets/prantar.png',
        '/assets/Prantar-Resume.pdf',
        '/amp/*'
      ]);
    })
  );
});
