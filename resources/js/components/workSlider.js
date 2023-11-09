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
import { loadVideo } from '../components/hls'

let workSlider;

export default function initWorkSlider() { 
    console.log("** init work slider from /components/workSlider.js **")

    let bgColors = new Array();

    let slideTransitionMs = 900
    let easeCurve = 'cubic-bezier(.34,.11,.43,.99)'
    let timeVideoWrap = [.5, 0] 
    let timeTitle = [.4, .2] 
    let timeLink = [.4, .2] 
    let sizeVideoWrap = [.87, 1]

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
                gsap.to(".videowrap", {
                    duration: timeVideoWrap[0],
                    ease: easeCurve,
                    scale: sizeVideoWrap[0],
                    onStart: function(current) {
                        let nextSlidesVideo = workSlider.slides[workSlider.activeIndex].querySelector("video");
                        loadVideo(nextSlidesVideo)
                        nextSlidesVideo.play();
                    },
                })
                
                gsap.to(".videowrap video", {
                    autoAlpha: .7,
                })

                gsap.to(".videowrap [data-collaboration]", {
                    autoAlpha: 1,
                })
                
                gsap.to(e.slides[e.previousIndex].querySelector(".title-wrap"), {
                    duration: timeTitle[0],
                    ease: easeCurve,
                    autoAlpha: 1,
                    scale: 1,
                });
                
                gsap.to(e.slides[e.activeIndex].querySelector(".title-wrap"), {
                    duration: timeTitle[0],
                    ease: easeCurve,
                    autoAlpha: 1,
                    scale: 1,
                });
                
                gsap.to(e.slides[e.previousIndex].querySelector(".title-link"), {
                        duration: timeLink[0],
                        ease: easeCurve,
                        translateX:"1rem",
                        autoAlpha: 0,
                });

                gsap.to(e.slides[e.activeIndex].querySelector(".title-link"), {
                    duration: timeLink[0],
                    ease: easeCurve,
                    translateX:"1rem",
                    autoAlpha: 0,
            });

                gsap.to("#work-tint", {
                    duration: 1,
                    ease: easeCurve,
                    backgroundColor: bgColors[e.activeIndex],
                })
            },
            transitionEnd: e => {

                gsap.to(e.slides[e.activeIndex].querySelector(".title-wrap"), {
                    duration: timeTitle[0],
                    ease: easeCurve,
                    scale: 1.2,
                    autoAlpha: 0,
                });

                gsap.to(e.slides[e.activeIndex].querySelector(".title-link"), {
                    duration: timeLink[0],
                    ease: easeCurve,
                    delay: timeLink[1],
                    translateX:"0px",
                    autoAlpha: 1,
                });
                
                gsap.to(".videowrap", {
                    duration: timeVideoWrap[0],
                    ease: easeCurve,
                    scale: sizeVideoWrap[1],
                    onComplete: function(current) {
                        if(workSlider.previousIndex == undefined) return;
                        workSlider.slides[workSlider.previousIndex].querySelector("video").pause()
                    },
                })

                gsap.to(".videowrap video", {
                    autoAlpha: 1,
                })

                gsap.to(".videowrap [data-collaboration]", {
                    autoAlpha: 0,
                })
            },
            init: e => {
                // fill array with colors from cms
                for (let index = 0; index < e.slides.length; index++) {
                    bgColors[index] = e.slides[index].dataset.swipercolor
                }

                // add big title animation on hover title link
                document.querySelectorAll(".title-link").forEach(function (elem, index) {
                    
                    elem.addEventListener('mouseenter', el => {

                        gsap.to(".videowrap", {
                            duration: timeVideoWrap[0],
                            ease: easeCurve,
                            scale: sizeVideoWrap[0],
                        })

                        gsap.to(".videowrap video", {
                            autoAlpha: .7,
                        })
        
                        gsap.to(".videowrap [data-collaboration]", {
                            autoAlpha: 1,
                        })

                        gsap.to(elem.previousElementSibling, {
                            duration: timeTitle[0],
                            ease: easeCurve,
                            scale: 1,
                            autoAlpha: 1,
                        })
                    });

                    elem.addEventListener('mouseleave', el => {
                        
                        gsap.to(elem.previousElementSibling, {
                            duration: timeTitle[0],
                            ease: easeCurve,
                            scale: 1,
                            autoAlpha: 0,
                        })

                        gsap.to(".videowrap", {
                            duration: timeVideoWrap[0],
                            ease: easeCurve,
                            scale: sizeVideoWrap[1],
                        })

                        gsap.to(".videowrap video", {
                            autoAlpha: 1,
                        })
        
                        gsap.to(".videowrap [data-collaboration]", {
                            autoAlpha: 0,
                        })
                    });
                });

                // add the scroll triogger fro the background color
                gsap.set("#work-tint", {
                    duration: 1,
                    ease: easeCurve,
                    backgroundColor: bgColors[e.activeIndex],
                })

                // make transitionEnd the starting point
                e.emit('transitionEnd');
            },
        }
    });

    // create Callbacks for navigation buttons
    initNavigationButtons();
}

// helper functions

function initNavigationButtons() {
    const ani_next = lottie.loadAnimation({
        container: document.getElementById("next"), // Specify the container element
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/files/lottie/arrrightlottie2.json', // Specify the path to your animation JSON file
    });
    
    const ani_prev = lottie.loadAnimation({
        container: document.getElementById("prev"), // Specify the container element
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/files/lottie/arrrightlottie2.json', // Specify the path to your animation JSON file
    });
    
    const btnPrev = document.querySelector('#prev');
    
    btnPrev.addEventListener('mouseenter', e => {
        ani_prev.setDirection(1);
        ani_prev.play();
    });

    btnPrev.addEventListener('mouseleave', e => {
        ani_prev.goToAndStop(0,true)
    });
    
    
    const btnNext = document.querySelector('#next');
    
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