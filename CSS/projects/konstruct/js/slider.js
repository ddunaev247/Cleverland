"use strict"
const swiper = new Swiper(".services-swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false,
    freeMode: true,
    breakpoints : {
        360: {
            spaceBetween: 0,
            enabled: true,
            allowTouchMove: true,
        },
        654: {
            enabled: true,
            spaceBetween: 8,
        },
        978: {
            spaceBetween: 26,
            enabled: false,
        }
    }
});