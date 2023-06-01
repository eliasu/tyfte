import Animations from 'textify.js';

const { Textify } = Animations;

// const Textify = Animations.Textify();


export default function test() {
  console.log("fuck");

  const textObj = new Textify({
    selector: '[data-content="1"]',
    duration: 1000,
    stagger: 200,
    fade: false,
    top: false,
    once: false,
    rotation: 20,
    easing: "elasticInOut",
    fadeDuration: 700,
    fadeEasing: "easeInOut",
    threshold: 0.5,
    transformOrigin: "left top",
    reveal: true,


  });


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