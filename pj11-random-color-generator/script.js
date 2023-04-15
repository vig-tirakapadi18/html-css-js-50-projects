const container = document.querySelector(".container");

for (let i = 0; i <= 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainerAll = document.querySelectorAll(".color-container");

const generateColors = () => {
    colorContainerAll.forEach(colorContainer => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = `#${newColorCode}`;
        colorContainer.innerText = `#${newColorCode}`
    });
};

const randomColor = () => {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

generateColors();

