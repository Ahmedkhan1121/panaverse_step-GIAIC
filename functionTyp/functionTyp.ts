//Functions

import { reduceEachLeadingCommentRange } from "typescript";

//Function Decralation
function name1(){
    console.log("Hello World");
};
name1();

//Function Expression
let funcExp = function () {
    console.log('Function Expression');
};
funcExp();

//Arrow Function
let arrwFunc = () => console.log("Arrow Function");
arrwFunc();

//Function with Parameters and Arguments
//jab hum function ko define kar rahe huto hum parameter dalte he
function add1(a:number,b:number){
    console.log(a+b);
};
add1(5,5);

//Function with return
function retrnValue(a:number,b:number){
    return a/b;
};
let retrn = retrnValue(10,2);
console.log(retrn);





let arrwFunc2 = () => {
    console.log(1);
    console.log(2);
    console.log(3);
};
arrwFunc2();

let arrwFunc3 = (a:number,b:number) => {
    console.log(a+b);
}
arrwFunc3(5,5);
//Function with optional parameter
let optnlParam = (a:number,b?:number):number|undefined => {
    return b;
};
let optParm:number|undefined =optnlParam(4); 
console.log(typeof optParm);

//Function with Default parameter

let defaltParam = (a:number= 10) => {
    console.log(a);
};
defaltParam(20);

//Function without Default parameter
function withOutDefltParm(a:number):number{
    if(a === undefined){
       return  a = 10;
    };
    return a;
};
let witOutDefltPrm =  withOutDefltParm(40);
console.log(witOutDefltPrm);

//rest parameter
let parameter2 = (...a:number[]):number => {
    let reduce = a.reduce((prev , curr) => {
        return prev+curr;
    },0)
    return reduce;
};
console.log(parameter2(2,3,4,5));

let parameter3 = (...a:string[]):string[] => {
return a;
}
console.log(parameter3("hello world", "muiz", "ashar", "ahmed"));
























