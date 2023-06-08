/**
 * section 2 component
 * import with "import { S2FX } from './S2FX';"
**/

import { gsap } from "gsap";


export class S2FX {

    constructor() {
        // settings
        this.maxBigCount = 3;
        this.bigBaseSize = 640;
        this.size = 300;
        this.timeoutTime = 500;
        
        // get wrapper
        this.fxWrapper = document.getElementById("section-fx");
        
        // init variables
        this.grid;
        this.count;
        this.rows;
        this.cols;
        this.countBig;
        this.countBigPrev;
        this.timeoutId;
        this.height;
        this.width;
        this.tween;
        this.angles = ["data-fxgradient-a0", "data-fxgradient-a1", "data-fxgradient-a2", "data-fxgradient-a3", "data-fxgradient-a4", "data-fxgradient-a5", "data-fxgradient-a6", "data-fxgradient-a7" ]
        
        // fire init function
        this.init()
    }

    init() {
        this.gridCalc()

        window.addEventListener('resize', () => {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.gridCalc();
            }, this.timeoutTime);
        });
    }


    gridCalc() {        
        console.log("recalculating grid")
        
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        
        // set how much big squares there should be
        this.countBig = Math.min(Math.floor(this.width / this.bigBaseSize), this.maxBigCount);
        
        // if the window is less high than the base size, display no big square
        if(this.height < this.bigBaseSize) this.countBig = 0

        let rows = Math.max( Math.round(this.height / this.size), 1)
        let cols = Math.max( Math.round(this.width / this.size), 1)

        this.makeGrid(rows, cols)
    }

    makeGrid(rows, cols) {
        // dont execute if grid hasnt changed (on resize)
        if(this.count == rows*cols && this.countBig == this.countBigPrev) {
            console.log("nothing to change in the grid due to same count as before")
            return;
        }


        // set new values to mak a grid from
        this.rows = rows;
        this.cols = cols;
        this.count = rows*cols
        this.countBigPrev = this.countBig
        
        // calculate the count of all squares – big ones and regular ones
        let newCount = this.count - (this.countBig * 4) + this.countBig

        // if there is no grid container create onew
        if(document.getElementById("fx2grid") == undefined) {
            this.grid = document.createElement("div")
            this.grid.id = "fx2grid"
            this.grid.classList.add("w-full", "h-full", "grid", "grid-flow-col-dense")
            this.fxWrapper.appendChild(this.grid)
        }   
        
        // adjust rows and columns
        this.grid.style.setProperty("grid-template-rows", `repeat(${rows}, minmax(0, 1fr))`);
        this.grid.style.setProperty("grid-template-columns", `repeat(${cols}, minmax(0, 1fr))`);
        
        // delete all children
        this.grid.innerHTML = "";

        // calculate an array with the grid-order values of the big squares
        // let posBigSquares = this.generateRandomNumbers(newCount, this.rows, this.countBig )
        let posBigSquares = this.generateUniqueRandomNumbers(this.countBig, newCount - rows )
        
        console.log(`there are a total of ${newCount} squares with ${this.countBig} big squares. The big squares are on position ${posBigSquares}`)
        
        // create and append all the children
        for (let index = 0; index < newCount; index++) {
            let elem = document.createElement("div")
            elem.classList.add("w-full", "h-full")
            elem.setAttribute("data-fxgradient", "" );
            elem.setAttribute( this.getRandomAngle() , "" );

            // some elements are bigger
            if ( posBigSquares.includes(index) ) elem.classList.add("col-span-2", "row-span-2")

            // put all elements into an array
            this.grid.appendChild(elem)
        }
    
        // animation for the rotating concic gradient
        this.tween = gsap.to("[data-fxgradient]", {
            duration: 4,
            repeat: -1,
            "--angle": "+=45deg",
            ease: "ease",
            repeatRefresh: true,
        });
    }

    changeParam1(num) {
        document.querySelectorAll("[data-fxgradient]").forEach(element => {
            element.style.background = `conic-gradient(from var(--angle) at 50% 50%, #8E63E2 0deg, rgba(193, 117, 253, 0) ${num}deg)`;
            // element.style.background = `conic-gradient(from var(--angle) at 50% 50%, #4D4D4D 0deg, rgba(77, 77, 77, 0) ${num}deg)`;
        });

        console.log(num)
    }

    changeParam2(num) {
        this.tween.timeScale(num/10)
        console.log(num)
    }

    destroy() {
        this.grid.remove();
    }

    // get a random classname for different starting angles
    getRandomAngle() {
        let randomNumber = Math.floor(Math.random() * 8);
        return `data-fxgradient-a${randomNumber}`
    }

    // generate unique random numbers in a grid, while excluding the last row
    generateUniqueRandomNumbers(x, max) {
        
        // just a function to prevent errors if given values are wrong
        if (max + 1 < x) {
            throw new Error('Range is too small to generate unique random numbers.');
        }
        
        // create empty array
        let numbers = [];
        
        // calculate randowm unique numbers
        while (numbers.length < x) {
            let randomNum = Math.floor(Math.random() * (max + 1));
            
            if (!numbers.includes(randomNum)) {
              numbers.push(randomNum);
            }
        }
        
        return numbers;
    }
}