const CACHE = "securitymine-v1";

const arquivos = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js"
];

self.addEventListener("install", event=>{
    event.waitUntil(
        caches.open(CACHE).then(cache=>cache.addAll(arquivos))
    );
});

self.addEventListener("fetch", event=>{
    event.respondWith(
        caches.match(event.request).then(resposta=>{
            return resposta || fetch(event.request);
        })
    );
});