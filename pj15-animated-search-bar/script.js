const container = document.querySelector(".container");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    container.classList.toggle("active");
})