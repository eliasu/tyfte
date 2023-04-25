/**
 * crowd pleaser component
 * import with "import initCrowdPleaser from './components/crowd_pleaser';"
**/

export default function initCrowdPleaser() { 
    console.log("** init crowd pleaser from /components/crowd_pleaser.js **")

    let valDim= .2;

    let slider_h = document.querySelector('#cp_headline');
    let slider_1 = document.querySelector('#cp_slider_1');
    let slider_2 = document.querySelector('#cp_slider_2');
    
    let patternsSlider;
    let colorsSlider;
  
    slider_1.addEventListener("mouseenter", (event) => { show(event.target); });
    slider_1.addEventListener("mouseleave", (event) => { showAll(); });
    slider_1.querySelector('input').addEventListener("input", (event) => { setSliderValue(event.target); });
 
    slider_2.addEventListener("mouseenter", (event) => { show(event.target); });
    slider_2.addEventListener("mouseleave", (event) => { showAll(); });
    slider_2.querySelector('input').addEventListener("input", (event) => { setSliderValue(event.target); });

    const showAll = () => {
        slider_h.style.opacity = 1;
        slider_1.style.opacity = 1;
        slider_2.style.opacity = 1;
    }
    
    const dimAll = () => {
        slider_h.style.opacity = valDim;
        slider_1.style.opacity = valDim;
        slider_2.style.opacity = valDim;
    }

    const show = (slider) => {
        dimAll();
        slider.style.opacity = 1;
    }

    const setSliderValue = (slider) => {
        switch (slider.id) {
            case "patterns-silder":
                patternsSlider = slider.value;
                console.log("The patterns slider: " + patternsSlider)
            break;
            case "colors-silder":
                colorsSlider = slider.value;
                console.log("The colors slider: " + colorsSlider)
            break;
            default:
                console.error("no sliders in the dom")
            break;
        }
    }   
}