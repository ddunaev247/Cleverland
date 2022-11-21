'use scrict'
// Билет на одну поездку в метро стоит 15 рублей, билет на 10 поездок стоит 125 рублей, билет на 60 поездок стоит 440 рублей.
// Пассажир планирует совершить n поездок. Определите, сколько билетов каждого вида он должен приобрести,
// чтобы суммарное количество оплаченных поездок было не меньше n, а общая стоимость приобретенных билетов – минимальна.

// const caclTicket = countTikets => {
//     const ticket1= 15     // "общая стоимость приобретенных билетов – минимальна." - условие выполняется в любом случе
//     const ticket10 = 125  // пока действует скидка от кол-ва билетов
//     const ticket60 = 440  //
//     let countTiket1 = 0
//     let countTiket10 = 0
//     let countTiket60 = 0
//     while(countTikets>0){
//         if (countTikets>=60){
//             countTiket60 = Math.floor(countTikets/60).toFixed(0)
//             countTikets = countTikets-countTiket60*60
//         }
//         if (countTikets>=10) {
//             countTiket10 = Math.floor(countTikets/10).toFixed(0)
//             countTikets = countTikets-countTiket10*10
//         }
//         countTiket1 = countTikets
//         countTikets = 0
//     }
//     return `На 60 поездок: ${countTiket60} \nНа 10 поездок: ${countTiket10} \nНа 1 поездку: ${countTiket1} \nСумма: ${countTiket60*ticket60+countTiket10*ticket10+countTiket1*ticket1} руб`
// }
// console.log(caclTicket(154))


// Создайте объект salary в котором хранятся зарплаты 10 работников. (Ключами являются их фамилии а значениями-размеры зарплат) 
// определите у кого из работников самая большая зарплата. Выведите фамилию этого работника и размер его зарплаты
// Создайте клон этого объекта.
// Вычислите среднюю  зарплату. Добавьте в объект salary свойство, содержащее информацию о средней зарплате.
// Посчитайте сколько человек  получают зарплату не меньше средней.  Добавьте в объект salary свойство, содержащее эту информацию.

let salary = {
    'Fillis':1200,
    'Smitt':1850,
    'Roks':2000,
    'Kolins':1100
}
let salarysClon = Object.assign({},salary)
const getBigSalary = obj => {
    let bigSalary = 0
    let employee = ''
    Object.entries(obj).forEach(item=> {
        if (item[1]>bigSalary){
            bigSalary = item[1]
            employee = item[0]
            }
        }
    )
    return `${employee} - ${bigSalary} руб`
}
const getAverageSalary = obj => (Object.values(obj)
    .filter(item=>!isNaN(item))
    .reduce((sum, current) => sum + current, 0)/4).toFixed(2)
const getAverageSalaryEmployees = (obj, averageSalary) => {
    return Object.entries(obj).filter(item=>item[1]>=averageSalary).length
}
salary.getBigSalary = getBigSalary(salarysClon)
salary.getAverageSalary = getAverageSalary(salarysClon)
salary.getAverageSalaryEmployees = getAverageSalaryEmployees(salarysClon,salary.getAverageSalary)

console.log(salary.getBigSalary)
console.log(salary.getAverageSalary)
console.log(salary.getAverageSalaryEmployees)