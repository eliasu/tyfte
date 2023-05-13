import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
import MediaPlayer from 'dashjs';

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";

// gsap.registerPlugin(ScrollTrigger, Observer);

import initPreloader from './components/preloader';
import initCrowdPleaser from './components/crowd_pleaser';
import initTyfteLogo from './components/tyfte_logo';
import initBackground from './components/background';
import initScroller from './components/scroller';
import initLoveCounter from './components/love_counter';

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
 });

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initCrowdPleaser();
	initTyfteLogo();
	initBackground();
	initScroller();
	initLoveCounter();
});