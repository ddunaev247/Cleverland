"use scrit"
let nameUser = prompt('Ваше имя?')
const hello = (nameUser = 'Гость') => `Привет ${nameUser}`
console.log(hello(nameUser))
console.log(hello())