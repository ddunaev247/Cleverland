"use scrit"

let age = +prompt('Возраст:',0);
const checkAge =age => age>16?'«добро пожаловать»':'вы еще молоды';

console.log(checkAge(age));