/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CrowdPleaser } from './crowd_pleaser';

import { S1FX } from './S1FX';

export default function initScroller() { 
    gsap.registerPlugin(ScrollTrigger);

    // initialize first FX on load
    window.s1fx = new S1FX();
    
    // init crowd pleaser
    let crowdPleaser = new CrowdPleaser();
    
    // init first crowdpleaser
    crowdPleaser.setSliders(s1fx, "Colors", 1, 5, 3, "Pattern", 1, 100, 50)

    // init horizontal scroller 
    let fxWrapper = document.getElementById("section-fx");
    let duration = 10
	let	sections = gsap.utils.toArray("[data-section]")
	let	sectionIncrement = duration / (sections.length - 1)
    
    // init scroll timeline
    let timelineMain = gsap.timeline({
        scrollTrigger: {
            trigger: "#scroll-container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            start: "top top",
            end: "+=5000",
            duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
        }
    });

    // scroll animation
    timelineMain.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none"
    });

    // add enter/leave callbacks
    sections.forEach((section, index) => {    
        
        // add the enter/leave callbacks for all sections
        addSectionCallbacks(timelineMain, {
            start: sectionIncrement * (index - 0.99),
            end: sectionIncrement * (index + 0.99),
            onEnter: function() { 
                setFx( index, index-1 )
            },
            // onLeave: function() { 
            //     setFx( index, index-1 )
            // },
            onEnterBack: function() { 
                setFx( index, index+1 )
            },
            // onLeaveBack: function() { 
            //     setFx( index, index+1 )
            // },
        });
    });

    // helper function for setting callbacks 
    // that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
    function addSectionCallbacks(timeline, {start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack}) {
        let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
            let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
                prevTime = animation.time();
            animation.direction = animation.reversed() ? -1 : 1;
            animation.eventCallback("onUpdate", () => {
            let time = animation.time();
            if (prevTime !== time) {
                animation.direction = time < prevTime ? -1 : 1;
                prevTime = time;
            }
            onUpdate && onUpdate.call(animation);
            });
        },
        empty = v => v; // in case one of the callbacks isn't defined
        timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
        start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
        end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
    }

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
                crowdPleaser.setSliders(s1fx, "Angle", 1, 360, 180, "Speed", 1, 10, 5)
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
                // console.log("Section 2: onLeave")
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