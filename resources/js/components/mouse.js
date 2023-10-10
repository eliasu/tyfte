/**
 * lovecounter component
 * import with "import initMouse from './components/mouse';"
**/

import { gsap } from "gsap";

export default function initMouse() { 
    console.log("** init mouse from /components/mouse.js **")

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e
        const x = Math.round((clientX / window.innerWidth) * 100)
        const y = Math.round((clientY / window.innerHeight) * 100 )

        gsap.to("#mouseFollower", {
            left: `${x}%`,
            top: `${y}vh`,
            duration: 1,
            ease: 'sine.out'
        })
    })

    const shrinkLinks = document.querySelectorAll('[data-mouse-shrink]');
        shrinkLinks.forEach(link => {
            link.addEventListener('mouseenter', shrinkMouseFollower );
            link.addEventListener('mouseleave', resetMouseFollower );
    });

    function shrinkMouseFollower() {
        gsap.to("#mouseFollower", {
            scale: .2,
            duration: .5,
            ease: 'cubic-bezier(.34,.11,.43,.99)',
            // borderWidth: "10px", // Animate the border width
            backgroundColor: "rgb(228 106 98)",
        })
    }
    
    function resetMouseFollower() {
        gsap.to("#mouseFollower", {
            scale: 1,
            duration: .5,
            ease: 'cubic-bezier(.34,.11,.43,.99)',
            // borderWidth: "0px", // Animate the border width
            backgroundColor: 'rgb(142 99 226)',
        })
    }

}
