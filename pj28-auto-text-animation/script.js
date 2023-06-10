const containerEl = document.querySelector(".container");

const careers = ["Full-stack Developer", "Frontend Developer", "Backend Developer", "ReactJs Developer"];

let careerIndex = 0;

let charIndex = 0;

const updateText = () => {
    charIndex++;
    containerEl.innerHTML = `
        <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} <span>${careers[careerIndex].slice(0, charIndex)}!!!</span></h1>
    `;

    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 100);
};

updateText();
