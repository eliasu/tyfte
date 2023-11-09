import initLoveCounter from './components/love_counter';
import initWorkSlider from './components/workSlider';
import initHero from './components/hero';
import initContact from './components/contact';
import initInfoSection from './components/infoSection';


// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initLoveCounter();
    initHero();
    initWorkSlider();
    initContact();
    initInfoSection();
});