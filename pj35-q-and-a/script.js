const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    const questionBtn = question.querySelector(".question-btn");
    questionBtn.addEventListener("click", () => {
        question.classList.toggle("show");
    })
})