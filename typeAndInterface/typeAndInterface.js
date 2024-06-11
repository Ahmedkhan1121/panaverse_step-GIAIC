// //Type Alias
// type ArrType = [string , number , boolean];
// let arr:ArrType = ["Hello",2,true];  //Tuples
// type Str = string;
// let strr5:Str = "Hello World";
// type Obj = {
//     name:string,
//     rollNo:number,
// };
// let objTypes:Obj = {
//     name:"Sameer",
//     rollNo:34,
// };
// //Union Types
// type UnionTypes = string | number |boolean |undefined |null;
// let strNum:UnionTypes = "Hello World";
// strNum = 45;
// strNum = true;
// strNum = undefined;
// strNum = null;
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
};
//Using Type And Intersection
// type ObjTypeJoin = ObjInterfce & Obj2 & Country;
// let objJOin :ObjTypeJoin = {
//     name:"Ahmed",
//     rollN:20,
//     company:"Apple",
//     city:"San Fransisco",
//     country:"USA",
// };
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
//Using Promises
var userPromise = function (email, passwrd) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (email) {
                resolve(email);
            }
            else {
                reject("Email Not Found");
            }
        }, 2000);
    });
};
var videoPromise = function (email, video) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (video) {
                resolve("The Video of the email ".concat(email, " is ").concat(video[0]));
            }
            else {
                reject("Video not Found");
            }
        }, 2000);
    });
};
userPromise(1234).then(function (res1) {
    console.log("Your Email is ".concat(res1));
    return videoPromise(res1, ["one", "two", "three"]);
}).then(function (res2) {
    console.log(res2);
}).catch(function (error) {
    console.log(error);
});
