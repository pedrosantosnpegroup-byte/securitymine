document.querySelectorAll(".area").forEach(area => {
    area.style.setProperty("--img", `url('${area.dataset.img}')`);
});
