import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let currentHeaderActive;
let currentEl;

console.log('initializing scroller info');
initInfoSection();

let tlInfoHeader = gsap.timeline({
    defaults: { // children inherit these defaults
        duration: .2,
        ease: "power4",
  },
});

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