export const alpine1 = () => ({
  open: false,

  toggle() {
      this.open = ! this.open
  }
})


export const alpine2 = () => ({
  field: "some information",

  my_method() {
      console.log("do someting");
  }
})


// export default () => ({
//   open: false,

//   toggle() {
//       this.open = ! this.open
//   }
// })