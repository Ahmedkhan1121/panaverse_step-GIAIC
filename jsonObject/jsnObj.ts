//Local Storage
//setItem in Local Storage
let strLocl:string = "Hello Local Storage";
localStorage.setItem("String",strLocl);  //for set data in local storage
let num:number = 56;
localStorage.setItem("Number",num.toString());  //for set data in local storage
let bool:boolean = true;
localStorage.setItem("Boolean",String(bool));  //for set data in local storage

//Using Object with local Storage
let arrLocl = [1,2,3,4,5,6,7,8,9];
//JSON - JAVASCRIPT OBJECT NOTATION
localStorage.setItem("Number-List",JSON.stringify(arrLocl));
let objLocl = {
    name:"Ahmed",
    age:20,
};
localStorage.setItem("Object",JSON.stringify(objLocl));
localStorage.setItem("Numb",JSON.stringify(true));


let strLocl2:string='moiz';
localStorage.setItem('string2',strLocl2);

let num2:number =33;
localStorage.setItem('number2',num2.toString());

let  arrlocal:string[]=["moiz","ashar","sameer",'anus'];
localStorage.setItem('name list',JSON.stringify(arrlocal));


//getItem in Local Storage
let getLocl = localStorage.getItem("String");
console.log(getLocl);
console.log(localStorage.getItem("String"));
let getLocl2