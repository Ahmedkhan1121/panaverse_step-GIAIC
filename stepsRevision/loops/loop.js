//Loop
//For loop
// for(let i=0; i<=100; i++){
//     console.log(i);
// };
// for(let i=0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }
//while loop
// let isCond = true;
// let arrPush:string[] = [];
// while(isCond){
//     let userInput = await inquirer.prompt([
//         {name:"todo",message:"Enter Your Todo",type:"input"},
//         {name:"confirmTodo",message:"Do you want to add more",type:"confirm"},
//     ]);
//     arrPush.push(userInput.todo);
//     isCond = userInput.confirmTodo;
// };
// console.log(arrPush);
//Do while loop
// let a =5;
// do{
//     console.log(a);
//     a--;
// }while(a<0)
// while(a<0){
//     console.log(a);
//     a--;
// };
let fruit = ["Apple", "Banana", "Orange", "Kiwi"];
//For of
// for(let i of fruit){
//     console.log(i.toUpperCase());
// }
let strFor = "hello world";
// for(let i of strFor){
//     console.log(i.toUpperCase());
// };
//For in
for (let x in fruit) {
    console.log(x);
}
for (let x in strFor) {
    console.log(x);
}
export {};
