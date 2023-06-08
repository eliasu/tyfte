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

    const ani1 = gsap.to('#bg-container', {
        backgroundColor: "red",
        immediateRender: true,
        // onComplete() {
        //     console.log("complete");
        // },
        // onComplete: (self) => {
        //     console.log("complete", self);
        // },
    // , overwrite:true
} );
    const ani2 = gsap.to('#bg-container', {backgroundColor: "green", overwrite:false,
    immediateRender: true} );
    const ani3 = gsap.to('#bg-container', {backgroundColor: "blue", overwrite:false,
    immediateRender: true} );

    const aniArray = [ani1,ani2,ani3];

    gsap.utils.toArray("section.section-dummy").forEach(function (elem, index, arr) {
        console.log(elem);

        ScrollTrigger.create({
            // trigger: "#s1",
            animation: aniArray[index],
            scroller: "main",
            trigger: elem,
            markers: true,
            start: "top top",
            end: "bottom top",
            // toggleClass: "active",
            // pin: true,
            scrub: 1,
            onUpdate: (self) => {
                if(self.progress >= 1) {
                    console.log(self);
                    // gsap.set
                    // gsap.set(self, {x: 100, y: 50, opacity: 0});
                    console.log("done", index);
                    console.log(aniArray[index+1].vars);
                    console.log("resetting");
                    aniArray[index+1].invalidate();
                    // aniArray[index+1].restart();
                    console.log(aniArray[index+1].vars);
                }
                // console.log(
                //     index,
                //     "progress:",
                //     self.progress.toFixed(3),
                //     "direction:",
                //     self.direction,
                //     // "velocity",
                //     // self.getVelocity()
                // );
            },
           
            onEnter: (i, el) => {
                console.log(`onEnter ${index}`);
            },
            onLeave: (i, el) => {
                console.log(`leaving ${index}`);
            },
            onLeaveBack: (i, el) => {
                console.log(`leaving ${index}`);
            },
            onEnterBack: (i, el) => {
                console.log(`onEnterBack ${index}`);
            },
        });
    });

    
}
