//// fUNCTION OVERlOADING
// function addOver(a:number,b:number):number;
// function addOver(a:string,b:string):string;
// function addOver(a:boolean,b:boolean):boolean;
// function addOver(a:any,b:any):any {
//     return a+b;
//  };
// // // console.log(addOver(5,5));
// // // console.log(addOver("Hello", " World"));
//  console.log(addOver(false, true));
function overLoad(a, b) {
    return a + b;
}
console.log(overLoad("hello".toLowerCase(), "world".toUpperCase()));
export {};
