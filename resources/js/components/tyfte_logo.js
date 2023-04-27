/**
 * tyfte logo component
 * import with "import initCrowdPleaser from './components/tyfte_logo';"
**/
import { gsap } from "gsap";

export default function initTfyteLogo() { 
    console.log("** init tyfte logo from /components/tyfte_logo.js **")
    addBgMask();
}

function addBgMask() {
    
    const homeLink = document.querySelector('#homeLink')
    const eggMask = document.querySelector('.eggMask')
    
    // Check if the device supports touch input
    const isTouchDevice = 'ontouchstart' in document.documentElement;

    // If the device supports touch input replace mouse follower with random animation
    if (isTouchDevice) {
        console.log("set tyfte_logo.js to touch device")

        // set initial state of the hover egg
        gsap.set('.eggMask', {
            scale: 0,
            transformOrigin: '50% 50%',
        })
    }

    // If the device doesn't support touch input, add an event listener for the "mousemove" event
    else {
        console.log("set tyfte_logo.js to desktop")

        // set initial state of the hover egg
        gsap.set('.eggMask', {
            scale: 0,
            transformOrigin: '50% 50%',
        })

        function rotating () {
            gsap.to('.eggYellow', {
                // rotate clw or cclw for a random number
                rotation: `+=${Math.floor(Math.random() * 75) * (Math.random() < 0.5 ? -1 : 1) }`,
                duration: .5,
                ease: 'sine.inOut'
            })
        };

        // the yellow from the egg gets big on hover
        let animation = gsap.to(".eggMask", {
            paused: true,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });
    
        // mouse listeners for detecting hover
        homeLink.addEventListener("mouseenter", () => animation.play() );
        homeLink.addEventListener("mouseleave", () => animation.reverse() );

        // Mouse follower
        homeLink.addEventListener("mousemove", (e) => {
            const { x, y } = homeLink.getBoundingClientRect();
            let newX = e.clientX - parseInt(x) - (eggMask.clientWidth / 2) - parseInt(20);
            let newY = e.clientY - parseInt(y) - (eggMask.clientHeight / 2) - parseInt(10);
            rotating()
            
            gsap.to('.eggMask', {
                x: newX,
                y: newY,
                duration: 0.3,
                ease: 'sine.out'
            })
        });
 
    }
}