const timerEl = document.querySelector(".timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const setButton = (startBtnValue, stopBtnValue) => {
        startBtn.disabled = startBtnValue;
        stopBtn.disabled = stopBtnValue;
}

const formatTime = (elapsedTime) => {
        const ms = Math.floor((elapsedTime % 1000) / 10);
        const secs = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const hrs = Math.floor(elapsedTime / (1000 * 60 * 60));

        return (
                (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (secs ? (secs > 9 ? secs : "0" + secs) : "00") + "." + (ms ? (ms > 9 ? ms : "0" + ms) : "00")
        )
}

const startTimer = () => {
        startTime = Date.now() - elapsedTime;
        console.log(startTime)

        timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                timerEl.textContent = formatTime(elapsedTime);
        }, 10)

        setButton(true, false);
};
const stopTimer = () => {
        clearInterval(timerInterval);
        setButton(false, true);
};
const resetTimer = () => {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timerEl.textContent = "00:00:00";

        setButton(false, true);
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);