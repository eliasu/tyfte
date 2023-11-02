/**
 * lovecounter component
 * import with "import initLoveCounter from './components/love_counter';"
**/

import axios from 'axios';
import { gsap } from "gsap";

export default function initLoveCounter() { 
    console.log("** init love counter from /components/love_counter.js **")

    const loveButton = document.getElementById("love");
    const mainElement = document.querySelector("#lovecontainer");
    
    const maxLoveDivs = 25;
    const dur = 6;
    const padding = 0;
    
    const loveDivs = [];
    const pathToGif = "/files/gif/lovecat_big.gif";

    loveButton.addEventListener("click", () => {

        // get number from backend
        axios.post('update-number')
            .then(function(response) {
                if (loveDivs.length >= maxLoveDivs) {
                    const oldestLoveDiv = loveDivs.shift();
                    cleanup(oldestLoveDiv);
                }
                createLoveDiv(response);
            })
            .catch(function(error) {
                console.error('Error updating number:', error);
        });
    });

    function createLoveDiv(response) {
        const loveDiv = document.createElement("div");
        loveDiv.className = "love-div";
        
        // hide it before its positioned to prevent flickering
        loveDiv.style.opacity = 0;
        
        const loveCount = document.createElement("p");
        loveCount.innerText = response.data;
        loveDiv.appendChild(loveCount);
        
        const loveGif = document.createElement("img");
        loveGif.src = pathToGif;
        loveGif.className = "love-gif";

        loveGif.addEventListener("load", () => {
            
            // Set the initial position to the left of the viewport and its width
            loveDiv.style.left = `-${loveDiv.offsetWidth}px`;
            
            // unhide the main element
            loveDiv.style.opacity = 1;

            // Set the top position within the viewport
            const maxTop = window.innerHeight - loveDiv.offsetHeight - padding;
            const randomY = Math.floor(Math.random() * maxTop);

            loveDiv.style.top = randomY + "px";
            

            // Animate the love div from the left to the right of the viewport
            gsap.fromTo(loveDiv, { x: '0' }, { x: window.innerWidth + loveDiv.offsetHeight + 100, duration: dur, onComplete: () => cleanup(loveDiv) });

            loveDivs.push(loveDiv);
        });

        loveDiv.appendChild(loveGif);
        mainElement.appendChild(loveDiv);
        
    }

    function cleanup(loveDiv) {
        loveDiv.remove();
        gsap.killTweensOf(loveDiv);
        const index = loveDivs.indexOf(loveDiv);
        if (index > -1) {
            loveDivs.splice(index, 1);
        }
    }
}
