"use strict"

const hamb = document.querySelector(".header-menu-burger");
const menu = document.querySelector(".menu");
const body = document.body;
const header = document.querySelector(".header");

hamb.addEventListener("click", hambFun);
function hambFun(e) {
    e.preventDefault();
    const gotoBlockMenu = document.querySelector('.header-menu-burger');
    const gotoBlockMenuValue = gotoBlockMenu.getBoundingClientRect().top + scrollY
    // Переключаем стили элементов при клике
    window.scrollTo({
        top:gotoBlockMenuValue,
        behavior: "auto"
        });
    hamb.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("noscroll")
    header.classList.toggle("noborder");
}

const linksMenu = Array.from(menu.children); 
linksMenu.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

  // Закрытие при клике на меню
function closeOnClick() {
    menu.classList.remove("active");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
    header.classList.remove("noborder")
}

const links = document.querySelectorAll('.menu-link[data-goto]')
if (links.length > 0) {
    links.forEach(link=> {
        link.addEventListener("click", onLinkClick);
    });
    function onLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
            });
        e.preventDefault();
        }
    }
}

const swiper = new Swiper(".services-swiper", {
    observer:true,
    observeParents:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints : {
        360: {
         slidesPerView: 1,
         spaceBetween: 12,
        },
        978: {
         slidesPerView: 3,
         spaceBetween: 26,
        }
    }
//   pagination: {
//     el: '.swiper-pagination',
//   },
});