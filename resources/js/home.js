import initLoveCounter from './components/love_counter';
import initWorkSlider from './components/work_slider';
import initHero from './components/hero';
import initContact from './components/contact';

import MediaPlayer from 'dashjs';

// if document is interactive
document.addEventListener('readystatechange', (event) => {
	initLoveCounter();
    initHero();
    initWorkSlider();
    initContact();
});