"use scrit"
let num = +prompt('Введите число:', 0)
const checkNum = num => num >= 10? num*num: num<=7? '<=7':num===8? 8:9;
console.log(checkNum(num))
