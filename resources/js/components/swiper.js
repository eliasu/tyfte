// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

import { gsap } from "gsap";

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

    virtualTranslate: true,

    effect: "myCustomTransition",
    on: {
      progress(swiper, progress) {
        if (this.params.effect !== "myCustomTransition") return;
        // that.progress(swiper, progress);
        // console.log("progress", progress);
      },
      setTransition(swiper, transition) {
        if (this.params.effect !== "myCustomTransition") return;
        // that.setTransition(swiper, transition);
        console.log("transition", transition);
      },
      setTranslate(swiper, translate) {
        if (this.params.effect !== "myCustomTransition") return;
        // that.setTranslate(swiper, translate);
        console.log("translate", translate);
        // console.log(swiper.wrapperEl);
        gsap.to(swiper.wrapperEl, {
          x: translate
        });
        // test(swiper);
      },
      activeIndexChange(swiper) {
        console.log("active");
        console.log(swiper.activeIndex);
       
      }
    }

    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //         shadow: true,
    //         translate: ["-180%", 100, -400],
    //         scale: .8,
    //         // translate: [0, 0, -400],
    //     },
    //     next: {
    //         translate: ["110%", -100, 0],
    //         scale: .8,
    //     },
    //     perspective: true,
    // },
});

function test(swiper) {
  //const durationInSeconds = this.getTransitionSpeed() / 1000;
  // convert slides object to plain array
  const slides = Object.values(swiper.slides).slice(0, -1);
  
  // get the index of the slide active before transition start (activeIndex changes halfway when dragging)
  // const originIndex = this.getActiveIndexBeforeTransitionStart(
  //   swiper,
  //   slides
  // );
  // get information about animation progress from the active slide - the active slide's value is always -1 to 1.
  /* 
  every slide has a progress attribute equal to the "distance" from the current active index.
  */
  // const animationProgress = slides[originIndex].progress;
  // you can then get the drag direction like so:
  // const direction = this.getDirection(animationProgress);
  // console.log(direction);

  // do magic with each slide
  // slides.map((slide, index) => {
  //   // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
  //   const offset = slide.swiperSlideOffset;
  //   debugger
  //   let x = -offset;
  //   if (!swiper.params.virtualTranslate) x -= swiper.translate;
  //   let y = 0;
  //   if (!swiper.isHorizontal()) {
  //     y = x;
  //     x = 0;
  //   }
  //   gsap.set(slide, {
  //     x,
  //     y
  //   });

  //   // do our animation stuff!
  //   const clip = (val, min, max) => Math.max(min, Math.min(val, max));
  //   const ZOOM_FACTOR = 0.05;

  //   const opacity = Math.max(1 - Math.abs(slide.progress), 0);

  //   const clippedProgress = clip(slide.progress, -1, 1);
  //   const scale = 1 - ZOOM_FACTOR * clippedProgress;

  //   // you can do your CSS animation instead of using tweening.
  //   gsap.to(slide, 1, {
  //     scale,
  //     opacity
  //   });
  // });
}

// swiper.on("beforeSlideChangeStart", function(e) {
//   // console.log(e);
//   console.log("fire");
//   const test = gsap.fromTo(e.el.querySelector(".swiper-slide-active"), {
//       y: 400,
//       // x: 0,
//       autoAlpha: 0,
//       border: "5px solid red"
//   }, {
//       duration: 1,
//       ease: "power4.out",
//       y: 0,
//       // x: "100%",
//       autoAlpha: 1,
//       border: "0px solid red",
//       // onUpdate: function() {
//       //   console.log(this.progress());
//       // }

//   });

//   // console.log(test);
// });



class SwiperDemo {
  constructor() {
    this.currentTransitionSpeed = 0;
    this.init();
  }

  getTransitionSpeed() {
    const transitionSpeed = this.currentTransitionSpeed;
    // don't forget to reset the variable for future calls
    this.currentTransitionSpeed = 0;
    return transitionSpeed;
  }
  
  /*
  A weird way to find this out but I've found no other.
  Checks if the progress on the active slide is 1 or -1 which happens when swiper navigates to next/previous slide on click and keybord navigation.
If not then the slider is being dragged, so we get the right index by finding the startTranslate from touchEvents in array of transitions the swiper snaps to.
The startTranslate doesn't exist on initial load so we use the initialSlide index instead.
  */
  getActiveIndexBeforeTransitionStart(swiper, slides) {
    const isDragging = !Math.abs(slides[swiper.activeIndex].progress === 1);
    if (isDragging) {
      return swiper.slidesGrid.indexOf(
        -swiper.touchEventsData.startTranslate || swiper.params.initialSlide
      );
    } else {
      return swiper.activeIndex;
    }
  }

  getDirection(animationProgress) {
    if (animationProgress === 0) {
      return "NONE";
    } else if (animationProgress > 0) {
      return "NEXT";
    } else {
      return "BACK";
    }
  }

  progress(swiper, progress) {
    /* 
    if you need to change something for each progress
    do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider 
    */
  }

  /*
   this is a function for the setTransition swiper event. Can be used for setting the CSS transition duration on slides or wrapper. Sometimes called when the change is supposed to be animated, sometimes not called if the change should be immediate (e.g. dragging the slider)
  */
  setTransition(swiper, transitionSpeed) {
    this.currentTransitionSpeed = transitionSpeed;
    // console.log("transition", transitionSpeed);
  }

  setTranslate(swiper, wrapperTranslate) {
    const durationInSeconds = this.getTransitionSpeed() / 1000;
    // convert slides object to plain array
    const slides = Object.values(swiper.slides).slice(0, -1);
    
    // get the index of the slide active before transition start (activeIndex changes halfway when dragging)
    const originIndex = this.getActiveIndexBeforeTransitionStart(
      swiper,
      slides
    );
    // get information about animation progress from the active slide - the active slide's value is always -1 to 1.
    /* 
    every slide has a progress attribute equal to the "distance" from the current active index.
    */
    const animationProgress = slides[originIndex].progress;
    // you can then get the drag direction like so:
    const direction = this.getDirection(animationProgress);
    // console.log(direction);

    // do magic with each slide
    slides.map((slide, index) => {
      // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
      const offset = slide.swiperSlideOffset;
      let x = -offset;
      if (!swiper.params.virtualTranslate) x -= swiper.translate;
      let y = 0;
      if (!swiper.isHorizontal()) {
        y = x;
        x = 0;
      }
      TweenMax.set(slide, {
        x,
        y
      });

      // do our animation stuff!
      const clip = (val, min, max) => Math.max(min, Math.min(val, max));
      const ZOOM_FACTOR = 0.05;

      const opacity = Math.max(1 - Math.abs(slide.progress), 0);

      const clippedProgress = clip(slide.progress, -1, 1);
      const scale = 1 - ZOOM_FACTOR * clippedProgress;

      // you can do your CSS animation instead of using tweening.
      TweenMax.to(slide, durationInSeconds, {
        scale,
        opacity
      });
    });
  }

  init() {
    const that = this;
    this.swiper = new Swiper(".swiper-container", {
      // -----unrelated settings start -----
      grabCursor: true,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // -----unrelated settings end -----
      speed: 1000,
      watchSlidesProgress: true,
      virtualTranslate: true,
      effect: "myCustomTransition",
      on: {
        progress(progress) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.progress(swiper, progress);
        },
        setTransition(transition) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.setTransition(swiper, transition);
        },
        setTranslate(translate) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.setTranslate(swiper, translate);
        }
      }
    });
  }
}

// const demo = new SwiperDemo();
