/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initScroller() { 
    console.log("** init scroller from /components/scroller.js **")

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("[data-section]");

    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: "[data-container]",
    //         pin: true,
    //         scrub: 1,
    //         // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    //         snap: {
    //             snapTo: 1 / (sections.length - 1), // snap to the closest label in the timeline
    //             duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //             delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
    //             ease: "linear", // the ease of the snap animation ("power3" by default)
    //             directional: false,
    //         },
    //         // base vertical scrolling on how wide the container is so it feels more natural.
    //         end: "+=500",
    //     }
    // });
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "[data-container]",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
            end: () => "+=" + document.querySelector("[data-container]").offsetWidth,
            directional: false,
        }
    });


    // let tl = gsap.timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: "[data-section]",
    //       pin: true,   // pin the trigger element while active
    //       start: "top top", // when the top of the trigger hits the top of the viewport
    //       end: "+=500", // end after scrolling 500px beyond the start
    //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //       snap: {
    //         snapTo: "labels", // snap to the closest label in the timeline
    //         duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //       }
    //     }
    //   });
    
    // // add animations and labels to the timeline
    // tl.addLabel("start")
    //   .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
    //   .addLabel("color")
    //   .from(".box", {backgroundColor: "#28a92b"})
    //   .addLabel("spin")
    //   .to(".box", {rotation: 360})
    //   .addLabel("end");
}