//let
let name5 = "Hello World";
// update variable in let is possible and let does not redeclared
name5 = "Hel";
//const 
const name6 = 46;
// const does not update and redecraled
// name6 = 46;
let isCond = true;
//{} is a blocks
if (isCond) {
    //let is a block scope
    let age = 45;
    console.log(age);
    //const is a block
    const personName = "Ahmed";
}
;
for (let i = 1; i <= 10; i++) {
    let ages = 1;
    console.log(ages++);
}
//Using Var
// Var is a Function Scope
// if(isCond){
//     var age = 40;
// }
// console.log(age);
var inc = 1;
for (let i = 1; i <= 10; i++) {
    console.log(inc++);
}
export {};
