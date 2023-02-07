import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

let timerId = null;
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', onClickStartBtn);
    }
  },
};

flatpickr(inputEl, options);

function onClickStartBtn() {
  startBtn.disabled = true;
  inputEl.disabled = true;

  if (startBtn.disabled) {
    timerId = setInterval(countTimeToTargetDate, 1000);
  }
}

function countTimeToTargetDate() {
  const currentDate = Date.now();
  const diff = selectedDate - currentDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const spanDays = document.querySelector('.value[data-days]');
  const spanHours = document.querySelector('.value[data-hours]');
  const spanMinutes = document.querySelector('.value[data-minutes]');
  const spanSeconds = document.querySelector('.value[data-seconds]');

  if (diff > 0) {
    spanDays.textContent = addLeadingZero(days);
    spanHours.textContent = addLeadingZero(hours);
    spanMinutes.textContent = addLeadingZero(minutes);
    spanSeconds.textContent = addLeadingZero(seconds);
  } else {
    clearInterval(timerId);
  }
}

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}
