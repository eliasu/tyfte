/**
 * scroller component for horicontal scrolling
 * import with "import initScroller from './components/scroller';"
 **/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CrowdPleaser } from "./crowd_pleaser";
import Lenis from "@studio-freight/lenis";
window.Lenis = Lenis;

let prevScrollDir = 0;

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

    const sectionTweens = [];
    sectionTweens.push(
        gsap.to("#bg-container", {
            backgroundColor: "red",
        })
    );

    sectionTweens.push(
        null
        // gsap.to("#bg-container", {
        //     backgroundColor: "green",
        // })
    );

    sectionTweens.push(
        gsap.to("#bg-container", {
            backgroundColor: "blue",
        })
    );

    console.log(sectionTweens);

    gsap.utils.toArray("section.section-dummy").forEach(function (elem, index) {
        console.log(elem);
        const correspondingSectionTween = sectionTweens[index];
        // if (!correspondingSectionTween) return;
        // let scrollDir = 0;


        ScrollTrigger.create({
            // trigger: "#s1",
            animation: correspondingSectionTween,
            scroller: "main",
            trigger: elem,
            markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
                // console.log(
                //     index,
                //     "progress:",
                //     self.progress.toFixed(3),
                //     "direction:",
                //     self.direction,
                //     "velocity",
                //     self.getVelocity()
                // );
                // handleScrollSnapping(self.direction);
            },

            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);
                // console.log(index);
                refreshStartValues(sectionTweens, index + 1);
            },
            onLeaveBack: (i, el) => {
                // console.log(`leaving ${index}`);
            },
            onEnterBack: (i, el) => {
                // console.log(`onEnterBack ${index}`);
            },
        });
    });
}

function refreshStartValues(tweens, index) {
    if (tweens[index]) tweens[index].invalidate();
}

function handleScrollSnapping(scrollDir) {

    console.log(scrollDir, prevScrollDir);

    if(prevScrollDir != scrollDir) {
        console.log("change dir");
        // document.documentElement.style.setProperty('--scrollSnapAlign', "none");
        document.documentElement.style.setProperty('--scrollSnapAlign', "none");
       
        setTimeout(setPrevScrollDir(scrollDir), 10);
        }

       
    // } 

    // if(self.direction == 1 && scrollDir != 1) {
    //     console.log("forward");
    //     document.documentElement.style.setProperty('--scrollSnapAlign', "none");

    //     setTimeout(function() {
    //         // Code, der erst nach 2 Sekunden ausgeführt wird
    //         // console.log("aftertimeout");
    //         if(self.direction == 1 && scrollDir != 1){
    //             console.warn("setting");
    //             scrollDir = 1;
    //             document.documentElement.style.setProperty('--scrollSnapAlign', "start");
    //         }
    //       }, 50);

       
       

    // }

}

function setPrevScrollDir(dir) {
    if(prevScrollDir != dir){
        console.warn(`setting prev ${dir}`, prevScrollDir);
        prevScrollDir = dir;

        if(dir -1) {
            
            document.documentElement.style.setProperty('--scrollSnapAlign', "end");
        } else {
            document.documentElement.style.setProperty('--scrollSnapAlign', "start");

        }
    }
}

window.changeBG = function (val) {
    switch (val) {
        case 1:
            gsap.to("#bg-container", {
                backgroundColor: "yellow",
            });

            break;
        case 2:
            gsap.to("#bg-container", {
                backgroundColor: "purple",
            });

            break;
        case 3:
            gsap.to("#bg-container", {
                backgroundColor: "black",
            });

            break;

        default:
            break;
    }
};
