let hour = 1;
let minute = 57;
let seconds = 20;
let time = `${hour}:${minute}:${seconds}`;
console.log(time);
let timeNow = new Date;
console.log(`${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`)