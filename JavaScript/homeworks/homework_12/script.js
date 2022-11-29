'use scrict'
//Задание 1
let dateNow = new Date()
console.log(`${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}`)
//Задание 2
const timeStamp = new Date(0)
let minuteWithTimeStamp = (dateNow - timeStamp) / 60000
console.log(minuteWithTimeStamp.toFixed(0))
//Задание 3
let taskDate = Date.parse('2022-10-27')
console.log(((dateNow.getTime() - taskDate) / (3600 * 1000)).toFixed(0))
//Задание 4
let start = Date.now()
let sum = 0
for (let i = 1; i < 1000000; i++) {
    sum += i
}
let end = Date.now() // заканчиваем отсчёт времени
console.log(end - start + 'ms')
//Задание 5
const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
console.log(months[dateNow.getMonth()])
