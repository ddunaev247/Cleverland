"use scrit"

let sum = 0;
while (true) {
    let num = +prompt('Число:', '');
    if (!num) break;
    sum += num;
}
alert(sum);