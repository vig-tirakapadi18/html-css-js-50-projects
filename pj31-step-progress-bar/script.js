const nextBtnEl = document.getElementById("next");
const prevBtnEl = document.getElementById("prev");
const stepEls = document.querySelectorAll(".step");
const progressBarEl = document.querySelector(".progress-bar-front");

let currChecked = 1;

const updateStepProgress = () => {
    stepEls.forEach((stepEl, idx) => {
        if (idx < currChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <small>${idx === 0 ? "Start" : idx === stepEls.length - 1 ? "Final" : "Step " + idx}</small>
            `;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
                <i class="fa-solid fa-xmark"></i>
            `;
        }
    })

    const checkedNum = document.querySelectorAll(".checked");

    progressBarEl.style.width = ((checkedNum.length - 1) / (stepEls.length - 1)) * 100 + "%";

    if (currChecked === 1) {
        prevBtnEl.disabled = true;
    } else if (currChecked === stepEls.length) {
        nextBtnEl.disabled = true;
    } else {
        prevBtnEl.disabled = false;
        nextBtnEl.disabled = false;
    }
}

nextBtnEl.addEventListener("click", () => {
    currChecked++;
    if (currChecked > stepEls.length) {
        currChecked = stepEls.length;
    }
    updateStepProgress();
});

prevBtnEl.addEventListener("click", () => {
    currChecked--;
    if (currChecked < 1) {
        currChecked = 1;
    }
    updateStepProgress();
});