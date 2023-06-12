// import { ani1, ani2 } from "./textify";
import * as ani from "./textify";


export const inner = () => ({
  textifyAni: '',
  get open() {
    const isSelectedInParent = (this.$el == this.$data.selected);
    return isSelectedInParent;
  },
  init() {
    const allAnimations = [...ani.ani1.animations, ...ani.ani2.animations];
    const aniTarget = this.$el.querySelector('p');

    this.$watch('open', value => this.open ? this.textifyAni.animateIn() : this.textifyAni.animateOut());

    const matchingAni = allAnimations.find(el => el.element == aniTarget);
    this.textifyAni = matchingAni;     
  },

  handleClick() {
    this.$data.selected = this.$el;
  }

});

