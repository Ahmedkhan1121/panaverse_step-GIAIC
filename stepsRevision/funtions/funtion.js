function JoinTwoParam(a, b) {
    return a + b;
}
;
JoinTwoParam(5, 5);
JoinTwoParam("Hello ", "World");
JoinTwoParam(5, 5);
function JoinTwoParam1(a, b) {
    return a.concat(b);
}
console.log(JoinTwoParam1([1], [2]));
console.log(JoinTwoParam1(['Hello'], ['World']));
export {};
// let arrNum:number[]=[2,3,4,5,56,2,3,34,88,44];
// let set= [...new Set(arrNum)];
// console.log(set);
