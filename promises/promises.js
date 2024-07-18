//Promise
//Pending
//fulfilled => resolve
//rejected => reject
// const ourPromise = (a:number) => {
//     let val = 10+a;
//     return new Promise((resolve,reject) => {
//         if(val){
//             resolve(val);
//         }else{
//             reject("Error Through")
//         }
//     })
// }
// ourPromise(5).then((response) => {
//     // console.log(response);
//     return response;
// }).then((resp1) => {
//     console.log(resp1);
// })
// .catch((err) => {
//     console.log(err);
// });
//Chaining in Promies
const promiseTwo = () => {
    let val = 50;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val) {
                resolve(val);
            }
            else {
                reject("Error Through");
            }
        }, 2000);
    });
};
// promiseTwo().then((response) => {
//     return response;
// }).then((resp1) => {
//     return resp1
// }).then((resp2) => {
//     console.log(resp2);
// }).catch((error) => {
//     console.log(error);
// });
//Async Await
const asycAwait = async () => {
    try {
        let ourData = await promiseTwo();
        // let ourData2 = await ourData;
        console.log(ourData);
    }
    catch (error) {
        console.log(error);
    }
};
console.log(asycAwait());
export {};
//Promise using Fetch API
// const fectPromiseApi= () => {
//     return new Promise((resolve,reject) => {
//          fetch(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
//             if(res.ok){
//                 resolve(res.json());
//             }else{
//                 reject("API not Found");
//             }
//          })
//     }) 
// };
// fectPromiseApi().then((res) => {
//     return res;
// }).then((res1) => {
//     (res1 as apiData[]).forEach((e) => {
//         document.write(e.id + ") " + e.title + "<br>");
//     });
// })
// .catch((error) => {
//     console.log(error);
// });
// const fetchData = async () => {
//     try {
//         let ourData = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     let ourData2:apiData[] = await ourData.json();
//     console.log(ourData2);
//     ourData2.forEach((e) => {
//         document.write(e.id + ") " + e.title + "<br>");
//     });
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();
// const promise1 = () => {
//     return new Promise ((resolve,reject) =>{
//         fetch(`https://jsonplaceholder.typicode.com/photos`).then((res)=>{
//             if(res.ok){
//                 resolve(res.json)
//             }else{
//                 reject(`api not found`)
//             }
//         })
//     })
// }
// promise1().then((res2)=>{
//     return res2
// }).then((res3)=>{
//    return res3
// }).then((res4) =>{
//     console.log(res4);
// })
//  catch(error){
//     console.log();
// }
// //Chaining in Promies
// const promiseThree = () => {
//     let val = 50;
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(val){
//                 resolve(val)
//             }else{
//                 reject("Error Through")
//             }
//         }, 2000);
//     });
// };
// // promiseTwo().then((response) => {
// //     return response;
// // }).then((resp1) => {
// //     return resp1
// // }).then((resp2) => {
// //     console.log(resp2);
// // }).catch((error) => {
// //     console.log(error);
// // });
// let promisefour = () =>{
//     let add =10; 
//     return new Promise((resolve,reject) =>{
//       setTimeout(() =>{
//         if(val){
//             resolve(val)
//         }else{
//             reject `error though`
//         }
//       })
//     })
// }
