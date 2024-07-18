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
var callBackHell = function (cbh) {
    var val = 5;
    if (val) {
        cbh(val);
    }
    else {
        console.log("Data not Found");
    }
    ;
};
callBackHell(function (a) {
    callBackHell(function (b) {
        callBackHell(function (c) {
            callBackHell(function (d) {
                console.log(a + b + c + d);
            });
        });
    });
});
