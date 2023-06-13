import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CrowdPleaser } from "./crowd_pleaser";
// import Lenis from "@studio-freight/lenis";
// window.Lenis = Lenis;
gsap.registerPlugin(ScrollTrigger);

export 

export function initScroller() {
    // const lenis = new Lenis({
    //     duration: 1.1,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });

    // lenis.on("scroll", ScrollTrigger.update);

    // gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    // });

    initSectionTweens();
    /** for skewing */
    // initImgSkew();
    // initTextifyAnimate();
}


function initTextifyAnimate() {
    gsap.utils.toArray("[data-textify]").forEach(function (elem, index) {
        // console.log(elem);


        ScrollTrigger.create({
            scroller: "main",
            trigger: elem,
            markers: true,
            start: "top center",
            end: "bottom top",
            scrub: 1,
            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
                window.texti.animations[index].animateIn();
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);
                window.texti.animations[index].animateOut();
            },
            onLeaveBack: (i, el) => {
                // console.log(`leaving ${index}`);
                window.texti.animations[index].animateOut();
            },
            onEnterBack: (i, el) => {
                window.texti.animations[index].animateIn();
                // console.log(`onEnterBack ${index}`);
            },
        });
    });
}

function initImgSkew() {
    let proxy = { skew: 0 }, skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    const skewTest = ScrollTrigger.create({
        scroller: "main",
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.8,
                    ease: "power3",
                    overwrite: true,
                    onUpdate: () => { skewSetter(proxy.skew); },
                });
            }
        },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
}

function initSectionTweens() {

    const sections = gsap.utils.toArray('section[data-srollTrigger]');
    const tweens = new Array(sections.length);

    tweens[0] =  gsap.to("#background", {
        backgroundColor: "rgb(63 31 64)",
    });
    tweens[2] =  gsap.to("#background", {
        backgroundColor: "rgb(11 11 41)",
    });

    sections.forEach(function (elem, index) {
      
        ScrollTrigger.create({
            animation: tweens[index],
            scroller: "main", //necessary for native scroll snapping
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
                refreshStartValues(tweens, index + 1);
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

// function handleScrollSnapping(scrollDir) {
//     console.log(scrollDir, prevScrollDir);

//     if (prevScrollDir != scrollDir) {
//         console.log("change dir");
//         // document.documentElement.style.setProperty('--scrollSnapAlign', "none");
//         document.documentElement.style.setProperty("--scrollSnapAlign", "none");

//         setTimeout(setPrevScrollDir(scrollDir), 10);
//     }

//     // }

//     // if(self.direction == 1 && scrollDir != 1) {
//     //     console.log("forward");
//     //     document.documentElement.style.setProperty('--scrollSnapAlign', "none");

//     //     setTimeout(function() {
//     //         // Code, der erst nach 2 Sekunden ausgeführt wird
//     //         // console.log("aftertimeout");
//     //         if(self.direction == 1 && scrollDir != 1){
//     //             console.warn("setting");
//     //             scrollDir = 1;
//     //             document.documentElement.style.setProperty('--scrollSnapAlign', "start");
//     //         }
//     //       }, 50);

//     // }
// }

// function setPrevScrollDir(dir) {
//     if (prevScrollDir != dir) {
//         console.warn(`setting prev ${dir}`, prevScrollDir);
//         prevScrollDir = dir;

//         if (dir - 1) {
//             document.documentElement.style.setProperty(
//                 "--scrollSnapAlign",
//                 "end"
//             );
//         } else {
//             document.documentElement.style.setProperty(
//                 "--scrollSnapAlign",
//                 "start"
//             );
//         }
//     }
// }

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

