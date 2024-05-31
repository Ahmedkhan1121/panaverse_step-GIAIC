// Structure Typing in Object
// kisi bhi object ya function ko iske structure ke through compare krwana structure typing khelata ha,uski type ke through nhi
// interface Human{
//     name:string;
//     age:number;
// };
// interface Men{
//     name:string;
//     age:number;
//     gender:string;
// };
// let human:Human = {
//     name:"Tom",
//     age:10,
// };
// let men:Men = {
//     name:"Ben",
//     age:11,
//     gender:"Male",
// };
// human = men;
// console.log(human);

// men = human;

// let obj = {
//     name:"Ashar",
// };
// let obj4 = {
//     age:19,
// };
// obj = human;

//Function Structure Typing
let func1 = (a:number,b:number):void => {
    console.log("Hello Wolrd");
};
let func2 = (a:number,b:number):number => {
    return 18;
};
// agr ek function ki type void ho to wo kisi bhi type ke function ko assign kr sakta ha,agr kisi function ki type void na ho to wo apne function return type ke ilawa koi type ka function assign nhi kre ga
func1 = func2;
console.log(func1(2,2));
// Pehla function jo do numbers ko add karta hai
let add  = (a: number, b: number):number => {
    return a + b;
  }
  
  // Dusra function jo do numbers ko multiply karta hai
  let multiply = (x: number, y: number): string => {
    return "hello";
  };
  
  // TypeScript kehte hai ke ye dono functions compatible hain
//   let operation: (a: number, b: number) => number;
  
//   add = multiply;
  