import Animations from '../c-textify/src/index';

const { Textify } = Animations;


export default function textifyStart() {
  
  const textObj = new Textify({
    duration: 800,
    stagger: 40,
    rotation: 20,
    scale: .3,
    easing: "elasticInOut",
    transformOrigin: "left top",
    reveal: true,
    threshold: 0.1,
    once: false, 
    noObserver: true,
  });

  window.tfx = textObj;
}