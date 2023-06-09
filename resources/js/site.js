import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
// import MediaPlayer from 'dashjs';

import {init as alpineInit} from './components/alpine_code';
alpineInit();

import scroller from './components/scroller';


import startTextify from './components/textify';
// startTextify();
// scroller();



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