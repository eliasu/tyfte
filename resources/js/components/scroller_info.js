import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let currentHeaderActive;
let currentEl;

console.log('initializing scroller info');
// initInfoSection();
initBars();

let tlInfoHeader = gsap.timeline({
    defaults: { // children inherit these defaults
        duration: .2,
        ease: "power4",
  },
});
 
function initBars(){

    // progress bar info section
    gsap.utils.toArray("[data-trigger='info']").forEach(function (elem, index) {
        
        // progress bar info section
        gsap.to('[data-trigger="pb-info"]', {
            scrollTrigger: {
                trigger: elem, // selector or element
                start: "top top",  // [trigger] [scroller] positions
                end: "bottom bottom", // [trigger] [scroller] positions
                scrub: 1, // or time (in seconds) to catch up
                markers: true, // only during development!
                onEnter: (i, el) => {
                    console.log(`onEnter ${index}`);
                    gsap.set("[data-trigger='pb-info']", {scaleX: 0})
                    document.querySelector("[data-trigger='pb-infocount']").innerHTML = `${index+1}`
                },
                onEnterBack: (i, el) => {
                    console.log(`onEnter ${index}`);
                    gsap.set("[data-trigger='pb-info']", {scaleX: 0})
                    document.querySelector("[data-trigger='pb-infocount']").innerHTML = `${index+1}`
                },
            },
            scaleX: 1,
        });

        // accordion groups
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem, // selector or element
                start: "bottom bottom",  // [trigger] [scroller] positions
                end: "bottom 50%", // [trigger] [scroller] positions
                scrub: 1, // or time (in seconds) to catch up
                markers: true, // only during development!
            },
            autoAlpha: 0,
        });
    });

    // initial fade in accordion
    gsap.from('[data-trigger="info"]', {
        scrollTrigger: {
            trigger: '[data-trigger="info-accwrap"]', // selector or element
            start: "top top",  // [trigger] [scroller] positions
            end: "bottom bottom", // [trigger] [scroller] positions
            // scrub: 1, // or time (in seconds) to catch up
            markers: true, // only during development!
            toggleActions: "play pause resume reverse",
            // other actions: complete reverse none
        },
        
        y: '50',
        autoAlpha: 0,
        duration: .7,
        ease: "expo.out",
    });

    // progress bar work section
    gsap.to('[data-trigger="pb-work"]', {
        scrollTrigger: {
            trigger: '[data-trigger="work"]', // selector or element
            start: "top top",  // [trigger] [scroller] positions
            end: "bottom bottom", // [trigger] [scroller] positions
            scrub: 1, // or time (in seconds) to catch up
            markers: true, // only during development!
        },
        
        scaleX: 1,
    });

    // progress bar work section
    gsap.to('[data-trigger="hero-content"]', {
        scrollTrigger: {
            trigger: '[data-trigger="hero"]', // selector or element
            start: "30% top",  // [trigger] [scroller] positions
            end: "bottom bottom", // [trigger] [scroller] positions
            scrub: 1, // or time (in seconds) to catch up
            markers: true, // only during development!
        },
        
        autoAlpha: 0,
    });

    // hero background
    gsap.to('[data-trigger="hero-bg"]', {
        scrollTrigger: {
            trigger: '[data-trigger="hero"]', // selector or element
            start: "40% top",  // [trigger] [scroller] positions
            end: "bottom bottom", // [trigger] [scroller] positions
            scrub: .3, // or time (in seconds) to catch up
            markers: true, // only during development!
        },
        
        autoAlpha: 0,
    });

    // hero cta wrapper
    gsap.to('[data-trigger="hero-cta"]', {
        scrollTrigger: {
            trigger: '[data-trigger="hero"]', // selector or element
            start: "50% top",  // [trigger] [scroller] positions
            end: "bottom bottom", // [trigger] [scroller] positions
            scrub: .7, // or time (in seconds) to catch up
            markers: true, // only during development!
        },
        
        scale: 1.2,
        autoAlpha: 0,
    });

    // fade out info section
    gsap.to('[data-trigger="info-section"]', {
        scrollTrigger: {
            trigger: '[data-trigger="work"]', // selector or element
            start: "top bottom",  // [trigger] [scroller] positions
            end: "top 5%", // [trigger] [scroller] positions
            scrub: .7, // or time (in seconds) to catch up
            markers: true, // only during development!
        },
        
        y: -150,
        autoAlpha: 0,
    });
}





function initInfoSection() {
   
    // handle all updates and animations
    const updateStickyElem = (header) => {
        // prevent double Animation
        if(currentHeaderActive == header) return
        
        // Build down and build up for info header
        tlInfoHeader.to("[data-infoheader]", {opacity: 0, x: -50,})
        tlInfoHeader.to(`[data-infoheader="${header}"]`, {opacity: 1, x: 0})
        tlInfoHeader.from(`[data-infoheader="${header}"] [data-type='tag']`, {opacity: 0, scale: .6, stagger: 0.1})

        

        // set flag for double animation (onEnter & onEnterBack)
        currentHeaderActive = header
    }

    // reset header to section headline
    const resetStickyElem = () => {
        
        // Build down and build up for info header
        tlInfoHeader.to("[data-infoheader]", {opacity: 0, x: -50})
        tlInfoHeader.to(`[data-infoheader="init"]`, {opacity: 1, x: 0})
        tlInfoHeader.from(`[data-infoheader="init"] [data-type='tag']`, {opacity: 0, scale: .6, stagger: 0.1})

        // set flag for double animation (onEnter & onEnterBack)
        currentHeaderActive = null
    }

    // handle update for export state
    const updateInfoSectionScrollState = (el) => {
        currentEl = el;
    }

    gsap.utils.toArray("#info-accordion h2").forEach(function (elem, index) {

        ScrollTrigger.create({
            scroller: "main",
            trigger: elem,
            start: "top center",
            end: "bottom center",

            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
                updateStickyElem(index);
                updateInfoSectionScrollState(elem);
            },
            onEnterBack: (i, el) => {
                // console.log(`onEnterBack ${index}`);
                updateStickyElem(index);
                updateInfoSectionScrollState(elem);
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);
            },
            onLeaveBack: (i, el) => {
                if(index < 1) resetStickyElem()
                // console.log(`leaving ${index}`);
            },
          
        });
    });
}