const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let lists = JSON.parse(localStorage.getItem("list"));

if (lists) {
    lists.forEach(task => {
        toDoList(task);
    })
}

function toDoList(task) {
    let newTask = inputEl.value;

    if (task) {
        newTask = task.name;
    }

    const liEl = document.createElement("li");


    if (task && task.checked) {
        liEl.classList.add("checked");
    }

    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check">`;
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
}

function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    lists = [];
    liEls.forEach(liEl => {
        lists.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    })

    localStorage.setItem("lists", JSON.stringify(lists));
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})



