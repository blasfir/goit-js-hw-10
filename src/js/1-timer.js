import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
let startButton = document.querySelector(".bttn");
const inputEl = document.querySelector(".npt");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        const promise = new Promise((resolve, reject) => {
            const time = Date.now();
            const selectedDateTime = userSelectedDate.getTime();
            setTimeout(() => {
                if (time < selectedDateTime) {
                    resolve("Selected valid date");
                } else {
                    reject("Please choose a date in the future");
                }
            }, 0);
        });


        promise
            .then((value) => {
                startButton.disabled = false;
            })
            .catch(error => iziToast.show({
                message: error
                
             }))
    }    
};

flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener("click", event => {
    startButton.disabled = true;
    inputEl.disabled = true;
    
    const interval = setInterval(() => {
        const time2 = Date.now();
        const diference = userSelectedDate.getTime() - time2;
        const daysSpan = document.querySelector(".dys");
        const hoursSpan = document.querySelector(".hrs");
        const minutesSpan = document.querySelector(".mnts");
        const secondsSpan = document.querySelector(".scnds");

        if (diference <= 0) {
            inputEl.disabled = false; 
            clearInterval(interval);
            return;
        }

        const convertedMs = convertMs(diference);
        
        daysSpan.textContent = String(convertedMs.days).padStart(2, "0");
        hoursSpan.textContent = String(convertedMs.hours).padStart(2, "0");
        minutesSpan.textContent = String(convertedMs.minutes).padStart(2, "0");
        secondsSpan.textContent = String(convertedMs.seconds).padStart(2, "0");
    });
}, 1000);