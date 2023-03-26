const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const msEl = document.getElementById('ms')
const ampmEl = document.getElementById('ampm');

const updateClock = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ms = new Date().getMilliseconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? `0${+h}` : h;
  m = m < 10 ? `0${+m}` : m;
  s = s < 10 ? `0${+s}` : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  msEl.innerText = ms;

  setTimeout(() => {
    updateClock();
  }, 1);
};

updateClock();