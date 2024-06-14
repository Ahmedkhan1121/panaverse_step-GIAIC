//Local Storage
//setItem
let strLocl = "Hello Worlds"
localStorage.setItem("String",strLocl)
let numLocl = 56;
localStorage.setItem("Number",numLocl.toString());
let boolLocl = true;
localStorage.setItem("Boolean",String(boolLocl));

//Array
let arrLocl = [1,2,3,4,5,6,7,8,9];
//JSON => JAVASCRIPT OBJECT NOTATION
localStorage.setItem("Array",JSON.stringify(arrLocl));

//Object
let objLocl = {
    name:"Ahmed",
    age:20,
};
localStorage.setItem("Object",JSON.stringify(objLocl));

//getItem
let getStrLocl =  localStorage.getItem("String");
console.log(getStrLocl);
let getNumLocl = localStorage.getItem("Number");
console.log(Number(getNumLocl));
let getArrLocl = localStorage.getItem("Array") as string;
console.log(JSON.parse(getArrLocl));
let getObjLocl = localStorage.getItem("Object") as string;
console.log(JSON.parse(getObjLocl));



let str3:string='hello mioz';
localStorage.setItem('string2',str3);
let numlocal:number=33;
localStorage.setItem('number2',numlocal.toString());
let Booleanlocal:boolean=true;
localStorage.setItem('boolean2',String(Booleanlocal));

let Arraylocal:number[]=[2,3,4,4,4,5];
localStorage.setItem('array2',JSON.stringify(Arraylocal));


let objLocl2 ={
    name:'ashar',
    id:2,
    arry:['moiz','ashar']
};
localStorage.setItem('obj2',JSON.stringify(objLocl2))

let localstr=localStorage.getItem("string2");
console.log(localstr);
let localnum =localStorage.getItem('number2');
console.log(localnum);
let localboolen=localStorage.getItem('boolean2');
console.log(localboolen);
let arry=localStorage.getItem('array2') as string;
console.log(JSON.parse(arry));
let localobj=localStorage.getItem('objLocl2')as string;
console.log(JSON.parse(localobj));
