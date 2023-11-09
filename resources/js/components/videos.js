/**
 * hls component
 * import with "import initHLS from './components/hls';"
**/

export default function initVideos() { 

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, 
    };

    // Find all video elements with ecept for the background video
    const videoElements = document.querySelectorAll('video:not(#hero-bg-video)');

    // Create Intersection Observer for each video element
    videoElements.forEach((videoElement) => {

        // load all elements that are in view and play them
        if(isElementInViewport(videoElement) ) {
            videoElement.play();
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        }, options);

        // Start observing each video element
        observer.observe(videoElement);
    });

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
}
