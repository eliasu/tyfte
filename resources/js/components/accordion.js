/**
 * accordion component
 * import with "import initAccordion from './components/accordion';"
**/


export class Accordion {

    constructor() {
        this.items = document.querySelector('[data-type="accordion-item"]');
        this.init()
    }

    init() {
        console.log("** init accordion from /components/accordion.js **")
        

        window.tfx
        this.items.forEach(element => {
            element.addEventListener("mouseenter", (event) => { this.show(event.target); });    
        });

        
        this.slider_1.addEventListener("mouseleave", (event) => { this.showAll(); });
    
        this.slider_2.addEventListener("mouseenter", (event) => { this.show(event.target); });
        this.slider_2.addEventListener("mouseleave", (event) => { this.showAll(); });
    }

}