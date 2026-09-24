/**
 * Nur al-Usul service worker — conservative offline shell.
 * Strategy:
 *  - Navigations: network-first → cache fallback → /offline.html
 *  - Static assets (/icons/*, /manifest.webmanifest, /offline.html, fonts):
 *    cache-first with background revalidation
 *  - /_next/* assets: network-first with cache fallback (dev-safe, HMR safe)
 *  - /api/*: network-only; on failure a JSON 503 (call surfaces the error UI)
 *  - HMR/websocket traffic is never intercepted (non-GET or ws).
 */

const VERSION = "nur-al-usul-v1";
const STATIC_CACHE = `${VERSION}-static`;
const PAGE_CACHE = `${VERSION}-pages`;

const PRECACHE = [
  "/offline.html",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/manifest.webmanifest" ||
    url.pathname === "/offline.html" ||
    /\.(png|jpg|jpeg|webp|svg|ico|woff2?|ttf)$/.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes("hmr") || url.pathname.startsWith("/_next/webpack-hmr")) return;

  // API: network-only, JSON error when offline
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(req).catch(
        () =>
          new Response(JSON.stringify({ error: "You are offline — this action needs a connection." }), {
            status: 503,
            headers: { "Content-Type": "application/json" },
          })
      )
    );
    return;
  }

  // Page navigations: network-first → page cache → offline shell
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(PAGE_CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          const shell = await caches.match("/offline.html");
          return (
            shell ||
            new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } })
          );
        })
    );
    return;
  }

  // Icons/manifest/fonts: cache-first with background refresh
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(req, copy));
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Everything else (incl. /_next/*): network-first with cache fallback
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok && url.pathname.startsWith("/_next/")) {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(async () => (await caches.match(req)) || Response.error())
  );
});
