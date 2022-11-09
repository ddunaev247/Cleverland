"use scrit"
let n = +prompt('Число 1:')
let m = +prompt('Число 2:')
const multiply = (n,m)  => isNaN(n) || isNaN(m)? 'ошибка в аргументах':n*m


console.log(multiply(n,m))
