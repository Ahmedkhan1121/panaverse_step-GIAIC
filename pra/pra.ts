//array

let arr3:string[] = [ "orange", "leechi","apple", "mango", "kiwi", "banana" ];
let myMap = arr3.map((e,i)=>{
    return `${i}) ${e}`
})
console.log(myMap);

let myFilter = arr3.filter((e,i) => {
    return i>1
})
console.log(myFilter);
let arr2:number[]=[1,2,3,4,5,6,7]
let myReduce = arr2.reduce((pre,curr)=>{
    if(pre >0){
        return -pre+curr
    }else{
        return pre+curr
    }
},0)
console.log(myReduce);

let arr5:number[] = [1,2,3,4,5,6,7,8,9]
let mySlice = arr5.slice(2,3);
console.log(mySlice);

let mySplit = arr5.splice(2,3);
console.log(mySplit);

let myReplace:string[]=["typeScript", "javascript", "typescript"]
let myRep = myReplace.toString().replace(/typescript/ig, "python");
console.log(myRep);

let mysortt = arr3.sort();
console.log(mysortt);

let sortNum:number[] = [1,2,3,22,34,5,44,556,7,8,9,23]
 sortNum.sort((a,b) => a-b)  ;
console.log();

