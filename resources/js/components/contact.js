/**
 * contact component
 * import with "import initContact from './components/contact';"
**/

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function initContact() { 
    console.log("** init contact from /components/contact.js **")
    
    // create a scrolltrigger for the swiper element
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "bottom top", // end after scrolling 500px beyond the start
            scrub: 5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    });

    // animate the bg video tint in and out
    tl.from("#contactBg", {y: 1000})
      .to("#contactBg", {y: 0})
}   