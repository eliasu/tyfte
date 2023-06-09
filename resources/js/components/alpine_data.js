/**
 * Alpine x-data extends
 * import with "import * as alpine from './components/alpine_data';"
**/
import Animations from '../c-textify/src/index';

export const textFx = (selector, time=1000, noObserver=false, initializeWithIndex=null) => ({    
    
    init() {
        if(initializeWithIndex != null) this.show(initializeWithIndex)
    },
    
    textEffect: new Textify({
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
        selector: selector,
    }),

    show(num=0) {
        this.textEffect.animations[num].animateIn()
    },
  
    hide(num=0) {
        this.textEffect.animations[num].animateOut()
    },
})