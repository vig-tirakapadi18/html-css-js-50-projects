const buttonEls = document.querySelectorAll("button");
const resultInputEl = document.getElementById("result");

const clearResult = () => {
        resultInputEl.value = "";
};

const calculateResult = () => {
        resultInputEl.value = eval(resultInputEl.value);
};

const appendValue = (buttonValue) => {
        resultInputEl.value += buttonValue;
};

for (let i = 0; i < buttonEls.length; i++) {
        buttonEls[i].addEventListener("click", () => {
                const buttonValue = buttonEls[i].textContent;
                if (buttonValue === "C") {
                        clearResult();
                } else if (buttonValue === "=") {
                        calculateResult();
                } else {
                        appendValue(buttonValue);
                }
        })
}