import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'

import initPreloader from './components/preloader';
import initTyfteLogo from './components/tyfteLogo';
import initDotgrid from './components/dotgrid';
import initMouse from './components/mouse';
import initHandleVisibility from './components/handleVisibility';
import initSurveyForm from './components/surveyForm';

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
    initSurveyForm();
 });

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initTyfteLogo();
	initDotgrid();
    initMouse();
    initHandleVisibility();
    initPreloader();
});