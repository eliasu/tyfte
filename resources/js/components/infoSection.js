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
                element.style.opacity = 1; // Set opacity to 0.3 when not playing
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
        threshold: 0.3, // Trigger when at least 50% of the element is in view
    });

    elementsWithLottieData.forEach((element) => {
        const animationPath = element.getAttribute('data-lottie');

        // Create a Lottie animation for each element
        const animation = lottie.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: animationPath,
        });

        element._lottieAnimation = animation; // Store the animation instance for later use
        observer.observe(element); // Start observing the element
    });
}

