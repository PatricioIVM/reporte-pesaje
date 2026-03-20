// Service worker sin caché — siempre va a la red
self.addEventListener("fetch", function(e) {
  e.respondWith(fetch(e.request));
});
