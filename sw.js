// ONE ASCEND service worker – caches only the app shell and app files, never user data.
const CACHE = 'one-ascend-c49090ea2b';
// lazily used big parts (3D, vector map, voice): cached on first use under a versioned name
const RUNTIME = 'one-ascend-rt-c49090ea2b';
const LAZY = new RegExp("/(?:pet3d|vmap|maplibre-worker)\\.js$|/voice/[^/]+$|/premium/[^/]+$");
const SHELL = ["./","./audio/silence.mp3","./icons/icon-192.png","./icons/apple-touch-icon.png","./icons/favicon-32.png","./icons/icon-512.png","./fonts/Inter-Medium.woff","./fonts/Inter-Bold.woff","./fonts/InterDisplay-Bold.woff","./fonts/Inter-SemiBold.woff","./fonts/InterDisplay-SemiBold.woff","./fonts/Cinzel-SemiBold.woff","./fonts/Inter-Regular.woff","./art/sternwind-key-512.webp","./art/waldgeist-card-300.webp","./art/scoutdrohne-key-316.webp","./art/nuri-key-480.webp","./art/nuri-card-300.webp","./art/chest-home-147.webp","./art/chest-legendary-147.webp","./art/mechadrache-key-318.webp","./art/own/funkenwolf-key-780.webp","./art/own/sternmantel-card-256.webp","./art/own/glimmling-key-780.webp","./art/own/sternmantel-key-780.webp","./art/own/funkenwolf-card-256.webp","./art/own/kraeuterhorn-key-780.webp","./art/own/glimmling-card-480.webp","./art/own/kraeuterhorn-card-256.webp","./art/own/kraeuterhorn-card-480.webp","./art/own/sternmantel-card-480.webp","./art/own/funkenwolf-card-480.webp","./art/own/glimmling-card-256.webp","./art/panzerling-key-302.webp","./art/hybridfuchs-key-300.webp","./art/sternwind-key-320.webp","./art/nuri-key-320.webp","./art/chest-explorer-147.webp","./art/waldgeist-key-320.webp","./art/waldgeist-key-482.webp","./art/scoutdrohne-card-300.webp","./art/mechadrache-card-300.webp","./art/kristallfuchs-key-142.webp","./art/sternwind-card-300.webp","./manifest.webmanifest","./app.js?v=c49090ea2b","./app.css?v=c49090ea2b","./demos.js?v=c49090ea2b","./recipes.js?v=c49090ea2b"];
self.addEventListener('install', (e) => {
  // first install: take over at once. An update waits until the page asks for it ("Neue Version – jetzt laden",
  // src/ui/update/) – so a running mission never switches to new code underneath.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => (self.registration.active ? undefined : self.skipWaiting())));
});
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('one-ascend-') && k !== CACHE && k !== RUNTIME).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (LAZY.test(url.pathname)) {
          const keep = (p) => e.waitUntil(p.catch(() => undefined));
          if (res.status === 200) {
            const copy = res.clone();
            keep(caches.open(RUNTIME).then((c) => c.put(req, copy)));
          } else if (res.status === 206) {
            // media requests use Range – cache a clean full copy in the background instead
            keep(caches.open(RUNTIME).then((c) => c.add(new Request(req.url))));
          }
        }
        return res;
      });
    }),
  );
});

// ---- ONE ASCEND platform: push notifications (src/platform/sw.ts) ----
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = {}; }
  const n = d.notification || d;
  const title = typeof n.title === 'string' && n.title ? n.title.slice(0, 80) : 'ONE ASCEND';
  const body = typeof n.body === 'string' ? n.body.slice(0, 200) : '';
  let url = './';
  try {
    const u = new URL(n.navigate || './', self.location.href);
    if (u.origin === self.location.origin) url = u.href;
  } catch (_) {}
  e.waitUntil(
    self.registration.showNotification(title, {
      body,
      tag: typeof n.tag === 'string' ? n.tag : 'one-ascend',
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      data: { url },
    }),
  );
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (new URL(c.url).origin === self.location.origin && 'focus' in c) {
          return c.focus().then((w) => (w && 'navigate' in w ? w.navigate(url) : w)).catch(() => undefined);
        }
      }
      return self.clients.openWindow(url);
    }),
  );
});
