const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

questionEl.innerText = `What is ${num1} x ${num2}`;

const correctAns = num1 * num2;

const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(score))
};


form.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score += 5;
        updateLocalStorage();
    } else {
        score -= 5;
        updateLocalStorage();
    }
});

scoreEl.innerText = `Score: ${score}`;