"use scrit"

let num = +prompt('Введите число',0)
if (num !== num || num == 0) {
    alert('введено не число либо 0')
    }
else {
    console.log('Задание 1')
    for (let i = 0; i < num*2; i++){
        if (i % 2 !== 0) continue;
        console.log(i);
    }
    console.log('Задание 2')
    for (let i = 0; i < num*2; i++){
        if (i % 2 !== 0 || (i % 5 === 0 && i !==0 ))continue;
        console.log(i);
    }
}
