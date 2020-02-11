const CACHE_STATIC_NAME = "cache-static-v1";
const urlsToCache = [
  "/",
  "/bundle.js",
  "/index.html",
  "/main.css",
  "/manifest.json",
  "/assets/icons/144.png",
  "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap"
];

const cacheAppShell = async () => {
  const cache = await caches.open(CACHE_STATIC_NAME);
  return cache.addAll(urlsToCache);
};

const handleRequest = async request => {
  const pathname = new URL(request.url).pathname;

  switch (pathname) {
    case urlsToCache.includes(pathname) && pathname:
      const cache = await caches.open(CACHE_STATIC_NAME);
      return cache.match(request);
    default:
      return fetch(request);
  }
};

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(cacheAppShell());

  console.log("SW installed!");
});

self.addEventListener("activate", e => {
  console.log("SW activated!");
});

self.addEventListener("fetch", e => {
  e.respondWith(handleRequest(e.request));
});
