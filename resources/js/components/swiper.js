// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

import { gsap } from "gsap";

// import styles bundle
// this is fucking up the overwrites because its loaded afterwards
// import 'swiper/css/bundle';

let testani;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.6,
    loop: true,
    // spaceBetween: 500,
    // speed: 2260,
    speed: 1260,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            // shadow: true,
            translate: ["-180%", 0, -400],
        },
        next: {
            translate: ["100%", "-20%", 0],
        },
    },

    
});

