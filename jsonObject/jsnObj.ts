// //Local Storage
// //setItem
// let strLocl = "Hello Worlds"
// localStorage.setItem("String",strLocl)
// let numLocl = 56;
// localStorage.setItem("Number",numLocl.toString());
// let boolLocl = true;
// localStorage.setItem("Boolean",String(boolLocl));

// //Array
// let arrLocl = [1,2,3,4,5,6,7,8,9];
// //JSON => JAVASCRIPT OBJECT NOTATION
// localStorage.setItem("Array",JSON.stringify(arrLocl));

// //Object
// let objLocl = {
//     name:"Ahmed",
//     age:20,
// };
// localStorage.setItem("Object",JSON.stringify(objLocl));

// //getItem
// let getStrLocl =  localStorage.getItem("String");
// console.log(getStrLocl);
// let getNumLocl = localStorage.getItem("Number");
// console.log(Number(getNumLocl));
// let getArrLocl = localStorage.getItem("Array") as string;
// console.log(JSON.parse(getArrLocl));
// let getObjLocl = localStorage.getItem("Object") as string;
// console.log(JSON.parse(getObjLocl));



// let str3:string='hello mioz';
// localStorage.setItem('string2',str3);
// let numlocal:number=33;
// localStorage.setItem('number2',numlocal.toString());
// let Booleanlocal:boolean=true;
// localStorage.setItem('boolean2',String(Booleanlocal));



// //JSON.stringify isiliye use hota hai kyun ke localStorage sirf strings store kar sakta hai. Agar aap 
// //directly array ko store karne ki koshish karenge, toh wo properly store nahi ho paayega.

// //JSON.stringify(Arraylocal) ye array ko ek JSON string mein convert karta hai, jo localStorage mein easily 
// //store ho sakta hai. Jab aapko phir se array retrieve karna hota hai, toh aap JSON.parse use karke wapas 
// //usse array mein convert kar sakte hain.

// let Arraylocal:number[]=[2,3,4,4,4,5];
// localStorage.setItem('array2',JSON.stringify(Arraylocal));


// let objLocl2 ={
//     name:'ashar',
//     id:2,
//     arry:['moiz','ashar']
// };
// localStorage.setItem('obj2',JSON.stringify(objLocl2))

// let localstr=localStorage.getItem("string2");
// console.log(localstr);
// let localnum =localStorage.getItem('number2');
// console.log(localnum);
// let localboolen=localStorage.getItem('boolean2');
// console.log(localboolen);
// let arry=localStorage.getItem('array2') as string;
// console.log(JSON.parse(arry));
// let localobj=localStorage.getItem('objLocl2')as string;
// console.log(JSON.parse(localobj));



let name1:string="Ahmed";
localStorage.setItem("string",name1);

let num:number=22;
localStorage.setItem("random",num.toString());

let array:string[]=["apple","bananna","mango","orange"];
localStorage.setItem("fruit",JSON.stringify(array));

let obj = {
    name:'ahmed',
    id:11,
}
localStorage.setItem("Obj",JSON.stringify(obj))


//git item
let array1=localStorage.getItem('array');
console.log(array1);

let localstr2=localStorage.getItem("string");
console.log(localstr2);

let localNum=localStorage.getItem("random");
console.log(localNum);

let localArr =localStorage.getItem("fruit") as string;
console.log(JSON.parse(localArr));

let localObj=localStorage.getItem('Obj') as string;
console.log(JSON.parse(localObj));
