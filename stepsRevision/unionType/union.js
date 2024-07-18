//Union Type 
let uin = "hello world";
uin = 45;
uin = true;
//uin = null;  //Because the variable is not assignable to null;
//Type Narrowing
//Using Function and if else
const typeNarowTwo = (str) => {
    if (typeof str === "string") {
        return str.toUpperCase();
    }
    else if (typeof str === "number") {
        return str.toFixed(2);
    }
    else if (typeof str === "boolean") {
        return str.valueOf();
    }
};
console.log(typeNarowTwo("hello world"));
console.log(typeNarowTwo(92));
//Using if else
// let str4:string|number|boolean = "hello world";
// if(typeof str4 === "string"){
//      console.log(str4.toUpperCase());
// }else if(typeof str4 === "number"){
//      console.log(str4.toFixed(2));
// }else if(typeof str4 === "boolean"){
//      console.log(str4.valueOf());
// };
//Type Literal
let ashar = "ashar";
ashar = "ashar";
ashar = "ashar";
let numLit = 50;
numLit = 30;
let boolLt = true;
let uninTypeAlis = 45;
uninTypeAlis = "helo";
uninTypeAlis = true;
uninTypeAlis = null;
uninTypeAlis = undefined;
uninTypeAlis = "world";
let uninTypeAlis2 = 45;
let litr = "ashar";
litr = "sameer";
litr = "were";
export {};
