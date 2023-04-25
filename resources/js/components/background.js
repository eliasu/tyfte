/**
 * background component
 * import with "import initBackground from './components/background';"
**/
import { gsap } from "gsap";

export default function initBg() { 
    console.log("** init tyfte logo from /components/background.js **")
    addBackgroundFollower()
}

function addBackgroundFollower() {
    
    const dotgridBig = document.querySelector('#dotgridBig')

    // Check if the device supports touch input
    const isTouchDevice = 'ontouchstart' in document.documentElement;

    // If the device supports touch input replace mouse follower with random animation
    if (isTouchDevice) {
        console.log("set to touch device")

        function moving () {
            gsap.to(dotgridBig, {
                '--bgx': `${Math.floor(Math.random() * 100)}%`,
                '--bgy': `${Math.floor(Math.random() * 100)}%`,
                duration: 2,
                ease: 'sine.out'
            })
        };
        
        moving();
        setInterval(moving, 2000);
    }

    // If the device doesn't support touch input, add an event listener for the "mousemove" event
    else {
        console.log("set to desktop")

        // Mouse follower
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e
            const x = Math.round((clientX / window.innerWidth) * 100)
            const y = Math.round((clientY / window.innerHeight) * 100 )
            
            gsap.to(dotgridBig, {
                '--bgx': `${x}%`,
                '--bgy': `${y}%`,
                '--bgsize': `${Math.floor(Math.random() * 550) + 150}`,
                duration: 2,
                ease: 'sine.out'
            })
        })
 
    }
}