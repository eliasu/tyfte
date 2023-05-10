/**
 * section 1 component
 * import with "import initSection1 from './components/section_1';"
**/
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three';

export default function initSection1() { 
    console.log("** init section 1 from /components/section_1.js **")
    addSectionBackground()
}

function addSectionBackground() {
    // VANTA.FOG({
    //     el: "[data-section1]",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00
    // })
}
