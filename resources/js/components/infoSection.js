/**
 * preloader component
 * import with "import initInfoSection from './components/infoSection';"
**/
import lottie from 'lottie-web';


export default function initPreloader() { 
    console.log("** init info section from /components/infoSection.js **")
    
    // check if preloader exists
    let lottie_temp = document.getElementById('info_lottie_1');
    
    if(!lottie_temp) {
        console.log("**** no infoanimation lottie container found!"); 
        return;
    }

    // load lottie JSON file
    const animation = lottie.loadAnimation({
        container: lottie_temp, // Specify the container element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/files/lottie/ani_stift.json', // Specify the path to your animation JSON file
    });
}

