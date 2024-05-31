const modl = () => {
    let arr:any[] = [1,true,undefined,null,"Apple"];
    let filtArr = arr.filter((e) => {
       return typeof e === "string";
    });
    console.log(filtArr);
};
//Default Export
export default modl;


let name:string = "Hello World";
let age:number = 15;
export  {name,age};

let obj = {
    name:"Tom",
    city:"Washington DC"
}

let obj2 = {
    name:"Tom",
    city:"Washington DC"
}
export {obj,obj2}


// let function1=(a:string[]):void=>{
//     let savefilter=a.filter((e)=>{
//         // for(let i=0; i<a.length; i++){
//         //     console.log(a[i]);
//         // }

//         if(typeof a ==="string"){
//             console.log('string');
//         }
//     })
// }
// let save=function1('my name is ahmed '.split(' '));