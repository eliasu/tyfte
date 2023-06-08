/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CrowdPleaser } from './crowd_pleaser';

import { S1FX } from './S1FX';
import { S2FX } from './S2FX';

import textifyJs from 'textify.js'

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

    // get hero video
    let heroVideo = document.getElementById("hero-video")

    // fx change timeline
    let fxChange = gsap.timeline({
        defaults: {
            duration: .5,
            ease: "circ",
        }
    });

    // initialize first FX on load: setFX(effectToStart, effectToEnd)
    setFx(0,99)

    // add enter/leave callbacks
    // TODO

    // create scroll triggers for sections
    // gsap.utils.toArray("[data-section]").forEach(function(elem) {
        
    //     ScrollTrigger.create({
    //         trigger: elem,
    //         markers: true,
    //         onEnter: (i,el) => { console.log(`onEnter Section: ${getSectionNum(i)}`) }, 
    //         onEnterBack: (i,el) => { console.log(`onEnterBack Section: ${getSectionNum(i)}`) }, 
    //         // onLeave: (i,el) => { console.log(`onLeave Section: ${getSectionNum(i)}`) }, 
    //         // onLeaveBack: (i,el) => { console.log(`onLeaveBack Section: ${getSectionNum(i)}`) }, 
    //     });
    // });



    let heroSectionTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#sectionHero",
            start: "50 top ",
            end: "bottom top",
            markers: true,
            // scrub: 1,
            toggleActions: "play pause resume reverse",
            // onEnterBack: () => setFx(0,1),
            // onLeave: () => setFx(1,0),
            ease: "circ",
        }
    });

    heroSectionTL.addLabel("step1")

    heroSectionTL.to("#heroContentWrapper", {
        opacity: 0,
        y: "-100%",
    } ,"step1" )
    
    heroSectionTL.to("#heroScrollCta", {
        opacity: 0,
        y: "20%",
    } ,"step1" )
    
    heroSectionTL.to("[data-videooverlay]", {
        opacity: 0,
    } ,"step1")




    gsap.set("#section1Content", {
        opacity: 0,
    })

    let section1TL = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            start: "top 95%",
            end: "100%",
            markers: true,
            toggleActions: "play pause resume reset",
            // scrub: 1,
            onEnter: () => setFx(1,0),
            onLeaveBack: () => setFx(0,1),
        }
    });

    // section1TL.to("#section1Content", {
    //     opacity: 1,
    // })

    let section1BU = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1Content",
            start: "top top",
            end: "bottom top",
            markers: true,
            toggleActions: "play pause resume reverse",
        }
    });

    section1BU.to("#section1Content", {
        opacity: 1,
    })





    
    let pBar = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            start: "top top",
            end: "100%",
            scrub: 1,
        }
    });

    pBar.from("[data-type='progress']", {
        scaleX: 0,
    })

    



    function getSectionNum(elem) {
        return elem.trigger.querySelector("[data-content]").dataset.content
    }


    function setFx(sectionIndex, sectionIndexPrev) {
        console.log(`setFX: Activate section${sectionIndex} and deactivate section${sectionIndexPrev}`)
        // startFx(sectionIndex)
        // endFx(sectionIndexPrev)
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
                s1fx = new S1FX();
                crowdPleaser.setSliders(s1fx, "Colors", 1, 5, 3, "Pattern", 1, 100, 50)
                heroVideo.play();
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
                s1fx.destroy();
                heroVideo.pause();
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