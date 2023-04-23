const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social-lists");
const listEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

listEls.forEach(listEl => {
    listEl.addEventListener("click", () => {
        menuTextEl.innerHTML = listEl.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})