const feedbackEls = document.querySelectorAll(".feedback-element");
const feedbackContainerEl = document.querySelector(".feedback-container");
const btnSubmit = document.querySelector(".btn-submit");

let selectedFeedback = "";

const removeActive = () => {
        feedbackEls.forEach((feedbackEl) => {
                feedbackEl.classList.remove("active");
        })
}

feedbackEls.forEach((feedbackEl) => {
        feedbackEl.addEventListener("click", (event) => {
                removeActive();
                selectedFeedback = event.target.innerText || event.target.parentNode.innerText;
                event.target.classList.add("active");
                event.target.parentNode.classList.add("active");
        })
})

btnSubmit.addEventListener("click", () => {
        if (selectedFeedback !== "") {
                feedbackContainerEl.innerHTML = `
                        <h1>Thank You!</h1>
                        <br />
                        <br />
                        <h2>Feedback: <span style="color: #0284c7">${selectedFeedback}</span></h2>
                        <br />
                        <p style="color: #10b981; font-weight: 600;">
                        We will use your feedback to improve our customer support.
                        </p>
                `
        }
});

