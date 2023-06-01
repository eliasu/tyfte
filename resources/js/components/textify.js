import Animations from 'textify.js';
const { Textify } = Animations;

// const Textify = Animations.Textify();


export default function test() {
  console.log("fuck");

  const textObj = new Textify({
    selector: '[data-content="1"]',
    duration: 1000,
    stagger: 100,
    fade: true,
    once: false,
  });


}