let nameUser = prompt('Ваше имя', 'Аноним');
let date = new Date();
let  hour = date.getHours();
switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 23: alert(`Доброй ночи ${nameUser}`)
    case 5: 
    case 6:
    case 7:
    case 8: 
    case 9:
    case 10:alert(`Доброе утро ${nameUser}`)
    case 11: 
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:alert(`Добрый день ${nameUser}`)
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:alert(`Добрый вечер ${nameUser}`)
}