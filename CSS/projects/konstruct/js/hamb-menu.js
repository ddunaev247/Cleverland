"use strict"
const menuBurger = document.querySelector(".header-menu-burger");
const menu = document.querySelector(".menu");
const body = document.body;
const topScreenBlock = document.querySelector(".top-screen");
const onClickMenuBurger = (e) => {
    e.preventDefault();
    menuBurger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("noscroll")
    topScreenBlock.classList.toggle('novisible');
}
const closeOnClick = () => {
    menu.classList.remove("active");
    menuBurger.classList.remove("active");
    body.classList.remove("noscroll");
    topScreenBlock.classList.remove('novisible')
}
const linksMenu = Array.from(menu.children); 
linksMenu.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});
menuBurger.addEventListener("click", onClickMenuBurger);
menu.addEventListener("click", closeOnClick);