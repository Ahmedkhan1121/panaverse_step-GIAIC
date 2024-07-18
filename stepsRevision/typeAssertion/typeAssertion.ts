//Type Assertion
let ahmed:any = "Ahmed";
console.log((ahmed as string).toLowerCase());
console.log((ahmed as string).toUpperCase());

let ashar:unknown = "Ashar";
console.log((ashar as string).toUpperCase());
console.log((ashar as string).slice());

