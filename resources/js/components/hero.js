/**
 * hero component
 * import with "import inithero from './components/hero';"
**/

export default function initHero() { 
    console.log("** init hero from /components/hero.js **")
    
    // Get the hero video element by its ID
    const heroVideo = document.getElementById('hero-video');

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0, // Trigger when at least 50% of the video is in view
    };

    // Create an Intersection Observer with the callback function and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the video element
    observer.observe(heroVideo);
}

// Callback function to handle intersections
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        // console.log(entry.target)
        if (entry.isIntersecting) {
            // Video is in view, so play it if the window is active
            if (document.visibilityState === 'visible') {
                playVideo(entry.target);
            }
        } else {
            // Video is out of view, so pause it
            entry.target.pause();
        }
    });
}

// helper function to prevent video to be played if there is no valid source
function playVideo(videoElem) {
    // Check if the video element has its meta data loaded
    if (videoElem.readyState >= videoElem.HAVE_METADATA) {
        // Play the video
        videoElem.play();
    } else {
        // The source is not ready yet, so wait for it to be loaded
        videoElem.addEventListener('loadedmetadata', () => {
            // console.log(`***source for ${videoElem} loaded. Now playing …`)
            videoElem.play();
        });
    }
}