const textareaEl = document.getElementById("textarea");
const totalCharsEl = document.getElementById("total-chars");
const remainingCharsEl = document.getElementById("remaining-chars");

const updateCounter = () => {
    totalCharsEl.innerText = textareaEl.value.length;
    remainingCharsEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
};

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});