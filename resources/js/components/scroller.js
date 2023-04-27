/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function initScroller() { 
    console.log("** init scroller from /components/scroller.js **")

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("[data-section]");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "[data-container]",
            pin: true,
            scrub: .2,
            snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 1
            },
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
        }
    });


}



