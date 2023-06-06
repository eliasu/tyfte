// import Prefix from "../vendors/prefix";
// import * as Prefix from "../vendors/prefix";
import Prefix from "../vendors/prefix";
// import Prefix from "../vendors/prefix";
// import Prefix from "../vendors/prefix";
// const Prefix = require("../vendors/prefix");
import { isBrowser } from "../utils";

export default class Animation {
    constructor({ element, elements }) {
        console.log("-----------------custom SCR WOOOOOOW build");
        const { animationDelay, animationTarget } = element.dataset;

        this.delay = animationDelay;
        this.element = element;
        this.elements = elements;
        this.repeat = false;

        this.target = animationTarget
            ? element.closest(animationTarget)
            : element;
        this.transformPrefix = Prefix("transform");

        this.isVisible = false;

        this.threshold = 0.5;

        // this.doViewportObs = this.options.doViewportObs;

        console.log("this animation", this);

        if (this.doViewportObs) {
            if (isBrowser && "IntersectionObserver" in window) {
                this.createObserver();

                this.animateOut();
            } else {
                this.animateIn();
            }
        }
    }

    createObserver() {
        if (isBrowser) {
            this.observer = new window.IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!this.isVisible && entry.isIntersecting) {
                            this.animateIn();
                            this.repeat
                                ? observer.unobserve(entry.target)
                                : null;
                        } else {
                            this.animateOut();
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: this.threshold,
                }
            ).observe(this.target);
        }
    }

    animateIn() {
        this.isVisible = true;
    }

    animateOut() {
        this.isVisible = false;
    }
}
