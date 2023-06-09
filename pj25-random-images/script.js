const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector(".btn");

const addNewImgs = () => {
    for (let i = 0; i < imgNum; i++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        containerEl.appendChild(newImgEl);
    }
}

buttonEl.addEventListener("click", () => {
    imgNum = 5;
    addNewImgs();
})
