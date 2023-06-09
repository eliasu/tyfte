let textifyVar = {
  a: [1,2,3],
  b: [1,2,3]
}


export function init() {
  console.group("textify init");
 console.log(`ìnitializing textify with`);
 console.log(textifyVar);
 console.groupEnd();
}

export function mystate() {
  console.group("textify state");
  
  console.log(`textify with:`);
  console.log(textifyVar);
  console.groupEnd();
}

export function getData() {
  return textifyVar;
}

export function DoSomething() {
  console.warn("changed values");
  textifyVar.a = ["changed"]
  textifyVar.c = ["added"]
}