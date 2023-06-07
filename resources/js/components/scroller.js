/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
 **/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CrowdPleaser } from "./crowd_pleaser";
import Lenis from "@studio-freight/lenis";
window.Lenis = Lenis;

// import { S1FX } from './S1FX';
// import { S2FX } from './S2FX';

gsap.registerPlugin(ScrollTrigger);

export default function initScroller() {
    // const lenis = new Lenis({
    //     duration: 1.1,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });

    // lenis.on("scroll", ScrollTrigger.update);

    // gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    // });

  
    const anim = gsap.to("#seeker", {
        transform: 'translate(90vw, 120vh)'},
    );

     let tl = gsap.timeline(
        { defaults: { 
            duration: 1, ease: "back",
            } 
        });
        tl.to("#seeker", {transform: 'translate(90vw, 120vh)'})
        .to("#seeker", {
            transform: 'translate(10vw, 220vh)',
            scale: 5
        })
        .to("#seeker", {
            transform: 'translate(100vw, 260vh)',
            scale: 2
        })
        ;


    ScrollTrigger.create({
        // trigger: "#s1",
        trigger: "#scroll-container",
        animation: tl,
        markers: true,
        start: "top top",
        end: "bottom bottom",
        // toggleClass: "active",
        // pin: true,
        scrub: 1,
        onUpdate: (self) => {
            // console.log(
            //     "progress:",
            //     self.progress.toFixed(3),
            //     "direction:",
            //     self.direction,
            //     // "velocity",
            //     // self.getVelocity()
            // );
        },
    });

    console.log(texti);

    gsap.utils.toArray(texti.elements).forEach(function(elem, index) {

        ScrollTrigger.create({
            trigger: elem,
            markers: true,
            start: "top center",
            end: "bottom center",
            // pin: true,
            onEnter: (i,el) => { console.log(`onEnter`), texti.animations[index].
            animateIn()},
            onLeave: (i,el) => { console.log(`leaving`), texti.animations[index].
            animateOut()},
            onLeaveBack: (i,el) => { console.log(`leaving`), texti.animations[index].
            animateOut()},
            onEnterBack: (i,el) => { console.log(`onEnterBack`), texti.animations[index].
            animateIn() },
           
        });
    });
}
