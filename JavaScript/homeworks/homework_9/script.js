'use scrict'
// Создайте объект person  с тремя свойствами (surname, name, middle name).  В качестве их значений используйте любые фамилию, имя и отчество.
// Добавьте  еще четыре свойства, значениями которых являются  год рождения, профессия, должность и стаж.
// Создайте еще один объект, свойствами  которого являются  фамилия, имя и год рождения из объекта person.
// Удалите свойство middle name из объекта person. Проверьте, удалено это свойство или нет. Если свойство middle name  из объекта person удалено,
// выведите сообщение, что такого свойства нет, в противном случае выведите его значение.
// Выведите на экран оставшееся количество свойств у объекта person.
// Выведите на экран количество свойств у объекта person, значениями которых являются числа ( используйте функцию typeof() ).
let person = {
    'surname': 'D',
    'name': 'Daniil',
    'middle name': 'S',
}
person.birth = new Date(1993,11,26).getFullYear()
person.position = 'Technician programmer'
person.experience = 7
let newPerson = {}
newPerson.surname = person.surname
newPerson.name = person.name
newPerson.birth = person.birth
delete person['middle name']
person['middle name']==undefined?console.log('такого свойства нет'):console.log(person['middle name'])

// Создайте объект salary в котором хранятся зарплаты 10 работников. (Ключами являются их фамилии а значениями-размеры зарплат) 
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
    .reduce((sum, current) => sum + current, 0)/(Object.values(obj).length)).toFixed(2)
const getAverageSalaryEmployees = (obj, averageSalary) => {
    return Object.entries(obj).filter(item=>item[1]>=averageSalary).length
}
salary.getBigSalary = getBigSalary(salarysClon)
salary.getAverageSalary = getAverageSalary(salarysClon)
salary.getAverageSalaryEmployees = getAverageSalaryEmployees(salarysClon,salary.getAverageSalary)

console.log(salary.getBigSalary)
console.log(salary.getAverageSalary)
console.log(salary.getAverageSalaryEmployees)