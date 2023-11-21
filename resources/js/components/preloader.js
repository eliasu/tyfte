/**
 * preloader component
 * import with "import initPreloader from './components/preloader';"
**/

export default function initPreloader() { 
    console.log("** init preloader from /components/preloader.js **")
    let elem = document.getElementById('preloader')
    if(elem) elem.classList.add("fin");
}

