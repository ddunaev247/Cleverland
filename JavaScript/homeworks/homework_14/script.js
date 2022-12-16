const buttonStart = document.querySelector('.start');
const buttonPause = document.querySelector('.pause');
const buttonReset = document.querySelector('.reset');
const buttonsClassSwitcher = () => {
    buttonStart.classList.toggle('active');
    buttonPause.classList.toggle('active');
};
const inputsClassSwitcher = () => {
    inputBegin.classList.toggle('hidden');
    inputEnd.classList.toggle('hidden');
};
let inputBegin = document.querySelector('.begin');
let inputEnd = document.querySelector('.end');
let countValue = document.querySelector('.count-value');
let cashEnd = 0;
let cashStart = 0;
let timerID = '';
const counter = (end, start) => {
    let count = start;
    cashEnd = end;
    let timer = setInterval(() => {
        if (count <= end) {
            countValue.innerHTML = count;
            count++;
            cashStart = count;
        } else {
            clearInterval(timer);
            countValue.innerHTML = 0;
            buttonsClassSwitcher();
            inputsClassSwitcher();
            countValue.innerHTML = 0;
        }
    }, 1000);
    timerID = timer;
    inputBegin.value = 0;
    inputEnd.value = 0;
};
buttonStart.onclick = () => {
    inputBegin = document.querySelector('.begin');
    inputEnd = document.querySelector('.end');
    if (inputBegin.value < inputEnd.value) {
        buttonsClassSwitcher();
        if (inputBegin.classList.contains('active')) {
            inputBegin.classList.remove('active');
            inputEnd.classList.remove('active');
            inputBegin.classList.add('hidden');
            inputEnd.classList.add('hidden');
            counter(inputEnd.value, inputBegin.value);
        } else counter(cashEnd, cashStart);
    } else {
        inputBegin.value = 0;
        inputEnd.value = 0;
    }
};
buttonPause.onclick = () => {
    buttonsClassSwitcher();
    clearInterval(timerID);
    console.log('stop');
};
buttonReset.onclick = () => {
    inputBegin.classList.add('active');
    inputEnd.classList.add('active');
    inputBegin.classList.remove('hidden');
    inputEnd.classList.remove('hidden');
    buttonStart.classList.add('active');
    buttonPause.classList.remove('active');
    countValue.innerHTML = 0;
};
