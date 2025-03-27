import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const cnButton = document.querySelector(".crt-ntfctn-bttn");
const labelEL = document.querySelector(".lbl");
const fulfilled = document.querySelector(".flflld");
const rejected = document.querySelector(".rjctd");

cnButton.addEventListener("click", event => {
    const promise2 = new Promise((resolve, reject) => {
        const delay = labelEL.textContent;

        setTimeout(() => {
            if (fulfilled.checked) {
                resolve("Fulfilled promise in ${delay}ms");
            } else {
                reject("Rejected promise in ${delay}ms");
            }
        }, parselnt(delay));

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
});