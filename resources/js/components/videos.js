/**
 * videos component
 * import with "import initVideos from './components/videos';"
**/

// create objection observers for hero video and work section
// play hero video if in vew
// play active work slides video if on view

export default function initVideos() { 

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: .1, 
    };

    let heroVideo = document.querySelector('#hero-video')
    let workSection = document.querySelector('#work')
    let slider = document.querySelector('#swiper')

    let callbackHero = (entries, observer) => {
        entries.forEach((entry) => {
            
            let playPromise
            if (entry.isIntersecting) {
                
                playPromise = entry.target.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                    })
                    .catch(error => {
                    });
                }
            } else {
                entry.target.pause();
            }
        });
    };
    
    let callbackWork = (entries, observer) => {
        entries.forEach((entry) => {
            
            let playPromise
            let video = slider.swiper.slides[slider.swiper.activeIndex].querySelector("video")

            if (entry.isIntersecting) {
                
                playPromise = video.play()

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                    })
                    .catch(error => {
                    });
                }
            } else {
                video.pause();
            }
        });
    };

    let observerHero = new IntersectionObserver(callbackHero, options) 
    let observerWork = new IntersectionObserver(callbackWork, options) 

    // Start observing hero video 
    observerHero.observe(heroVideo);
    
    // Start observing work section
    observerWork.observe(workSection);

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
