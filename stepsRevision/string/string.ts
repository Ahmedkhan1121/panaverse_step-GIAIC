//String
//string is immutable => string change nhi hoti
let ab:string = "Hello World";
// console.log(ab);

//Property
// console.log(ab.length);

//Method
let abToUpper=  ab.toUpperCase();
console.log(abToUpper);
let abToLower = ab.toLowerCase();
console.log(abToLower);
let copyStr:string = ab.slice(6); 
console.log(copyStr);
let strSpace  = "      Anas       ";
let strSapceTrim = strSpace.trim()
console.log(strSapceTrim);

let indexOfs = ab.indexOf("l",3);
console.log(indexOfs);
let lastIndexOf = ab.lastIndexOf("l",100);
console.log(lastIndexOf);

let str1:string = "Hello"
let str2:string = "World";
let strJoin:string = str1.concat(str2);
console.log(strJoin);
console.log(str1);
let strRepeat = str1.repeat(4);
console.log(strRepeat);

let  strs:string = "Hello Javascript , Javascript";
let strs2:string = strs.replace(/javascript/ig,"Typescript");
console.log(strs2);

let strSp = "Hello World";
let strSplit = strSp.split(' ');
console.log('');
console.log(strSplit);

let charAts = strSp.charAt(4);
console.log(charAts);

let strMessage = "Cloud Applied Generative AI Engineer";
let strIncludes = strMessage.toLowerCase().includes("G".toLowerCase());
console.log(strIncludes);