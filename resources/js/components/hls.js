/**
 * hls component
 * import with "import initHLS from './components/hls';"
**/

import Hls from 'hls.js'


export default function initHLS() { 

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, 
    };

    // Find all video elements with data-hls attribute
    const videoElements = document.querySelectorAll('video[data-hls]');

    // Create Intersection Observer for each video element
    videoElements.forEach((videoElement) => {
        
        // load all elements without hls-lazy option (but dont play it)
        if(videoElement.getAttribute('data-hls-lazy') === 'false') {
            load(videoElement);
        }

        // load all elements that are in view and play them
        if(isElementInViewport(videoElement) ) {
            load(videoElement);
            play(videoElement);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    load(videoElement);
                    play(videoElement);
                } else {
                    pause(videoElement);
                }
            });
        }, options);

        // Start observing each video element
        observer.observe(videoElement);
    });
}

// Function to handle the video loading process
export function loadVideo(videoElement) {

    // Check if the video has been loaded initially
    const loadedInitially = videoElement.getAttribute('data-hls-loaded');
    
    // if its already loaded, stop here
    if(loadedInitially) return false;

    // get the src of the video
    const videoSrc = videoElement.getAttribute('data-hls');

    // use native hls support if possible
    if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        
        // append the src and play the video
        videoElement.src = videoSrc;
        
        // set the attribute to prevent double loading
        videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
    } 
    
    // use hls.js
    else if (Hls.isSupported()) {
        const hls = new Hls();
        
        // do hls.js magic and play the video
        hls.loadSource(videoSrc);
        hls.attachMedia(videoElement);
        
        // set the attribute to prevent double loading
        videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
    }
    // has loaded
    return true;
}

// Function to check if an element is in the viewport (on init)
export function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// helper
function load(videoElement) {
    if(loadVideo(videoElement)) {
        console.log("loaded")
        console.log(videoElement)
    }
}

// helper
function play(videoElement) {
    videoElement.play()
}

// helper
function pause(videoElement) {
    videoElement.pause()
}