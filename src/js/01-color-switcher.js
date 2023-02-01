const changeBodyStyle = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
let isActive = false;

btnStart.addEventListener('click', onclickStart);
btnStop.addEventListener('click', onclickStop);

function onclickStart() {
  start();
}

function onclickStop() {
  clearInterval(timerId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function start() {
  if (isActive) {
    return;
  }

  isActive = true;
  timerId = setInterval(() => {
    changeBodyStyle.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
