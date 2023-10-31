/**
 * handleVisibility component
 * import with "import initHandleVisibility from './components/handleVisibility';"
 * pauses videos and lottie animations if you loose the focus of the window
**/

import lottie from 'lottie-web';

export default function initHandleVisibility() { 
    console.log("** init handleVisibility from /components/handleVisibility.js **")
    
    // Array to keep track of paused videos
    const pausedVideos = [];
    const pausedLotties = [];

    // Function to pause all playing videos on the page
    function pauseAllVideos() {
        const videos = document.querySelectorAll('video');
        const lotties = document.querySelectorAll('[data-lottie]');
        
        videos.forEach((video) => {
            if (!video.paused) {
                video.pause();
                pausedVideos.push(video); // Add to pausedVideos array
            }
        });
        
        lotties.forEach((lottieAni) => {
            let animation = lottieAni._lottieAnimation;
            
            if (!animation.isPaused) {
                animation.pause();
                pausedLotties.push(lottieAni); // Add to pausedVideos array
            }
        });

        console.log(`there are ${pausedVideos.length} videos paused`)
        console.log(`there are ${pausedLotties.length} lottie animations paused`)
    }

    // Function to play videos that were paused
    function playPausedVideos() {
        console.log(`there are ${pausedVideos.length} videos played again`)
        console.log(`there are ${pausedLotties.length} lottie animations played again`)

        pausedVideos.forEach((video) => {
            video.play();
        });
        
        pausedLotties.forEach((lottieAni) => {
            let animation = lottieAni._lottieAnimation;
            animation.play();
        });
        
        pausedVideos.length = 0; // Clear the array
        pausedLotties.length = 0; // Clear the array

    }

    // Add an event listener for visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            // Document is not visible, so pause all playing videos
            pauseAllVideos();
        } else if (document.visibilityState === 'visible') {
            // Document is visible again, play videos that were paused
            playPausedVideos();
        }
    });
}