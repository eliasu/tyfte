/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
 **/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CrowdPleaser } from "./crowd_pleaser";
import Lenis from '@studio-freight/lenis'
window.Lenis = Lenis;

// import { S1FX } from './S1FX';
// import { S2FX } from './S2FX';

gsap.registerPlugin(ScrollTrigger);

export default function initScroller() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // // You can use a ScrollTrigger in a tween or timeline
    // gsap.to(".b", {
    //     x: 400,
    //     rotation: 360,
    //     scrollTrigger: {
    //       trigger: ".b",
    //       start: "top center",
    //       end: "top 100px",
    //       scrub: true,
    //       markers: true,
    //       id: "scrub"
    //     }
    //   });

    //   // Or you can attach a tween or timeline to a ScrollTrigger later
    //   const anim = gsap.to(".c", {
    //     x: 400,
    //     rotation: 360,
    //     duration: 3
    //   });

    const anim = gsap.to(".c", {
        x: 400,
        rotation: 360,
        duration: 3,
    });

    ScrollTrigger.create({
        trigger: ".c",
        animation: anim,
        markers: true,
        start: "top center",
        end: "top 100px",
        toggleClass: "active",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
            console.log(
                "progress:",
                self.progress.toFixed(3),
                "direction:",
                self.direction,
                "velocity",
                self.getVelocity()
            );
        },
    });

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
