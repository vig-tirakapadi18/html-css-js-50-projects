const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

const updateRate = async () => {
        try {
                const result = await fetch(`https://v6.exchangerate-api.com/v6/3a88c3500312ed90fd58b022/latest/${currencyFirstEl.value}`).then(resp => resp.json());

                const rate = result.conversion_rates[currencySecondEl.value];

                const convertToSecondWorth = (worthFirstEl.value * rate).toFixed(3)

                exchangeRateEl.innerText = `${worthFirstEl.value} ${currencyFirstEl.value} = ${convertToSecondWorth} ${currencySecondEl.value}`

                worthSecondEl.value = convertToSecondWorth;
        } catch (error) {
                exchangeRateEl.style.color = "red";
                exchangeRateEl.innerText = "Error! Please try again later."
        }
}

updateRate();

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);