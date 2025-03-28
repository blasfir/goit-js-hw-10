import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import groupSvg from "../img/group.svg";
import biBellSvg from "../img/bi_bell.svg";
import biExclamationTriangleSvg from "../img/bi_exclamation-triangle.svg";
import biCheck2CircleSvg from "../img/bi_check2-circle.svg";

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
    iconUrl: biBellSvg
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
            iconUrl: biExclamationTriangleSvg
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
                resolve(delay);
            } else {
                reject(delay);
            }
        }, parseInt(delay));
    });

    promise2
        .then((value) => {
            const resolveMassage = "Fulfilled promise in " + value + "ms";
            iziToast.show({
            message: resolveMassage,
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '64px',
            backgroundColor: '#59A10D',
            iconColor: '#ffffff',
            position: 'topRight',
            progressBarColor: '#326101',
            iconUrl: biCheck2CircleSvg
            })
        })
        .catch((error) => {
            const rejectMassage = "Fulfilled promise in " + error + "ms";
            iziToast.show({
                message: rejectMassage,
                messageColor: '#ffffff',
                messageSize: '16px',
                messageLineHeight: '64px',
                backgroundColor: '#EF4040',
                iconColor: '#ffffff',
                position: 'topRight',
                progressBarColor: '#B51B1B',
                iconUrl: groupSvg
            })
        })
});
