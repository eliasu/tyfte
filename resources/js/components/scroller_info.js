import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const infoTitle = document.querySelector('#info-title h2');
let currentEl;

console.log('initializing scroller info');
initInfoSection();

function initInfoSection() {
   
    // handle all updates and animations
    const updateStickyElem = (value) => {
        infoTitle.innerHTML = value;
    }

    // handle update for export state
    const updateInfoSectionScrollState = (el) => {
        currentEl = el;
    }

    gsap.utils.toArray("#info-accordion [data-section]").forEach(function (elem, index) {
        // console.log(elem);
        console.log(elem);
        console.log(infoTitle);

        ScrollTrigger.create({
            scroller: "main",
            trigger: elem,
            // markers: true,
            start: "top center",
            end: "bottom center",
            // scrub: 1,
            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
                updateStickyElem(elem.dataset.section);
                updateInfoSectionScrollState(elem);
            },
            onEnterBack: (i, el) => {
                // console.log(`onEnterBack ${index}`);
                updateStickyElem(elem.dataset.section);
                updateInfoSectionScrollState(elem);
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);
            },
            onLeaveBack: (i, el) => {
                // console.log(`leaving ${index}`);
            },
          
        });
    });
}