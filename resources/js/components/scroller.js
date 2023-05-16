/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
**/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CrowdPleaser } from './crowd_pleaser';

import { S1FX } from './section_1';

export default function initScroller() { 
    gsap.registerPlugin(ScrollTrigger);

    let duration = 10,
		sections = gsap.utils.toArray("[data-section]"),
		sectionIncrement = duration / (sections.length - 1),
		timelineMain = gsap.timeline({
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
                startFx(index)
            },
            onLeave: function() { 
                endFx(index)
            },
            onEnterBack: function() { 
                startFx(index)
            },
            onLeaveBack: function() { 
                endFx(index)
            },
        });
    });

    // helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
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

    function startFx(sectionIndex) {
        switch (sectionIndex+1) {
            case 1:
                document.getElementById("hero-video").play();
                document.querySelector("[data-videooverlay]").style.opacity = 1;
                
                window.s1fx = new S1FX();
                let crowdPleaser = new CrowdPleaser();
                
                document.getElementById("section-fx").classList.remove("opacity-0")
                crowdPleaser.setSliders(s1fx, "Colors", 1, 5, 3, "Pattern", 1, 100, 50)
            break;
            case 2:
                // console.log("Section 2: onEnter")
            break;
            case 3:
                // console.log("Section 3: onEnter")
            break;
       }
    }
    function endFx(sectionIndex) {
        switch (sectionIndex+1) {
            case 1:
                document.getElementById("hero-video").pause();
                document.querySelector("[data-videooverlay]").style.opacity = 0;
                s1fx.destroy();
                document.getElementById("section-fx").classList.add("opacity-0")
            break;
            case 2:
                // console.log("Section 2: onLeave")
            break;
            case 3:
                // console.log("Section 3: onLeave")
            break;
       }
    }
}


 // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: scrollContainer,
    //         markers: true,
    //         pin: true,
    //         scrub: 1,
    //         snap: {
    //             snapTo: 1 / (sections.length - 1), // snap to the closest label in the timeline
    //             duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //             delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
    //             directional: false,
    //         },
    //     },
    // });

    // gsap.to("#textus", {
    //     x: "500px",
    //     scrollTrigger: {
    //         trigger: "#s3",
    //         start: "top 50px",
    //     },
    // });