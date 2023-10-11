/**
 * lovecounter component
 * import with "import initLoveCounter from './components/love_counter';"
**/

import axios from 'axios';

export default function initLoveCounter() { 
    console.log("** init love counter from /components/love_counter.js **")
    let loveBtn = document.querySelector("#love")
    let span = document.getElementById('loveCount');
    let animtimer;

    function emphasize(response) {
        span.classList.add('loveEmphasis');
        span.innerText = response.data;
        clearTimeout(animtimer)
        animtimer = setTimeout(clear, 1500);
    }

    function clear() {
        span.classList.remove('loveEmphasis');
    }

    
    if(!loveBtn) {
        console.log("**** love button disabled!"); 
        return;
    }

    loveBtn.addEventListener("click", function() {
        
        // use axios for posting the form and define a route in routes/web.php 
        axios.post('update-number')
        .then(function(response) {
            emphasize(response);            
        })
        .catch(function(error) {
            console.error('Error updating number:', error);
        });
    });

}
