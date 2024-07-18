//Spread Operator
// let fruits:string[] = ["Apple","Banana","Orange","Kiwi"];
// let spreadArr = ["Pineapple",...fruits,"Peach"];
// spreadArr.pop();
// console.log(spreadArr);
// console.log(fruits);
// type Tupl = [number,number,number,number,number]
// let numONe:Tupl = [1,2,3,4,5];
// let numTwo = [6,7,8,9,10];
// let numThree:any[] = [...numONe,...numTwo,...fruits];
// numThree.sort((a,b) => a-b);
// console.log(numThree);
// const sumArr = (a:number,b:number,c:number,d:number,e:number) =>  {
//     console.log(a+b+c+d+e);
// };
// sumArr(...numONe); //=> (1,2,3,4,5)

import { createLanguageService } from "typescript";
import { obj2 } from "../../moduelsFile/share.js";

// let numbers:number[] = [1,2,3,4,5,6,7,8,9,10,4,5,6,8,11,34,23,435,33,12,34,8];
// //Set() duplicate element ko remove karne ka leya set use huta he
// let ourSet = [...new Set(numbers)];
// console.log(ourSet);


//splice()
let fruits:string[] = ["Apple","Banana","Orange","Kiwi","Mango","Pineapple"];
// let spliceReturn = fruits.splice(1,3);
// console.log(fruits);
// console.log('splice array',spliceReturn);

// //map()
// let numbArr:number[] = [1,2,3,4,5,6,7,8,9,10];  //Samsung flip 4
// let mapNumbArr:number[] = numbArr.map((e,i,a) => { //Samsung  flip 5
//    return e**2;
// });
// console.log("Mapping Array",mapNumbArr);
// console.log("Originl Array",numbArr);

// let mapFruitArr = fruits.map((e,i,a) => {
//     return `${i}:${e}`;
// });
// console.log("Mapping Fruit",mapFruitArr);


// //filter()
// let filtNumArr= numbArr.filter((e,i,a) => {
//     return e%2===0;
// });
// console.log(filtNumArr);
// let filtNumArr2 = numbArr.filter((e,i,a) => {
//     return e>5;
// });
// console.log(filtNumArr2);

 // obj filtrer


// interface Obj1 {
//     name:string,
//     id:number,
// }
// interface Obj2 extends Obj1{
//     email:string,
//     callMethod:() => void,
// }
 
//is me interface ka use kar ke hum fiter nahi kar sakte 

let arrOfObj=[
    {
        name:'ahmed',
        id:21,
        email:'ahmed@gmail.com',
        callMethod:function(){
            console.log(` My name s ${this.name} and my Id is ${this.id} my email ${this.email}  `);
        }
        
    },
    {
        name:'ahmed',
        id:19,
        email:'ahmed@gmail.com',
        callMethod:function(){
            console.log(` My name s ${this.name} and my Id is ${this.id} my email ${this.email}  `);
        }  

    }

];

let filterObj = arrOfObj.filter((e) =>{
    return e.id>20;
});

console.log(filterObj);
 

// //reduce()

// //Addition
// let numbArr1:number[] = [1,2,3,4,5,6,7,8,9,10];


// let reduceNumArradd = numbArr1.reduce((prev,curr) => {
//     return prev+curr;
// },0);
// console.log(reduceNumArradd);

// //Multiplication
// let  reduceNumArrMult = numbArr1.reduce((prev,curr) => {
//     return prev*curr;
// },1);
// console.log(reduceNumArrMult);

// //Division
// let reduceNumArrDivis = numbArr1.reduce((prev,curr) => {
//     return prev/curr;
// });

// //Subtraction
// let reduceNumArrSubt = numbArr1.reduce((prev,curr) => {
//     if(prev>=0){
//        return  -prev+curr;   // + +  + // + - - //- + - // - - +
//     }else{
//         return prev+curr;
//     }
// },0);

// console.log(reduceNumArrSubt);
//  // -0+1 = -1+2 = -1+3 = -2+4 = -2+5 = -3+6 = -3+7 = -4+8 = -4+9 = -5+10 =  5

// let fruitList = ["Watermelon","Mango","Peach","Lime","Guava","Grapes","Apple","Pineapple","Banana"];
// fruitList.sort();
// console.log(fruitList);

// let numbList = [5,6,70,89,30,66,1,100,200,300,43];
// // numbList.sort((a,b) => a-b);
// // console.log(numbList);

// let filterArr:number[] = numbList.filter((e,i,a) => {
//     return e > 60;
// });
// console.log("Using Filter Method",filterArr);
// let findArr = numbList.find((e,i,a) => {
//     return e >60;
// });
// console.log("Using Find Method",findArr);