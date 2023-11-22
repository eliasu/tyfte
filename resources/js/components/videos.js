/**
 * videos component
 * import with "import initVideos from './components/videos';"
**/

export default function initVideos() { 

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: .5, 
    };

    // Find all video elements with ecept for the background video
    const videoElements = document.querySelectorAll('video:not(#hero-bg-video)');

    // Create Intersection Observer for each video element
    videoElements.forEach((videoElement) => {
        //  a fix for chrome and safari
        let playPromise

        
        // load all elements that are in view and play them
        if(isElementInViewport(videoElement) ) {
            playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                })
                .catch(error => {
                });
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    playPromise = videoElement.play();

                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                        })
                        .catch(error => {
                        });
                    }
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
