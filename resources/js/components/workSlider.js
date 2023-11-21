/**
 * work slider component
 * import with "import { workSlider } from './workSlider'"
**/

// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import lottie from 'lottie-web';

let workSlider;
let slideTransitionMs = 900
let easeCurve = 'cubic-bezier(.34,.11,.43,.99)'

export default function initWorkSlider() { 
    console.log("** init work slider from /components/workSlider.js **")

    let bgColors = new Array();

    

    // create a scrolltrigger for the swiper element
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#swiper",
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "bottom top", // end after scrolling 500px beyond the start
            scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    });   
    
    // animate the bg video tint in and out
    tl.from("#work-tint", {autoAlpha: 0})
      .to("#work-tint", {autoAlpha: .8})
      .to("#work-tint", {autoAlpha: 0})

    // create the projects slider
    workSlider = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Parallax, Keyboard],
        parallax: true,
        speed: slideTransitionMs,
        allowTouchMove: true,
        loop: false,
        slidesPerView: 1,
        keyboard: {
            enabled: true,
        },
        
        // add pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'custom',
            bulletActiveClass: 'bg-green',
            renderCustom: renderCustomBulletPoints,
          },
        
        // add navigation arrows with lottie animations
        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
        },

        // add animation for swiper
        on: {
   
            transitionStart: e => {
                transition(workSlider, 1)

                gsap.to("#work-tint", {
                    duration: 1,
                    ease: easeCurve,
                    backgroundColor: bgColors[e.activeIndex],
                })
            },
            transitionEnd: e => {
                transition(workSlider, 0)
            },
            init: e => {
                // fill array with colors from cms
                for (let index = 0; index < e.slides.length; index++) {
                    bgColors[index] = e.slides[index].dataset.swipercolor
                }

                // add big title animation on hover title link
                document.querySelectorAll(".title-link").forEach(function (elem, index) {

                    // add hover effect
                    elem.addEventListener('mouseenter', el => {
                        transition(workSlider, 1, true)
                    });

                    // add hover out effect
                    elem.addEventListener('mouseleave', el => {
                        transition(workSlider, 0, true)
                    });
                });

                // add the scroll triogger fro the background color
                gsap.set("#work-tint", {
                    duration: 1,
                    ease: easeCurve,
                    backgroundColor: bgColors[e.activeIndex],
                })
            },
        }
    });

    // create Callbacks for navigation buttons
    initNavigationButtons();

    // make transitionEnd the starting point
    transition(workSlider, 0)
}

// helper functions

function initNavigationButtons() {
    const ani_next = lottie.loadAnimation({
        container: document.getElementById("next_lottie"), // Specify the container element
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/files/lottie/arrrightlottie2.json', // Specify the path to your animation JSON file
    });
    
    const ani_prev = lottie.loadAnimation({
        container: document.getElementById("prev_lottie"), // Specify the container element
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/files/lottie/arrrightlottie2.json', // Specify the path to your animation JSON file
    });
    
    const btnPrev = document.querySelector('#prev_lottie');
    
    btnPrev.addEventListener('mouseenter', e => {
        ani_prev.setDirection(1);
        ani_prev.play();
    });

    btnPrev.addEventListener('mouseleave', e => {
        ani_prev.goToAndStop(0,true)
    });
    
    
    const btnNext = document.querySelector('#next_lottie');
    
    btnNext.addEventListener('mouseenter', e => {
        ani_next.setDirection(1);
        ani_next.play();
    });

    btnNext.addEventListener('mouseleave', e => {
        ani_next.goToAndStop(0,true)

    });
}

function renderCustomBulletPoints (swiper, current, total) {
    // outer bullets container
    let outputHtml = "<div class='w-full h-full flex mb-2'>";

    // rendering bullets
    for (let index = 1; index < total+1; index++) {
        if(index == current) {
            outputHtml += '<div class="h-[2px] bg-dark grow transition"></div>'
        }
        else {
            outputHtml += '<div class="h-[2px] bg-dark opacity-30 grow transition"></div>'
        }
    }

    // end bullets container
    outputHtml += "</div>";

    // add fractions container
    outputHtml +=  `<div class="w-full flex gap-1">
                        <p class="text-small-1 mb-0">${current}</p><p class="text-small-1 mb-0"> / </p><p class="text-small-1 mb-0">${total}</p>
                    </div>`
    return outputHtml;
}




function transition(slider, start, hover = false) {
    
    let timeVideoWrap = .5 
    let sizeVideoWrap = [1, .87]
    
    let timeTitle = .4 
    let timeLink = .4 

    
    // create an array which contains all slides, ehich are affected
    let affectedSlides = new Array()
    
    // push the current slides and the previous/next slides as well if availabe
    affectedSlides.push(slider.slides[slider.activeIndex])
    slider.activeIndex > 0 ? affectedSlides.push(slider.slides[slider.activeIndex-1]) : console.log("no previous slide")
    slider.activeIndex < slider.slides.length - 1 ? affectedSlides.push(slider.slides[slider.activeIndex+1]) : console.log("no next slide")

    // animate the corresponding slides
    affectedSlides.forEach( (slide) => {
        
        // video wrap animation
        gsap.to(slide.querySelector(".videowrap"), {
            duration: timeVideoWrap,
            ease: easeCurve,
            scale: sizeVideoWrap[start],
        })

        // video element animation
        gsap.to(slide.querySelector("video"), {
            autoAlpha: start ? .7 : 1,
        })

        // big title animation
        gsap.to(slide.querySelector(".title-wrap"), {
            duration: timeTitle,
            ease: easeCurve,
            autoAlpha: start,
            scale: start ? 1 : 1.2,
        });

        // link animation (dont animate on hover)
        if(!hover) {
            gsap.to(slide.querySelector(".title-link"), {
                duration: timeLink,
                ease: easeCurve,
                translateX: start ? "0rem" : "1rem",
                autoAlpha: start ? 0 : 1,
            });
        }

        // (if there is) collaboration animation
        let data = slide.querySelector("[data-collaboration]")
        if(data) {
            gsap.to(data, {
                autoAlpha: start,
            })
        }
    })

    // play the next slides video safly
    let nextVideo = slider.slides[slider.activeIndex].querySelector("video");

    //  a fix for chrome and safari
    let playPromise = nextVideo.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        })
        .catch(error => {
        });
    }
}

