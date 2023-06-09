const containerEl = document.querySelector(".container");
const xPosEl = document.querySelector(".xPos");
const yPosEl = document.querySelector(".yPos");

window.addEventListener("mousemove", (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    xPosEl.innerText = clientX;
    yPosEl.innerText = clientY;
})

