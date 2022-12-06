'use scrict';
let lists = [...document.querySelectorAll('ul > li')];
colors = ['#87ceeb', '#008000', '#ffff00', '#ffa500'];
lists.forEach((el, index) => (el.style.backgroundColor = `${colors[index]}`));
