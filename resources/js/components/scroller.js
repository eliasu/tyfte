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
    setFx(0,99)

    // add enter/leave callbacks
   // TODO

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