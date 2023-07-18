// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

import { gsap } from "gsap";

// import styles bundle
// this is fucking up the overwrites because its loaded afterwards
// import 'swiper/css/bundle';

let testani;

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.8,
    loop: true,
    spaceBetween: 60,
    // speed: 2260,
    speed: 1260,
    watchSlidesProgress: true,
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
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //         // shadow: true,
    //         translate: ["-180%", 0, -400],
    //         opacity: .7,
    //     },
    //     next: {
    //         translate: ["100%", "-20%", 0],
    //         opacity: .7,
    //     },
    // },

    
});

// swiper.on('afterInit', function () {
//   console.log('init slider');
//   const activeVideo = swiper.slides[swiper.realIndex].querySelector("video");
//   activeVideo.play();
// });


swiper.on('slideChange', function () {
  console.log('slide changed');
  // console.log(swiper);
  updateVideoStates();
});

function updateVideoStates() {
  const activeIndex = swiper.realIndex;
  const visSlideIndexes = swiper.visibleSlidesIndexes;
  const slides = swiper.slides;

  slides.forEach((el,index) => {
    const video = el.querySelector("video");
    video.pause();

    if(visSlideIndexes.includes(index)) {
      //preloading
      if(index == activeIndex) video.play();
    }

  });

}

