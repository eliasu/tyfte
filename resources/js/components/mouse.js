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
}
