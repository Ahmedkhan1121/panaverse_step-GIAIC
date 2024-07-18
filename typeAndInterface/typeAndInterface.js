var arr = ["Hello", 2, true]; //Tuples
var strr5 = "Hello World";
var objTypes = {
    name: "Sameer",
    rollNo: 34,
};
var strNum = "Hello World";
strNum = 45;
strNum = true;
strNum = undefined;
strNum = null;
var arr2 = [undefined, null];
var joinArr = ["Hello", 2, true, undefined, null];
// //Intersection Types
console.log("Intersection Types");
var joinObj = {
    name: "Sameer",
    rollNo: 410,
    company: "Apple",
    city: "San Fransisco",
};
console.log(joinObj["name"]);
console.log(joinObj.company);
//Interface 
// It is only used in Object
console.log("Interface");
;
var intrfceObj = {
    name: "Ahmed",
    rollN: 20,
};
;
var objJOin = {
    name: "Ahmed",
    rollN: 20,
    company: "Apple",
    city: "San Fransisco",
    country: "U.S"
};
console.log(objJOin.city);
var objJOin2 = {
    name: "Ahmed",
    rollN: 20,
    company: "Apple",
    city: "San Fransisco",
    country: "USA",
};
//Convert a Callback Code into Promises Code
// const user = (email:string,passwrd:number,cb:(e:string) => void) => {
//     setTimeout(() => {
//         cb(email)
//     }, 2000);
// };
// const userVideo = (cb:(video:string[]) => void) => {
//     setTimeout(() => {
//         cb(["one","two","three"])
//     }, 2000);
// }
// user('user@gmail.com',1234,(email:string) => {
//     console.log(`The Email is ${email}`);
//     userVideo((video:string[]) => {
//         console.log(`The Video of this email ${email} is ${video[0]}.`)
// })
// })
// //Using Promises
// let userPromise = (email:string,passwrd:number) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(email){
//                 resolve(email);
//             }else{
//                 reject("Email Not Found");
//             }
//         }, 2000);
//     })
// };
// let videoPromise = (email:string,video:string[]) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(video){
//                 resolve(`The Video of the email ${email} is ${video[0]}`)
//             }else{
//                 reject("Video not Found");
//             }
//         }, 2000);
//     })
// }
// userPromise(`abc@gmail.com`,1234).then((res1) => {
//     console.log(`Your Email is ${res1}`);
//    return videoPromise(res1 as string,["one","two","three"]); 
// }).then((res2) => {
//     console.log(res2);
// }).catch((error) => {
//     console.log(error);
// });
