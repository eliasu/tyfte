import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
import MediaPlayer from 'dashjs';

import initPreloader from './components/preloader';
import initTyfteLogo from './components/tyfte_logo';
import initDotgrid from './components/dotgrid';
// import {initScroller} from './components/scroller';
import './components/scroller_sections';
import initLoveCounter from './components/love_counter';


// Alpine x-data extends
import * as alpine from './components/alpine_data';

// create sitewide Object.
window.vla = {}

// initScroller();




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

Alpine.data('textFx', alpine.textFx) 

Alpine.start()

// if DOMContent has loaded
window.addEventListener("DOMContentLoaded", (event) => {
	console.log("Welcome to tyfte.de")
	initPreloader();
 });

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initTyfteLogo();
	initDotgrid();
	initLoveCounter();
	// initScroller();
});