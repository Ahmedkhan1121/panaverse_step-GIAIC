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
////asyncronous agr us ko code nahi mikta to us ko side me rakh deta he or bhi jab us ka time pua huta he 
//to la kar deta he
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
//callback hell juhe  function ke ander function ke ander function ke ander as a argument jara hu to callback hell huta he
const funcCallBack = (a:number,cb:(a:number) => void) => {
    setTimeout(() => {
        cb(a)
    }, 2000);   
};
funcCallBack(5,(a1:number) => {
    funcCallBack(5,(b:number) => {
        funcCallBack(5,(c:number) => {
            funcCallBack(5,(d:number) => {
                console.log(a1+b+c+d);
            })
        })
    })
})