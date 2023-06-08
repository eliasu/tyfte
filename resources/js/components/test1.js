export let myvar = 10;
const myvar_obj = {};

export function init() {
  myvar = 5;
  myvar_obj.test = 500;
  window.state.test1 = myvar;
  window.state.test1obj = myvar_obj;
}

export function setit() {
  myvar = 100;
  myvar_obj.test = 200;
}