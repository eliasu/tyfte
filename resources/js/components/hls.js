/**
 * hls component
 * import with "import initHLS from './components/hls';"
**/

import Hls from 'hls.js'


export default function initHLS() { 

    // Function to handle the video loading process
    function loadOrPlayVideo(videoElement) {
        
        // Check if the video has been loaded initially
        const loadedInitially = videoElement.getAttribute('data-hls-loaded');
        
        // if its already loaded, just play the video
        if(loadedInitially) {
            videoElement.play()
            return;
        }

        // get the src of the video
        const videoSrc = videoElement.getAttribute('data-hls');

        // Check if the data-hls-lazy attribute is "false"
        const noLazyLoad = videoElement.getAttribute('data-hls-lazy') === 'false';

        // if its not lazy load, or it is, but its in view right away
        if (noLazyLoad || isElementInViewport(videoElement)) {
            
            // use native hls support if possible
            if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                
                // append the src and play the video
                videoElement.src = videoSrc;
                videoElement.play();
                
                // set the attribute to prevent double loading
                videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
                printElement(videoElement);
            } 
            
            // use hls.js
            else if (Hls.isSupported()) {
                const hls = new Hls();
                
                // do hls.js magic and play the video
                hls.loadSource(videoSrc);
                hls.attachMedia(videoElement);
                videoElement.play();
                
                // set the attribute to prevent double loading
                videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
                printElement(videoElement);
            }
        }
    }

    // Function to check if an element is in the viewport (on init)
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Load and/or play the video when it's in view, but only if it hasn't been loaded initially
                    loadOrPlayVideo(videoElement);
                } else {
                    // Pause the video when it's out of view
                    videoElement.pause();
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
    
    // if its already loaded, just play the video
    if(loadedInitially) {
        return;
    }

    // get the src of the video
    const videoSrc = videoElement.getAttribute('data-hls');

    // Check if the data-hls-lazy attribute is "false"
    const noLazyLoad = videoElement.getAttribute('data-hls-lazy') === 'false';

    // if its not lazy load, or it is, but its in view right away
    if (noLazyLoad || isElementInViewport(videoElement)) {

        // use native hls support if possible
        if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            
            // append the src and play the video
            videoElement.src = videoSrc;
            
            // set the attribute to prevent double loading
            videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
            printElement(videoElement);
        } 
        
        // use hls.js
        else if (Hls.isSupported()) {
            const hls = new Hls();
            
            // do hls.js magic and play the video
            hls.loadSource(videoSrc);
            hls.attachMedia(videoElement);
            
            // set the attribute to prevent double loading
            videoElement.setAttribute('data-hls-loaded', 'true'); // Mark as loaded initially
            printElement(videoElement);
        }
    }
}

// helper
function printElement(videoElement) {
    console.log("##########");
    console.log("loaded element:");
    console.log(videoElement);
    console.log("##########");
    console.log("##########");
}