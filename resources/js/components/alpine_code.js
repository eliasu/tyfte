// import { ani1, ani2 } from "./textify";
import * as ani from "./textify";


export const inner = () => ({
  textifyAni: '',
  get open() {
    const isSelectedInParent = (this.$el == this.$data.openEl);
    return isSelectedInParent;
  },
  init() {
    const allAnimations = [...ani.ani1.animations, ...ani.ani2.animations];
    const aniTarget = this.$el.querySelector('p');

    this.$watch('open', value => this.open ? this.textifyAni.animateIn() : this.textifyAni.animateOut());

    console.log("init");
    console.log(allAnimations);
    
    console.log(this.$el);
    console.log(aniTarget);
    // allAnimations.forEach(el => {
    //   console.log(el.element);
      
    // });
    const matchingAni = allAnimations.find(el => el.element == aniTarget);
    this.textifyAni = matchingAni; 

    console.log("matchin",matchingAni);

    
  },

  handleClick() {
    console.log("handle");
    this.$data.openEl = this.$el;

    console.log(this.textifyAni);

    // if (this.open) {
    //   console.log("open true");
    //   this.textifyAni.animateIn();
    // } else {
    //   console.log("open false");
    //   this.textifyAni.animateOut();
    // }
    // this.$nextTick(() => { this.open ? this.textifyAni.animateIn() : this.textifyAni.animateOut(); });

    
    // console.log(data.mytest());
    // data.mytest();
  }

  
});

export const outer = () => ({
  openEl: '', 
});
