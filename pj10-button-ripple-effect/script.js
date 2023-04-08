const button = document.querySelector(".btn");

const addRippleEffect = event => {
    const x = (event.pageX - button.offsetLeft);
    const y = (event.pageY - button.offsetTop);

    button.style.setProperty("--xPos", x + "px");
    button.style.setProperty("--yPos", y + "px");
}

button.addEventListener("mouseover", addRippleEffect);