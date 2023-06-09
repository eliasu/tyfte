/**
 * accordion component
 * import with "import { Accordion } from './components/accordion';"
**/
import Animations from '../c-textify/src/index';

export class Accordion {

    constructor(selector, noObserver=false, time=1000) {
        console.log(`Init Text effect for following selector: ${selector}`)
        
        this.textObj = new Textify({
            duration: time,
            stagger: 50,
            rotation: 20,
            scale: .3,
            easing: "elasticInOut",
            transformOrigin: "center bottom",
            reveal: true,
            threshold: 0.2,
            once: false, 
            noObserver: noObserver,
            selector: [data-type="accordion-item"],
        });
    }

    show(num) {
        this.textObj.animations[num].animateIn()
    }

    hide(num) {
        this.textObj.animations[num].animateOut()
    }
}


// window.tfx = new Accordion('[data-type="accordion-item"]', true)
// window.tfx2 = new Accordion('[data-type="headline-obs"]' )
// window.tfx3 = new Accordion('[data-type="tag"]', false, 3000)

// tfx.show(2)