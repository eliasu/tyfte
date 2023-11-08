/**
 * hls component
 * import with "import initHLS from './components/hls';"
**/

import Hls from 'hls.js'

export default function initHLS() { 
    console.log("** init hls from /components/hls.js **")
    
    // Function to handle the video loading process
    function loadVideo(videoElement) {
        const videoSrc = videoElement.getAttribute('data-hls');
        
        // Check if the data-hls-lazy attribute is "false"
        const lazyLoad = videoElement.getAttribute('data-hls-lazy') === 'false';

        // If data-hls-lazy is "false" or the video is in view, load the video
        if (lazyLoad || isElementInViewport(videoElement)) {
            if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                videoElement.src = videoSrc;
                console.log("##########")
                console.log("loaded element:")
                console.log(videoElement)
                console.log("##########")
                console.log("##########")
            } else if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(videoElement);
                console.log("##########")
                console.log("loaded element:")
                console.log(videoElement)
                console.log("##########")
                console.log("##########")
            }
        }
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Find all video elements with data-hls attribute
    const videoElements = document.querySelectorAll('video[data-hls]');

    // Create Intersection Observer for each video element
    videoElements.forEach((videoElement) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Load the video when it's in view
                    loadVideo(videoElement);
                    // Stop observing after loading
                    observer.disconnect();
                }
            });
        });

        // Start observing each video element
        observer.observe(videoElement);
    });
}   