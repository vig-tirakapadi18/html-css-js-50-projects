const inputEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");

inputEl.checked = localStorage.getItem("mode");

const updateBody = () => {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

const updateLocalStorage = () => {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
};

updateBody();