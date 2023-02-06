const changeBodyStyle = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
btnStop.disabled = true;

btnStart.addEventListener('click', onclickStart);
btnStop.addEventListener('click', onclickStop);

function onclickStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    changeBodyStyle.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onclickStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
