/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CrowdPleaser } from './crowd_pleaser';

import { S1FX } from './S1FX';
import { S2FX } from './S2FX';

gsap.registerPlugin(ScrollTrigger);



export default function initScroller() { 

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });

    

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})



    // gsap.utils.toArray("[data-section]").forEach(function(elem) {
        
    //     ScrollTrigger.create({
    //         trigger: elem,
    //         markers: true,
    //         onEnter: (i,el) => { console.log(`onEnter Section: ${getValue(i)}`) }, 
    //         onEnterBack: (i,el) => { console.log(`onEnterBack Section: ${getValue(i)}`) }, 
    //         // onLeave: (i,el) => { console.log(`onLeave Section: ${getValue(i)}`) }, 
    //         // onLeaveBack: (i,el) => { console.log(`onLeaveBack Section: ${getValue(i)}`) }, 
    //     });
    // });

   
}