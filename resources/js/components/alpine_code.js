
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
  handleClick(data) {
    console.log("handle");
    // console.log(data.mytest());
    data.mytest();
  }

  
});

export const outer = () => ({
  open: false,
  mytest() {
    console.log("msg");
    console.log(this);
  }
  

  
});
