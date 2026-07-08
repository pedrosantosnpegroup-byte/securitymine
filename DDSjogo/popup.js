document.querySelectorAll(".area").forEach(area => {
    area.style.setProperty("--img", `url('${area.dataset.img}')`);
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}