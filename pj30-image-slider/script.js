const arrowNextEl = document.querySelector(".arrow-next");
const arrowPrevEl = document.querySelector(".arrow-prev");
const imgContainerEl = document.querySelector(".img-container");
const imgsEl = document.querySelectorAll("img");

let currImg = 1;
let sliderTimer;

const updateImg = () => {
    if (currImg > imgsEl.length) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = imgsEl.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currImg - 1) * 500}px)`;

    sliderTimer = setTimeout(() => {
        currImg++;
        updateImg();
    }, 2000);
}

arrowNextEl.addEventListener("click", () => {
    currImg++;
    clearTimeout(sliderTimer);
    updateImg();
});

arrowPrevEl.addEventListener("click", () => {
    currImg--;
    clearTimeout(sliderTimer);
    updateImg();
})

updateImg();