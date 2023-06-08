/**
 * section 1 component
 * import with "import { S1FX } from './S1FX';"
**/
// import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min'

export class S1FX {

    constructor() {
        this.s1fx = null;
        this.init()
    }

    init() {
        this.s1fx = VANTA.FOG({
            el: "#section-fx",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xaa3232,
            midtoneColor: 0xa446a4,
            lowlightColor: 0x983035,
            baseColor: 0x270970,
            blurFactor: 0.90,
            speed: 1.80,
            zoom: 0.60
        })

        window.addEventListener('resize', this.s1fx.resize );
    }

    changeParam1(num) {
        switch (num) {
            case 1:
                this.s1fx.setOptions({
                    highlightColor: 0x13d256,
                    midtoneColor: 0xa01ad9,
                    lowlightColor: 0x252408,
                    baseColor: 0x7d1150,
                })
            break;
            case 2:
                this.s1fx.setOptions({
                    highlightColor: 0x308daa,
                    midtoneColor: 0xa446a4,
                    lowlightColor: 0xc0404,
                    baseColor: 0x8050f,
                })  
            break;
            case 3:
                this.s1fx.setOptions({
                    highlightColor: 0xaa3232,
                    midtoneColor: 0xa446a4,
                    lowlightColor: 0x983035,
                    baseColor: 0x270970,
                })  
            break;
            case 4:
                this.s1fx.setOptions({
                    highlightColor: 0xded818,
                    midtoneColor: 0x4a3104,
                    lowlightColor: 0x20100b,
                    baseColor: 0x0,
                })  
            break;
            case 5:
                this.s1fx.setOptions({
                    highlightColor: 0x18bbde,
                    midtoneColor: 0xa01ad9,
                    lowlightColor: 0x250f08,
                    baseColor: 0x113c7d,
                })  
            break;
        }
    }

    changeParam2(num) {
        this.s1fx.setOptions({
            blurFactor: this.mapRange(num, 0,100,.2,1.6),
            speed: this.mapRange(num, 0,100,.8,2.8),
            zoom: this.mapRange(num, 0,100,.9,.3)
        })
    }

    destroy() {
        if (this.s1fx) {
            this.s1fx.destroy()
            this.s1fx = null
        }
    }

    // helper functions
    mapRange(num, inMin, inMax, outMin, outMax) {
        let result = (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        console.log(result);
        return result;
    }
}




