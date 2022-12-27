let start, end, memNum;
let countDiv;
let intervalID;
let isLaunched = false;
const inputStart = document.querySelector('.begin');
const inputEnd = document.querySelector('.end');
const buttonCounter = document.querySelector('.button-counter');
const formCounter = document.querySelector('.form');
const buttonReset = document.querySelector('.reset');

const resetState = () => {
    clearInterval(intervalID);
    memNum = 0;
    inputStart.value = '';
    inputEnd.value = '';
    countDiv = document.querySelector('.count');
    countDiv.innerHTML = 0;
    buttonCounter.innerHTML = 'Start';
    buttonCounter.setAttribute('disabled', 'disabled');
};
const intervalCount = num => {
    countDiv = document.querySelector('.count');
    intervalID = setInterval(() => {
        if (num <= end) {
            countDiv.innerHTML = num++;
            memNum = num;
        } else resetState();
    }, 1000);
};
const counter = () => {
    countDiv = document.querySelector('.count');
    if (countDiv === null) formCounter.insertAdjacentHTML('afterbegin', `<div class="count"></div>`);
    if (isLaunched === false) {
        isLaunched = true;
        if (memNum) {
            intervalCount(memNum);
        } else {
            intervalCount(start);
        }
        buttonCounter.innerHTML = 'Pause';
    } else {
        clearInterval(intervalID);
        isLaunched = false;
        buttonCounter.innerHTML = 'Start';
    }
};
inputStart.addEventListener('input', e => {
    start = +e.target.value;
    if (start !== undefined && start < end) {
        buttonCounter.removeAttribute('disabled');
    } else buttonCounter.setAttribute('disabled', 'disabled');
});
inputEnd.addEventListener('input', e => {
    end = +e.target.value;
    if (end !== undefined && start < end) {
        buttonCounter.removeAttribute('disabled');
    } else buttonCounter.setAttribute('disabled', 'disabled');
});
buttonCounter.addEventListener('click', counter);
buttonReset.addEventListener('click', () => resetState());
