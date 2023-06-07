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

    // const anim = gsap.to("#seeker", {
    //     x: vw(50),
    //     y: vh(70),
    //     modifiers:{
    //         x: function(x){
    //           return tween.ratio * vw(50);
    //         },
    //         y: function(y){
    //           return tween.ratio * vh(50);
    //         }
    //     }
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

    // let tl = gsap.timeline(
    //     { defaults: { 
    //         duration: 1, ease: "back",

    //         } 
    //     });
    // tl.to("#seeker", {  x: vw(50), y: vh(70),
    //     modifiers:{
    //         x: function(x){
    //           return tween.ratio * vw(50);
    //         },
    //         y: function(y){
    //           return tween.ratio * vh(50);
    //         }
    //       }  })
    //     // to("#seeker", {  x: vw(80), y: vh(30), })
    //     // .to("#seeker", { left: 0, y: "10vh" })
    //     ;

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
