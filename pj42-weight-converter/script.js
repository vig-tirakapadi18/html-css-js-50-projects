const poundsInput = document.querySelector(".pounds-input");
const spanEl = document.querySelector("span");
const errorMessage = document.querySelector(".error-message");
let errorTime;

const updateWeight = () => {
        const poundsValue = poundsInput.value;

        if (poundsValue <= 0 || isNaN(poundsValue)) {
                errorMessage.innerText = "Please enter a valid number!"
                clearTimeout(errorTime);
                errorTime = setTimeout(() => {
                        errorMessage.innerText = "";
                        poundsInput.value = "";
                }, 2000)
        } else {
                const kgValue = (poundsValue * 0.453).toFixed(3);
                spanEl.innerText = kgValue;
        }
}

poundsInput.addEventListener("input", updateWeight);