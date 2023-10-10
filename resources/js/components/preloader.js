/**
 * preloader component
 * import with "import initPreloader from './components/preloader';"
**/
import lottie from 'lottie-web';


export default function initPreloader() { 
    console.log("** init preloader from /components/hero.js **")
    
    // check if preloader exists
    let preloader = document.getElementById('preloader-lottie');
    if(!preloader) {
        console.log("**** preloader disabled!"); 
        return;
    }

    const animation = lottie.loadAnimation({
        container: preloader, // Specify the container element
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/files/lottie/tyfte_logo_lottie.json', // Specify the path to your animation JSON file
    });

    // fadeout the pre´loader and start the video
    animation.onComplete = function() {
        document.getElementById('preloader').classList.add("fin");
        document.getElementById("hero-bg-video").play();
        
        let heroVideo = document.getElementById("hero-video");
        if(heroVideo) heroVideo.play();
      }
}

