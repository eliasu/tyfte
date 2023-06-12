// import { ani1, ani2 } from "./textify";
import * as ani from "./textify";


export const inner = () => ({
  textifyAni: '',
  open() {
    // console.log(this.$el, this.$data.openEl);
    const isSelectedInParent = (this.$el == this.$data.openEl);

    

    return isSelectedInParent;
  },

  handleClick() {
    console.log("handle");
    this.$data.openEl = this.$el;
    // console.log(data.mytest());
    // data.mytest();
  }

  
});

export const outer = () => ({
  openEl: '', 
});
