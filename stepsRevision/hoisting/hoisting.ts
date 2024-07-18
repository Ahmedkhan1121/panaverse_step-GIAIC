// console.log(10 + +"10");
// console.log(10+"10" + + 10 + "10");


//Hoisting
// let fruitList:readonly [number,number,number,number,number[]]=[27,3,4,3,[1,2,3]];
// let nestedArr: readonly number[] = fruitList[4];
// nestedArr.pop();
// fruitList.pop();
// console.log(fruitList);

const arrConst = [1,2,3,4,5,6,7,8,9];
arrConst.pop();
console.log(arrConst);

console.log(typeof null);
let nul = null;