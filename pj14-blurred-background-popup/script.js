const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");

button.addEventListener("click", () => {
    container.classList.add("active");
    popupContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    container.classList.remove("active");
    popupContainer.classList.add("active");
})