/**
 * preloader component
 * import with "import initInfoSection from './components/infoSection';"
**/


export default function initInfoSection() { 
  console.log("** init info section from /components/infoSection.js **")

  // Get all elements with the data-video attribute
  const videoElements = document.querySelectorAll('[data-video]');

  // Function to load and play videos
  function loadAndPlayVideo(element) {
      let small = window.innerWidth < 640;

      const videoSrcAttribute = small ? 'data-video-small' : 'data-video';
      const videoSrc = element.getAttribute(videoSrcAttribute);
      element.src = videoSrc;

      // Stop observing the old element and start observing the new one
      videoObserver.unobserve(element);
      videoObserver.observe(element);
  }

  // Add a resize listener to log "big" or "small" when the viewport changes
  window.addEventListener('resize', () => {
    if( checkBreakpoint() ) {
      videoElements.forEach((element) => {
        loadAndPlayVideo(element); // Load and play videos initially
      });
    }
  });

  let isSmallViewport = window.innerWidth < 640;

  function checkBreakpoint() {
    const newIsSmallViewport = window.innerWidth < 640;

    if (newIsSmallViewport !== isSmallViewport) {
      isSmallViewport = newIsSmallViewport;
      return true;
    }
  }

  // Function to pause and play videos based on visibility
  function handleVideoVisibility(entries) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.style.opacity = 1;
      } else {
        entry.target.pause();
        entry.target.style.opacity = .3;
      }
    });
  }

  // Use Intersection Observer to monitor video visibility
  const videoObserver = new IntersectionObserver(handleVideoVisibility, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust the threshold as needed
  });

  videoElements.forEach((element) => {
    loadAndPlayVideo(element); // Load and play videos initially
    videoObserver.observe(element);
  });
}

