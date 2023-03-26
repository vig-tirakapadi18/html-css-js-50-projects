const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const newYearTime = new Date("Jan 01, 2024 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remainingDays = Math.floor(gap / day);
  const remainingHours = Math.floor((gap % day) / hour);
  const remainingMinutes = Math.floor((gap % hour) / minute);
  const remainingSeconds = Math.floor((gap % minute) / second);

  const d = remainingDays < 10 ? `0${+remainingDays}` : remainingDays;
  const h = remainingHours < 10 ? `0${+remainingHours}` : remainingHours;
  const m = remainingMinutes < 10 ? `0${+remainingMinutes}` : remainingMinutes;
  const s = remainingSeconds < 10 ? `0${+remainingSeconds}` : remainingSeconds;

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  // setInterval(() => {
  //   updateCountdown();
  // }, 1000);
  setTimeout(updateCountdown, 1000);
};

updateCountdown();