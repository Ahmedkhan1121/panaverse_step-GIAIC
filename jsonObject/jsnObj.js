//Local Storage
//setItem
var strLocl = "Hello Worlds";
localStorage.setItem("String", strLocl);
var numLocl = 56;
localStorage.setItem("Number", numLocl.toString());
var boolLocl = true;
localStorage.setItem("Boolean", String(boolLocl));
//Array
var arrLocl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//JSON => JAVASCRIPT OBJECT NOTATION
localStorage.setItem("Array", JSON.stringify(arrLocl));
//Object
var objLocl = {
    name: "Ahmed",
    age: 20,
};
localStorage.setItem("Object", JSON.stringify(objLocl));
//getItem
var getStrLocl = localStorage.getItem("String");
console.log(getStrLocl);
var getNumLocl = localStorage.getItem("Number");
console.log(Number(getNumLocl));
var getArrLocl = localStorage.getItem("Array");
console.log(JSON.parse(getArrLocl));
var getObjLocl = localStorage.getItem("Object");
console.log(JSON.parse(getObjLocl));
var str3 = 'hello mioz';
localStorage.setItem('string2', str3);
var numlocal = 33;
localStorage.setItem('number2', numlocal.toString());
var Booleanlocal = true;
localStorage.setItem('boolean2', String(Booleanlocal));
var Arraylocal = [2, 3, 4, 4, 4, 5];
localStorage.setItem('array2', JSON.stringify(Arraylocal));
var objLocl2 = {
    name: 'ashar',
    id: 2,
    arry: ['moiz', 'ashar']
};
localStorage.setItem('obj2', JSON.stringify(objLocl2));
