/**
 * preloader component
 * import with "import initPreloader from './components/preloader';"
**/
import lottie from 'lottie-web';


export default function initPreloader() { 
    console.log("** init preloader from /components/background.js **")
    
    const animation = lottie.loadAnimation({
        container: document.getElementById('preloader-lottie'), // Specify the container element
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/files/lottie/tyfte_logo_lottie.json', // Specify the path to your animation JSON file
    });

    animation.onComplete = function() {
        document.getElementById('preloader').classList.add("fin");
      }
}

