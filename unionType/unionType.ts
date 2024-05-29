let str:number|string = "Hello World";
console.log(str.toLowerCase());
// str = 45;

//Type Narrowing
const typeNarow = (a:string|number):string|number => {
    if(typeof a === "string"){
        return a.toUpperCase();
    }else{
       return a.valueOf();
    }
};
let typeNarw:string|number =  typeNarow("helloWorld");
console.log(typeNarw);







let str2:string|string[]=['moiz','ashar','sameer','anus'];
console.log(str2);
str2='moiz'

console.log(str2.length);


let nerowFunc=(a:string|string[]):string|string[]=>{
 if(typeof a === "string"){
    return a
 }else{
    return a
 }
};
console.log(nerowFunc( 'hello world'));

//literal Type
//Variable ma wo type assign karwana ke uske ilawa wo variable koi value reassign ya assign nhi kr sakta
let age:70 = 70;
// age= 7
const typeLit = (a:string,b:"Left"):string => {
    return b;
};
typeLit("Hello","Left");

//Type Alias
type CustmTyp = number|string|boolean;
let custmStr:CustmTyp = "Hello";
custmStr = 45;
//Type Narrowing using Type Alias
const typeNarow2 = () => {
    if(typeof custmStr === "string"){
        console.log(custmStr.toUpperCase());
    }else if(typeof custmStr === "number"){
        console.log(custmStr.toFixed(2));
    }else if(typeof custmStr === "boolean"){
        console.log(custmStr);
    };
}
typeNarow2();

//Tuple
//Tuple hum tab used krte hn jab hame array ma ek limit tak element chaye ho k inta element is Array ma asake usse zyada nhi and unko elements ko aage peche bhi nhi kr sakte
type ArrTupl = [string,number,boolean,string];
let arrTupl:ArrTupl= ["Hello",12,true,"Hi"];




