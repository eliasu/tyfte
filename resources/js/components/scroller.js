/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initScroller() { 
    console.log("** init scroller from /components/scroller.js **")

    let pages = [...document.querySelectorAll('.pager')]
    gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    ease: "ease",
    scrollTrigger: {
        trigger: ".scrollcontainer",
        pin: true,
        markers: true,
        scrub: 1,
        snap: 1 / (pages.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".scrollcontainer").offsetWidth
    }
    });
}



