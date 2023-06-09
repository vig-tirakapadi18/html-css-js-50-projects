const counterEls = document.querySelectorAll('.counter');

counterEls.forEach((counterEl) => {
    counterEl.innerText = "0";
    const incrementCount = () => {
        let currCount = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currCount = Math.ceil(currCount + increment);
        counterEl.innerText = currCount;

        if (currCount < dataCeil) {
            counterEl.innerText = currCount;
            setTimeout(incrementCount, 50)
        } else {
            counterEl.innerText = dataCeil;
        }
    };
    incrementCount();
})