const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

const updateTimer = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        const formattedTime = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        timerEl.innerHTML = formattedTime;
};

const startTimer = () => {
        interval = setInterval(() => {
                timeLeft--;
                updateTimer();
                if (timeLeft === 0) {
                        clearInterval(interval);
                        alert("Time for rest!🎊");
                        timeLeft = 1500;
                        updateTimer();
                }
        }, 1000);
};

const stopTimer = () => {
        clearInterval(interval);
};

const resetTimer = () => {
        clearInterval(interval);
        timeLeft = 1500;
        updateTimer();
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);