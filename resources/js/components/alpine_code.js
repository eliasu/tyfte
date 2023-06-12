
export const alpine1 = () => ({
    open: false,

    toggle() {
        this.open = !this.open;
    },
    newAni(el) {},
    init() {},
});

export const texti = () => ({
    expanded: [],


    toggle(event) {
        const el = event.srcElement;
        console.log(textiObj);
        const target = el.parentElement.querySelector("[data-textify]");
        const pos = Array.from(textiObj.elements).findIndex(
            (el) => el == target
        );
        textiObj.animations[pos].animateIn();
        console.log(pos);
    },
});

export const test = () => ({
  open: false,
  // init() {
  //   console.log("initializing");
  //   console.log(this.$el);
  // },
  
  toggle() {
    console.log("toggle");
    this.open = !this.open;
    console.log(this.open);
    // console.log($parent);
    // $parent.msg();
    // console.log(test);
    // console.log(mytest());
    // console.log(open);
  },
  // handleClick(data) {
  handleClick() {

    // If you want to access magic methods or properties from a component object, you can do so using the this context:


    console.log("handle");
    console.log(this);
    this.$data.openEl = this.$el;
    // console.log(data.mytest());
    // data.mytest();
  }

  
});

export const outer = () => ({
  openEl: '',
  mytest() {
    console.log("msg");
    console.log(this);
  }
  

  
});
