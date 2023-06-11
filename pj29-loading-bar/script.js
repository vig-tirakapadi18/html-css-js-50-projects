const counterEl = document.querySelector(".counter");
const frontBarEl = document.querySelector(".loading-bar-front");

let idx = 0;

const updateNum = () => {
    counterEl.innerText = idx + "%";
    frontBarEl.style.width = idx + "%";
    idx++;
    if (idx <= 100) {
        setTimeout(updateNum, 50)
    }
}

updateNum();