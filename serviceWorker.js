self.addEventListener("install", e => {
  console.log("SW installed!");
});

self.addEventListener("activate", e => {
  console.log("SW activated!");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
