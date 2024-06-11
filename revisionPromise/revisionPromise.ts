//Syncronous and Asyncronous

// Syncronous
// console.log(1);
// console.log(2);
// console.log(3);

//Asyncronous
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(4);
//     }, 2000);
// console.log(3);


//CallBack
// const callBack = (a:number,cb:(a:number) => void) => {
//     if(a === 5){
//         cb(a);
//     }else{
//         console.log("Value Not FOund");
//     }
// };
// callBack(5,(b:number) => {
//     console.log(`${b} is Available`);
//     // callBack(5,(c:number) => {
//     //     console.log(`${b+c} is Available`);
//     // })
// });

//Promises
const ourPromise = (a:number) => {
    let val = 5;
    val+=a;
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        if(a){
            resolve(val);
        }else{
            reject("Value not Found");
        };
       }, 2000);
    });
};
// ourPromise(5).then((res) => {
//     // console.log(`${res} is Available`);
//     return ourPromise(res as number);
// }).then((res2) => {
//     return ourPromise(res2 as number)
// }).then((resp1) => {
//     console.log(`${resp1} is Available`);
// })
// .catch((error) => {
//     console.log(error);
// });

let asycAwait2 = async () =>{
    try{
        let res= await ourPromise(5);
        let res2 =await ourPromise(res as number);
        let res3 = await ourPromise(res2 as number)
        console.log(res3);
    }catch{
        console.log("error found");
    }
};

asycAwait2();


