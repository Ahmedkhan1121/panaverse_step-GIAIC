//callback
// const parenFunc = (cb:(a:string) => void) => {
//     let fetchApi = {
//         name:"Ashar",
//         rollNo:400,
//     };
//     setTimeout(() => {
//         if(fetchApi){
//             cb(fetchApi.name);
//         }else{
//             console.error("API NOT FOUND");
//         };
//     }, 3000);
// };
// parenFunc((a:string)  => {
//     console.log(a);
// });



//callback hell
const callBackHell = (cbh:(a:number) => void) => {
    let val = 5;
    if(val){
        cbh(val);
    }else{
        console.log("Data not Found");
    };
};

callBackHell((a:number) => {
    callBackHell((b:number) => {
        callBackHell((c:number) => {
            callBackHell((d:number) => {
                console.log(a+b+c+d);
            });
        });
    });
});



// let age:number=22;
// age=24;



