//Modules
import { abd,adb,profesorZiaKhan as sir, } from "./ab.mjs";
import arrFilt from "./ab.mjs";
import * as ahmed from "./ab.mjs";
console.log(abd);
console.log(adb);
let filtArr = arrFilt();
console.log(filtArr);
console.log(ahmed.default());
console.log(ahmed.one);
console.log(sir); //as a NickName
import type {AnimalProperty,Human} from "./ab.mjs";
let animal:AnimalProperty = {
    name:"lion",
    description:"King of Forest",
};
console.log(animal);
let human:Human = {
    name:"Evan",
    age:25,
}