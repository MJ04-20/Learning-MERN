const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elaspsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hr = 0;
let sec = 0;
let min = 0;
startBtn.addEventListener("click", () => {
    if (paused == true) {
        paused = false;
        startTime = Date.now() - elaspsedTime;
        intervalId = setInterval(updateTime, 100);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elaspsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elaspsedTime = 0;
    currentTime = 0;
    hr = 0;
    sec = 0;
    min = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime() {
    elaspsedTime = Date.now() - startTime;
    sec = Math.floor((elaspsedTime / 1000) % 60);
    min = Math.floor((elaspsedTime / (1000 * 60)) % 60);
    hr = Math.floor((elaspsedTime / (1000 * 60 * 60)) % 60);
    sec = pad(sec);
    min = pad(min);
    hr = pad(hr);
    timeDisplay.textContent = `${hr}:${min}:${sec}`;

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
