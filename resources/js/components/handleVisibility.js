/**
 * handleVisibility component
 * import with "import initHandleVisibility from './components/handleVisibility';"
**/

export default function initHandleVisibility() { 
    console.log("** init handleVisibility from /components/handleVisibility.js **")
    
    // Array to keep track of paused videos
    const pausedVideos = [];

    // Function to pause all playing videos on the page
    function pauseAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            if (!video.paused) {
                video.pause();
                pausedVideos.push(video); // Add to pausedVideos array
            }
        });
        console.log(`there are ${pausedVideos.length} videos paused`)
    }

    // Function to play videos that were paused
    function playPausedVideos() {
        console.log(`there are ${pausedVideos.length} videos played again`)
        
        pausedVideos.forEach((video) => {
            video.play();
        });
        pausedVideos.length = 0; // Clear the array
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