var CACHE = "reporte-pesaje-v1";
var FILES = ["https://patricioivm.github.io/reporte-pesaje/", "https://patricioivm.github.io/reporte-pesaje/index.html", "https://patricioivm.github.io/reporte-pesaje/manifest.json"];

self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(FILES); }));
});

self.addEventListener("fetch", function(e) {
  e.respondWith(caches.match(e.request).then(function(r) {
    return r || fetch(e.request);
  }));
});
