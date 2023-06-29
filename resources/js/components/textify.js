/**
 * all textify animation 
 * import with "import * as ani from "./textify";"
**/

import Animations from '../c-textify/src/index';

const { Textify } = Animations;

export const accordion_no_obs = new Textify({
   selector: '[data-type="accordion_no_obs"]',
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

// export const infoTitleAnim = new Textify({
//    selector: '#info-title',
//    duration: 800,
//    stagger: 40,
//    rotation: 20,
//    scale:  .3,
//    easing: "elasticInOut",
//    transformOrigin: "left top",
//    reveal: true,
//    threshold: 0.1,
//    once: true,
   
//    noObserver: false,
// });


