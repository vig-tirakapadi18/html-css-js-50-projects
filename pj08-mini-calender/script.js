const monthEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthEl.innerText = date.toLocaleString('en', {
    month: "long"
});

const dayName = date.getDay();
dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
});

const todayDate = date.getDate();

const dateCheck = todayDate < 10 ? `0${todayDate}` : todayDate;

dayNumberEl.innerText = dateCheck;

yearEl.innerText = date.getFullYear();
