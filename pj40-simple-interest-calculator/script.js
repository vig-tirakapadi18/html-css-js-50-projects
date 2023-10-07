const btn = document.querySelector(".btn");

const calculateLoan = () => {
        const loanAmountVal = document.getElementById("loan-amount").value;
        const rateVal = document.getElementById("rate").value;
        const monthsVal = document.getElementById("months").value;
        const monthlyPaymentEl = document.getElementById("payment");

        const interest = (loanAmountVal * (rateVal * 0.01)) / monthsVal;
        const monthlyPayment = (loanAmountVal * monthsVal + interest).toFixed(2);

        monthlyPaymentEl.innerText = `${monthlyPayment} Rs`;
}

btn.addEventListener("click", calculateLoan);