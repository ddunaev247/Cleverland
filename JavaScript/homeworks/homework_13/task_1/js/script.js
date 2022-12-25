'use strict';
const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
    Array.from(row.cells).reverse()[i].style.backgroundColor = 'red';
}
