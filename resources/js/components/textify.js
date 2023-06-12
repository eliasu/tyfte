// import Animations from 'textify.js';
// import Animations from '/Users/hanneshoepfner/Documents/Projekte/tyfte/tyfte/node_modules/textify.js/src/index.js';
import Animations from '../c-textify/src/index';

const { Textify } = Animations;

// const Textify = Animations.Textify();



  export const ani1 = new Textify({
    selector: '#ani-1',
    duration: 800,
    stagger: 40,
    rotation: 20,
    scale:  .3,
    easing: "elasticInOut",
    transformOrigin: "left top",
    reveal: true,
    threshold: 0.1,
    once: false,
    
    noObserver: true,
  });

  export const ani2 = new Textify({
    selector: '#ani-2',
    duration: 200,
    stagger: 40,
    rotation: 6,
    scale:  3,
    easing: "elasticInOut",
    transformOrigin: "left top",
    reveal: true,
    threshold: 0.1,
    once: false,
    
    noObserver: true,
  });



