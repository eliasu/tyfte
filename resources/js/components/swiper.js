// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
// import 'swiper/css/bundle';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    loop: true,
    spaceBetween: 500,
    speed: 1000,
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
            shadow: true,
            translate: ["-180%", 100, -400],
            scale: .8,
            // translate: [0, 0, -400],
        },
        next: {
            translate: ["110%", -100, 0],
            scale: .8,
        },
        perspective: true,
    },
});
