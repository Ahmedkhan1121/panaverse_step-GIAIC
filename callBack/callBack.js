//Syncronous And Asyncronous
//Syncronous Code
//Typescript bydefault syncronous behaviour  pr code ko run krti ha matlab line by line
// console.log(1);
// console.log(2);
// console.log(3);
// alert("hello World");
// let prom =  prompt("Hi");
// console.log(4);
//Asyncronous
// console.log(1);
// console.log(2);
// setTimeout(() => {
// console.log(4);
// }, 3000);
// console.log(3);
//callback Function
//callback function wo function hota ha jo kisi dosre function ko as aargument paas kia jye.
// const mechanicFunc = (a:string,bike:() => void) => {
//     setTimeout(() => {
//         console.log(a);
//     }, 2000);
//     bike();
// };
// mechanicFunc("Bike is Repaired",() => {
//     setTimeout(() => {
//         console.log("Yes");
//     }, 3000);
// });
// const funcOne = () => {
//     console.log("ONe");
// };
// const funcTwo = (cb:() => void) => {
//     setTimeout(() => {
//         console.log("Two");
//     }, 4000);
//     cb();
// };
// funcTwo(funcOne)
//Callback Hell
var funcCallBack = function (a, cb) {
    setTimeout(function () {
        cb(a);
    }, 2000);
};
funcCallBack(5, function (a) {
    funcCallBack(5, function (b) {
        funcCallBack(5, function (c) {
            funcCallBack(5, function (d) {
                console.log(a + b + c + d);
            });
        });
    });
});
