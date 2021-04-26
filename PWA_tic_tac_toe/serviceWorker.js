const staticGame = "tic-tac-toe-site"
const assets = [
  "/",
  "/index.html",
  "/images/Tic_circle.png",
  "/images/Tic_X.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGame).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })