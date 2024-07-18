let abd = 'Hello ABD';
let adb = "Hello ADB";
export {abd,adb};
let arr:any[] = ["Apple","Banana",1,true,null,undefined]; 
let filtArr = () => {
    return arr.filter((e) => typeof e === "string");
};
export default filtArr; //One time use Only
export let one = "One";
export let two = "two";
export let three = "three";
export function helo(){
    console.log("Hello");
}
export let profesorZiaKhan = 'Sir Zia';
export type AnimalProperty = {
    name:string,
    description:string,
}
export interface Human{
    name:string,
    age:number
}
