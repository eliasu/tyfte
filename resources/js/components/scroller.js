import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CrowdPleaser } from "./crowd_pleaser";
gsap.registerPlugin(ScrollTrigger);

export let sectionScrollTween = [];

export function initScroller() {
    initSectionTweens();
    initInfoSection();
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
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
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
                    onUpdate: () => {
                        skewSetter(proxy.skew);
                    },
                });
            }
        },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
}

function initSectionTweens() {
    // set combined scroll container to size of sections
    const sections = gsap.utils.toArray("section[data-scrollTrigger]");
    sectionScrollTween = [...Array(sections.length)];
    console.log(`We have ### ${sections.length} ### Sections`);

    const tweens = new Array(sections.length);

    // first section tween
    tweens[0] = gsap.to("#background", {
        backgroundColor: "rgb(63 31 64)",
    });

    // 3. section tween
    tweens[2] = gsap.to("#background", {
        backgroundColor: "rgb(11 11 41)",
    });

    // create scrolltrigger for each section
    sections.forEach(function (elem, index) {
        ScrollTrigger.create({
            animation: tweens[index],
            scroller: "main", //necessary for native scroll snapping
            trigger: elem,
            // markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,
           
            onEnter: (i, el) => {
                // console.log(`onEnter ${index}`);
            },
            onLeave: (i, el) => {
                // console.log(`leaving ${index}`);

                //  recalculating last tween state as start for next
                if (tweens[index + 1]) tweens[index + 1].invalidate();
            },
            onLeaveBack: (i, el) => {
                // console.log(`leaving ${index}`);
            },
            onEnterBack: (i, el) => {
                // console.log(`onEnterBack ${index}`);
            },
        });
    });

    // parsing the data for easier access
    sectionScrollTween = sectionScrollTween.map((el, index) => ({
        section: sections[index],
        tween: tweens[index],
        get progress() {
            this.tween.ScrollTrigger.progress;
        },
    }));
}

function initInfoSection() {
    /**
     *  - pin headline
     *  - change headline based on scroll
     * 
     */

    let st = ScrollTrigger.create({
        trigger: "#info-title",
        // trigger: "[data-section-1]",
        pin: "[data-test]",
        scroller: "main",
        start: "top center",
        // end: "bottom bottom",
        end: "bottom center",
        // end: "+=500",
        markers: true,
        // anticipatePin: true
        // pinSpacing: false,
        // pinReparent: true,
        pinReparent: true
        // scrub: 1
        // pinType: 'fixed',
      });

      console.log(st);
}