import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'
// import MediaPlayer from 'dashjs';

// import {initScroller} from './components/scroller';


// import {textifyStart} from './components/textify';
// textifyStart();
// initScroller();

// window.state = {};

// debugger
// import * as vanilla from './components/vanilla_code';
import {myClass, someVanillaFunc, setModuleVar} from './components/vanilla_code';
import * as scroller from './components/scroller_code';
import * as textify from './components/textify_code';
import { alpine1, alpine2 } from './components/alpine_code';


const class_instance = new myClass();
class_instance.setval("updated value from site.js");
someVanillaFunc();
scroller.init();
textify.init();
setModuleVar("set from site.js");
someVanillaFunc();
scroller.mystate();
textify.mystate();
textify.DoSomething();
scroller.mystate();
textify.mystate();



// Alpine.data('my_property_name', alpine1) 
// Alpine.data('dropdown', alpine1) 
// Alpine.start()




// Global get CSRF token function (used by forms).
window.getToken = async () => {
    return await fetch('/!/statamic-peak-tools/dynamic-token/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch((error) => {
            this.error = 'Something went wrong. Please try again later.'
        })
}

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.start()

