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

window.s1fx = null;
window.s2fx = null;
window.s3fx = null;
window.s4fx = null;
window.s5fx = null;

export default function initScroller() { 
    
    // init crowd pleaser object
    let crowdPleaser = new CrowdPleaser();

    // get fx wrapper 
    let fxWrapper = document.getElementById("section-fx");

    // initialize first FX on load: setFX(effectToStart, effectToEnd)
    // setFx(0,99)

    // add enter/leave callbacks
    // TODO

    gsap.utils.toArray("[data-section]").forEach(function(elem) {
        
        ScrollTrigger.create({
            trigger: elem,
            markers: true,
            onEnter: (i,el) => { console.log(`onEnter Section: ${getValue(i)}`) }, 
            onEnterBack: (i,el) => { console.log(`onEnterBack Section: ${getValue(i)}`) }, 
            // onLeave: (i,el) => { console.log(`onLeave Section: ${getValue(i)}`) }, 
            // onLeaveBack: (i,el) => { console.log(`onLeaveBack Section: ${getValue(i)}`) }, 
        });
    });

    function getValue(elem) {
        return elem.trigger.querySelector("[data-content]").dataset.content
    }

    // setup scrollTrigger
    // let scrollTimeline = gsap.timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: "main",
    //     //   pin: true,   // pin the trigger element while active
    //     //   start: "top top", // when the top of the trigger hits the top of the viewport
    //     //   end: "+=500", // end after scrolling 500px beyond the start
    //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     //   snap: {
    //     //     snapTo: "labels", // snap to the closest label in the timeline
    //     //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //     //   }
    //     }
    //   });
    
    // add animations and labels to the timeline
    // scrollTimeline.addLabel("start")
    //   .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
    //   .addLabel("color")
    //   .from(".box", {backgroundColor: "#28a92b"})
    //   .addLabel("spin")
    //   .to(".box", {rotation: 360})
    //   .addLabel("end");

    function setFx(sectionIndex, sectionIndexPrev) {
        console.log(`setFX: Activate section${sectionIndex} and deactivate section${sectionIndexPrev}`)

        let fxChange = gsap.timeline({ 
            defaults: {
                duration: .5,
                ease: "circ" 
          },
        });

        fxChange
            .to(fxWrapper, {
                opacity: 0,
                onComplete: () => {
                    startFx(sectionIndex)
                    endFx(sectionIndexPrev)
                }
            })
            .to(fxWrapper, {
                opacity: 1,
            })
    }

    // helper: start a new background FX
    function startFx(sectionIndex) {
        switch (sectionIndex) {
            case 0:
                document.getElementById("hero-video").play();
                document.querySelector("[data-videooverlay]").style.opacity = 1;
                
                s1fx = new S1FX();
                crowdPleaser.setSliders(s1fx, "Colors", 1, 5, 3, "Pattern", 1, 100, 50)
            break;
            case 1:
                s2fx = new S2FX();
                crowdPleaser.setSliders(s2fx, "Angle", 1, 360, 360, "Speed", 2, 50, 10)
            break;
            case 2:
                // console.log("Section 3: onEnter")
            break;
            default:
                console.log("function startFx(): no section with this index")
            break;
       }
    }

    // helper: end/destroy a background FX
    function endFx(sectionIndex) {
        switch (sectionIndex) {
            case 0:
                document.getElementById("hero-video").pause();
                document.querySelector("[data-videooverlay]").style.opacity = 0;
                s1fx.destroy();
            break;
            case 1:
                s2fx.destroy();
            break;
            case 2:
                // console.log("Section 3: onLeave")
            break;
            default:
                console.log("function endFx(): no section with this index")
            break;
       }
    }
}