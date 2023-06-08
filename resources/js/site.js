import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
// import MediaPlayer from 'dashjs';

import {initScroller} from './components/scroller';


import {textifyStart} from './components/textify';
textifyStart();
initScroller();

window.state = {};

debugger
import {init, myvar, setit} from './components/test1';
import {init as init2} from './components/test2';

init();
init2();
// myvar = 44;
// init2();
setit();
console.log(window.state);




// Global get CSRF token function (used by forms).
window.getToken = async () => {
    return await fetch('/!/statamic-peak-tools/dynamic-token/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch((error) => {
            this.error = 'Something went wrong. Please try again later.'
        })
}

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.start()




function check() {
    console.log("test");
}