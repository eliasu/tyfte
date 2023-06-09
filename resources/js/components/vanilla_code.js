let module_var = "###module value####";

export class myClass {
    constructor() {
        this.val = "set";
        this.init();
    }

    init() {
        console.log(`initializing:`);
        console.log(this);
    }

    setval(val) {
      this.val = val;
    }
}

export function someVanillaFunc() {
  console.log(`some vanilla func with module var: ${module_var}`);

}

export function setModuleVar(val) {
  module_var = val;
}
export function getModuleVar(val) {
  return module_var;
}
