import initLoveCounter from './components/love_counter';
import initWorkSlider from './components/workSlider';
import initContact from './components/contact';
import initInfoSection from './components/infoSection';
import initVideos from './components/videos'

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initLoveCounter();
    initWorkSlider();
    initContact();
    initInfoSection();
    initVideos();
});