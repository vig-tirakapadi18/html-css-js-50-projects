const bgImageEl = document.getElementById("bg-image");

const updateImage = () => {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 25 + "%";
}

window.addEventListener("scroll", () => {
    updateImage();
})