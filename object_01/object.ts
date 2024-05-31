//Object
//Pair of Key and Value is Object

// let obj = {
//     name:"Ahmed",
//     age:20,
//     isStudent:true,
//     subjects:["English","Urdu","Math"],
// };
// console.log(obj["age"]);
// console.log(obj["name"]);
// console.log(obj["isStudent"]);
// console.log(obj["subjects"]);
// Add Dynamically key and value in obj
// let objFruit:any = {};
// let arrFruit = ["Apple","Banana","Orange"];
// for(let i=0; i<arrFruit.length; i++){
//     objFruit[i] = arrFruit[i]; 
// }
// console.log(objFruit);

//Object with Properties and Method
// let objMet = {
//     name:"Ahmed",
//     age:20,
//     callName:function(){
//        return this.name;
//     }
// };
// //Type of Object Method
// console.log(typeof objMet.callName());
// // Call the method of Object
// console.log(objMet.callName());

type objType= {name:string,age:number,id:number,callName:() => void};
let obj2:objType ={
    name:"moiz",
    age:19,
    id:12,
    callName:function(){
        console.log(`this ${this.name} of the student  this ${this.age} of the student . this ${this.id} of the student `);
        
    }
}
obj2.callName();

// obj2['callName()']; // Method of Object doesn't call







