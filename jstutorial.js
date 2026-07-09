const zoom = document.getElementById("zoom");

document.querySelectorAll(".area").forEach(area => {

    area.addEventListener("mouseenter", () => {

        zoom.style.backgroundImage = area.style.getPropertyValue("--img");
        zoom.style.opacity = "1";
        zoom.style.visibility = "visible";

    });

    area.addEventListener("mouseleave", () => {

        zoom.style.opacity = "0";
        zoom.style.visibility = "hidden";

    });

    area.addEventListener("mousemove", e => {

        const rect = area.getBoundingClientRect();

        // posição do mouse dentro da área
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // posição da janela de zoom
        zoom.style.left = (rect.right + 20) + "px";
        zoom.style.top = rect.top + "px";

        // move a imagem ampliada
        zoom.style.backgroundPosition = `${x}% ${y}%`;

    });

});