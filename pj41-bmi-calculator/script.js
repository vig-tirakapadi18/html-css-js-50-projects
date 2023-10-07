const btn = document.querySelector(".btn");

const calculateBMI = () => {
        const heightVal = document.getElementById("height").value / 100;
        const weightVal = document.getElementById("weight").value;
        const bmiInput = document.getElementById("bmi");
        const weightConditionEl = document.getElementById("weight-condition");

        const bmiVal = weightVal / (heightVal * heightVal);

        bmiInput.value = bmiVal;

        if (bmiVal > 0 && bmiVal <= 18.5) {
                weightConditionEl.innerText = "UNDERWEIGHT!"
        } else if (bmiVal > 18.5 && bmiVal <= 24.9) {
                weightConditionEl.innerText = "HEALTHY WEIGHT!"
        } else if (bmiVal > 25.0 && bmiVal <= 29.9) {
                weightConditionEl.innerText = "OVERWEIGHT!"
        } else if (bmiVal >= 30) {
                weightConditionEl.innerText = "OBESE!"
        }
};

btn.addEventListener('click', calculateBMI)