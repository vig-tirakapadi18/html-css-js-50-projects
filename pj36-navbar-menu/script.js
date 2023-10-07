const bar = document.querySelector(".fa-bars-staggered")
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
})