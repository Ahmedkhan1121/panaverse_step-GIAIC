//Union Type 
let uin:string|number|boolean = "hello world";
uin = 45;
uin = true;
//uin = null;  //Because the variable is not assignable to null;

//Type Narrowing
//Using Function and if else
const typeNarowTwo = (str:string|number|boolean) => {
    if(typeof str === "string"){
        return str.toUpperCase();
    }else if(typeof str === "number"){
        return str.toFixed(2);
    }else if(typeof str === "boolean"){
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
let ashar:"ashar" = "ashar";
ashar = "ashar";
ashar = "ashar";
let numLit:50 = 50;
numLit = 30;
let boolLt:true = true;

//Type Alias
type  UinType = string | number |boolean|null|undefined;
let uninTypeAlis:UinType = 45;
uninTypeAlis = "helo";
uninTypeAlis = true;
uninTypeAlis = null;
uninTypeAlis = undefined;
uninTypeAlis = "world";
let uninTypeAlis2:UinType = 45;

//Literal Type with Type Alias
type LitrType = "ashar"|"sameer";
let litr:LitrType = "ashar";
litr = "sameer";
litr = "were";
