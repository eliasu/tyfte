import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
import MediaPlayer from 'dashjs';

import initPreloader from './components/preloader';
import initTyfteLogo from './components/tyfte_logo';
import initDotgrid from './components/dotgrid';
import initLoveCounter from './components/love_counter';
import initWorkSlider from './components/work_slider';
import initMouse from './components/mouse';

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
Alpine.start()

// if DOMContent has loaded
window.addEventListener("DOMContentLoaded", (event) => {
	console.log("Welcome to tyfte.de")
	initPreloader();
    initWorkSlider();
 });

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initTyfteLogo();
	initDotgrid();
	// initLoveCounter();
    initMouse();
});