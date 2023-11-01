/**
 * preloader component
 * import with "import initInfoSection from './components/infoSection';"
**/
import lottie from 'lottie-web';


export default function initInfoSection() { 
    console.log("** init info section from /components/infoSection.js **")

    // Function to handle intersection changes
    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            const element = entry.target;
            const animation = element._lottieAnimation; // Retrieve the Lottie animation instance

            if (entry.isIntersecting) {
                // Element is in view
                animation.play(); // Play the Lottie animation
                element.style.opacity = 1; // Set opacity to 1 when playing
            } else {
                // Element is out of view
                animation.pause(); // Stop the Lottie animation
                element.style.opacity = 0.3; // Set opacity to 0.3 when not playing
            }
        });
    };

    const elementsWithLottieData = document.querySelectorAll('[data-lottie]');

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0,
    });

    function updateAnimationPaths() {
        elementsWithLottieData.forEach((element) => {
            
            const animationPath = window.innerWidth < 680 ? element.getAttribute('data-lottie-small') : element.getAttribute('data-lottie');
            const animation = element._lottieAnimation;

            if (animation) {
                
                // check if animation is allready loaded
                if (animationPath.includes(animation.fileName) ) {
                    
                    // dont do anything if animation is allready present
                    return;
                }
                
                // if there is a different breakpoint delete the old animation
                animation.destroy(); // Destroy the previous animation instance
            }

            // Create a new Lottie animation for each element
            const newAnimation = lottie.loadAnimation({
                container: element,
                renderer: 'canvas',
                loop: true,
                autoplay: true,
                path: animationPath,
            });

            element._lottieAnimation = newAnimation; // Store the new animation instance
            observer.observe(element); // Start observing the element
        });
    }

    // Initial update of animation paths
    updateAnimationPaths();

    // Bind an event listener to window resize
    window.addEventListener('resize', updateAnimationPaths);
}

