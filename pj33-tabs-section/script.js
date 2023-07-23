const tabEls = document.querySelector(".tabs");
const btnEls = document.querySelectorAll(".btn");
const articleEls = document.querySelectorAll(".content");

tabEls.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if (id) {
        btnEls.forEach((btnEl) => {
            btnEl.classList.remove("live");
        });
        event.target.classList.add("live");
        articleEls.forEach((articleEl) => {
            articleEl.classList.remove("live");
        });
        const el = document.getElementById(id);
        el.classList.add("live");
    }
})