/**
 * section 1 component
 * import with "import { S1FX } from './section_1';"
**/
// import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min'

export class S1FX {

    constructor() {
        this.resizeTimeout = null;
        this.s1fx = null;
        this.init()
    }

    init() {
        const s1fxConst = VANTA.FOG({
            el: "#sectionFx1",
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

        this.s1fx = s1fxConst;
        
        window.addEventListener('resize', () => {
            this.resizeTimeout = setTimeout(function() {
                s1fxConst.resize()
                // console.log(s1fxConst)
            }, 400);
        });
    }

    changeColor(num) {
        // console.log(this.s1fx)
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
        
        // this.s1fx.setOptions({
        //     baseColor: 0xff88cc
        // })

        // this.s1fx.resize()
    }

    mapRange(num, inMin, inMax, outMin, outMax) {
        let result = (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        console.log(result);
        return result;
    }

    changePattern(num) {
        this.s1fx.setOptions({
            blurFactor: this.mapRange(num, 0,100,.2,1.6),
            speed: this.mapRange(num, 0,100,.8,2.8),
            zoom: this.mapRange(num, 0,100,.9,.3)
        })
    }
}




