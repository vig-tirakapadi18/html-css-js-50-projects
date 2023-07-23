const barsBtn = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".fa-xmark");

barsBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})