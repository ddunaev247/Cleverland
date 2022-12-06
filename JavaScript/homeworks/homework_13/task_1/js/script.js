'use scrict';
let rows = [...document.querySelectorAll('tr')];
let count = 0;
let count2 = rows[0].querySelectorAll('td').length - 1;
let elems = [];
rows.forEach(item => {
    elems = [...item.querySelectorAll('td')];
    elems[count].style.backgroundColor = 'red';
    elems[count2].style.backgroundColor = 'red';
    count++;
    count2--;
});
