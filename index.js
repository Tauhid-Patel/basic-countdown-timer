const startTime = 10;
let time = startTime * 60;

const countdown = document.querySelector('#countdown');

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time/60);

    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}