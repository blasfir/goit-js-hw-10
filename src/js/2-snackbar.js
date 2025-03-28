import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const cnButton = document.querySelector(".crt-ntfctn-bttn");
const formEl = document.querySelector(".form");
const numberInput = document.querySelector(".nmbr-npt");
const fulfilled = document.querySelector(".flflld");

iziToast.show({
    message: 'Welcome!',
    messageColor: '#ffffff',
    messageSize: '16px',
    messageLineHeight: '64px',
    backgroundColor: '#0099FF',
    iconColor: '#ffffff',
    position: 'topRight',
    progressBarColor: '#0099FF',
    iconUrl: "../img/bi_bell.svg"
});

cnButton.addEventListener("click", event => {
    if (numberInput.value.trim() === "") {
        iziToast.show({
            message: 'You forgot important data',
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '64px',
            backgroundColor: '#FFA000',
            iconColor: '#ffffff',
            position: 'topRight',
            progressBarColor: '#FFA000',
            iconUrl: "../img/bi_exclamation-triangle.svg"
        });
    };
});

numberInput.addEventListener("click", event => { 
    numberInput.style.borderColor = "#4E75FF";
});


formEl.addEventListener("submit", event => {
    event.preventDefault();

    const promise2 = new Promise((resolve, reject) => {
        const delay = numberInput.value;

        setTimeout(() => {
            if (fulfilled.checked) {
                resolve("Fulfilled promise in " + delay + "ms");
            } else {
                reject("Rejected promise in " + delay + "ms");
            }
        }, parseInt(delay));
    });

    promise2
        .then((value) => {
            iziToast.show({
            message: value,
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '64px',
            backgroundColor: '#59A10D',
            iconColor: '#ffffff',
            position: 'topRight',
            progressBarColor: '#326101',
            iconUrl: "../img/bi_check2-circle.svg"
            })
        })
        .catch(error => iziToast.show({
            message: error,
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '64px',
            backgroundColor: '#EF4040',
            iconColor: '#ffffff',
            position: 'topRight',
            progressBarColor: '#B51B1B',
            iconUrl: "../img/group.svg"
        }))
});
