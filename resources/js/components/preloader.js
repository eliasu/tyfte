/**
 * preloader component
 * import with "import initPreloader from './components/preloader';"
**/
import lottie from 'lottie-web';


export default function initPreloader() { 
    console.log("** init preloader from /components/background.js **")
    
    // check if preloader exists
    let preloader = document.getElementById('preloader-lottie');
    if(!preloader) console.log("**** preloader disabled!"); return;

    const animation = lottie.loadAnimation({
        container: preloader, // Specify the container element
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/files/lottie/tyfte_logo_lottie.json', // Specify the path to your animation JSON file
    });

    // fadeout the pre´loader and start the video
    animation.onComplete = function() {
        document.getElementById("hero-video").play();
        document.getElementById("hero-bg-video").play();
        document.getElementById('preloader').classList.add("fin");
      }
}

