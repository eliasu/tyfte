import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
import MediaPlayer from 'dashjs';
import './components/S3FX';

import initPreloader from './components/preloader';
import initTyfteLogo from './components/tyfte_logo';
import initDotgrid from './components/dotgrid';
import initLoveCounter from './components/love_counter';

import './components/scroller_sections';
import './components/scroller_info';
import './components/swiper';

// Alpine x-data extends
import * as alpine from './components/alpine_data';

// create sitewide Object.
window.vla = {}

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

Alpine.data('accordion_states', alpine.accordion_states) 

Alpine.start()

// if DOMContent has loaded
window.addEventListener("DOMContentLoaded", (event) => {
	console.log("Welcome to tyfte.de")
	// initPreloader();
 });

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initTyfteLogo();
	initDotgrid();
	// initLoveCounter();
});