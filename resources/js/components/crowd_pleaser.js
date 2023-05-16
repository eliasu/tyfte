/**
 * crowd pleaser component
 * import with "import initCrowdPleaser from './components/crowd_pleaser';"
**/

import { gsap } from "gsap";

export class CrowdPleaser {

    constructor() {
        this.valDim= .2;
        
        this.crowdpleaser = document.querySelector('#crowdpleaser');
        this.slider_h = document.querySelector('#cp_headline');
        
        this.slider_1 = document.querySelector('#cp_slider_1');
        this.slider_1_label = document.querySelector('#cp_slider_1_label');
        this.slider_1_input = document.querySelector('#cp_slider_1_input');
        
        this.slider_2 = document.querySelector('#cp_slider_2');
        this.slider_2_label = document.querySelector('#cp_slider_2_label');
        this.slider_2_input = document.querySelector('#cp_slider_2_input');
        
        this.content = document.querySelectorAll('[data-content]');
        
        this.init()
    }

    init() {
        console.log("** init crowd pleaser from /components/crowd_pleaser.js **")
        
        this.slider_1.addEventListener("mouseenter", (event) => { this.show(event.target); });
        this.slider_1.addEventListener("mouseleave", (event) => { this.showAll(); });
    
        this.slider_2.addEventListener("mouseenter", (event) => { this.show(event.target); });
        this.slider_2.addEventListener("mouseleave", (event) => { this.showAll(); });
    }

    // set names, values and the corresponding function for both sliders
    setSliders(fxObj, name1, min1, max1, value1, name2, min2, max2, value2,) {
        this.rename(name1, name2)
        this.setValues(min1, max1, value1, min2, max2, value2) 
        this.setFx(fxObj)
    }
    

    // helper functions    

    // pass fx object (mandatory: functions "changeParam1" and "changeParam2")
    setFx(fxObj) {
        this.slider_1_input.addEventListener("input", (event) => {             
            fxObj.changeParam1(parseInt(event.target.value))
        });
        
        this.slider_2_input.addEventListener("input", (event) => {             
            fxObj.changeParam2(parseInt(event.target.value))
        });
    }

    rename(name1, name2) {
        // emphasize the crowd pleaser on the change
        let newCrowdPleaser = gsap.timeline({ 
            defaults: {
                duration: .3,
                ease: "circ" 
          },
        });

        newCrowdPleaser
            .to("#crowdpleaser", {
                scale: 0.8,
                opacity: 0,
                onComplete: () => {
                    this.slider_1_label.innerHTML = name1;
                    this.slider_2_label.innerHTML = name2;
                }
            })
            .to("#crowdpleaser", {
                scale: 1,
                opacity: 1,
            })        
    }

    setValues(min1, max1, value1, min2, max2, value2) {
        this.slider_1_input.min = min1;
        this.slider_1_input.max = max1;
        this.slider_1_input.value = value1;
        
        this.slider_2_input.min = min2;
        this.slider_2_input.max = max2;
        this.slider_2_input.value = value2;
    }

    showAll = () => {
        this.slider_h.style.opacity = 1;
        this.slider_1.style.opacity = 1;
        this.slider_2.style.opacity = 1;
        
        this.content.forEach(element => {
            element.classList.remove("blur-md")
        });
    }
    
    show = (slider) => {
        this.slider_h.style.opacity = this.valDim;
        this.slider_1.style.opacity = this.valDim;
        this.slider_2.style.opacity = this.valDim;
        slider.style.opacity = 1;

        this.content.forEach(element => {
            element.classList.add("blur-md")
        });
    }
}