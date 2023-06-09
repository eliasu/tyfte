import { getModuleVar, someVanillaFunc } from "./vanilla_code";
import { getData } from "./textify_code";

let scrollerVar = "##scroller var##";

export function init() {
    console.group("scroller init");
    console.log(
        `ìnitializing scroller with ${scrollerVar} imported ${getModuleVar()}`
    );
    console.log("textify", getData());
    console.groupEnd();
}

export function mystate() {
  console.group("scroller state");
    console.log(`scroller with ${scrollerVar} imported ${getModuleVar()}`);
    console.log("textify", getData());
    someVanillaFunc();
    console.groupEnd();
}
