import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let tweens;
let sections;

console.log("initializing scroller sections");
// initSectionTweens();

export const scrollerState = {
    getSection: (index) => sections[index],
    getTween: (index) => tweens[index],
    getProgress: (index) => tweens[index].ScrollTrigger.progress,
};

function initSectionTweens() {
    // set combined scroll container to size of sections
    sections = gsap.utils.toArray("section[data-scrollTrigger]");
    tweens = new Array(sections.length);
    console.log(`We have ### ${sections.length} ### Sections`);

    // first section tween
    tweens[0] = gsap.to("#background", {
        backgroundColor: "rgb(63 31 64)",
    });

    // 3. section tween
    tweens[2] = gsap.to("#background", {
        backgroundColor: "rgb(11 11 41)",
    });

    // create scrolltrigger for each section
    sections.forEach(function (elem, index) {
        ScrollTrigger.create({
            animation: tweens[index],
            scroller: "main", //necessary for native scroll snapping
            trigger: elem,
            // markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,

            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);

                //  recalculating last tween state as start for next
                if (tweens[index + 1]) tweens[index + 1].invalidate();
            },
            onLeaveBack: (i, el) => {
                // console.log(`leaving ${index}`);
            },
            onEnterBack: (i, el) => {
                // console.log(`onEnterBack ${index}`);
            },
        });
    });
}
