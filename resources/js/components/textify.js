// import Animations from 'textify.js';
// import Animations from '/Users/hanneshoepfner/Documents/Projekte/tyfte/tyfte/node_modules/textify.js/src/index.js';
import Animations from '../c-textify/src/index';

const { Textify } = Animations;

// const Textify = Animations.Textify();


export default function textifyStart() {
  // console.log("fuck");

  // const textObj = new Textify({
  //   selector: '[data-content="1"]',
  //   duration: 1000,
  //   stagger: 200,
  //   fade: false,
  //   top: false,
  //   once: false,
  //   rotation: 20,
  //   easing: "elasticInOut",
  //   fadeDuration: 700,
  //   fadeEasing: "easeInOut",
  //   threshold: 0.5,
  //   transformOrigin: "left top",
  //   reveal: true,
  //   observer: false,


  // });

  const textObj = new Textify({
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

  window.texti = textObj;


  console.log(textObj);

  // const lenis = new Lenis();

  // const lenis = new Lenis({
  //   duration: 1.2,
  //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  // });





//   lenis.on('scroll', (e) => {
//   console.log(e)
// })




  // textObj.hide();


}