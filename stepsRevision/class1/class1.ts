//Strong Typing
let a:number = 45;

let b = "Hello World"; //Type Inference

//var
//it can be redeclared
//it can be reaasign
var c = "hi";
c = "hello";
var c = "helo";

//let
//it can not be redeclared
//but it can be reaasign
let d = [1,2,3,4,5,6,7];
d = [1,2];
// let d = [1,2,4];

//const
//it can not be redeclared
//it can not be reaasign
const e = 234;
// e =90
// const e = 23

let isCondBlck = true;
if(isCondBlck){
    
    let abd = "Helo ABD"; //block Scope
    const amd = 'Helo AMD'; //block Scope
    var adb = 'helo ADB'; //function Scope
};
// console.log(abd);
// console.log(amd);
console.log(adb);

function funcScpoe(){
    var elm = "Hello World"; //Function Scope
    let elm2 = "i";  //block Scope
    const elm3 = "j"; //block Scope 

};
console.log(elm);
console.log(eml2);