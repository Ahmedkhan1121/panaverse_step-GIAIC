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
//JSON.stringify isiliye use hota hai kyun ke localStorage sirf strings store kar sakta hai. Agar aap 
//directly array ko store karne ki koshish karenge, toh wo properly store nahi ho paayega.
//JSON.stringify(Arraylocal) ye array ko ek JSON string mein convert karta hai, jo localStorage mein easily 
//store ho sakta hai. Jab aapko phir se array retrieve karna hota hai, toh aap JSON.parse use karke wapas 
//usse array mein convert kar sakte hain.
var Arraylocal = [2, 3, 4, 4, 4, 5];
localStorage.setItem('array2', JSON.stringify(Arraylocal));
var objLocl2 = {
    name: 'ashar',
    id: 2,
    arry: ['moiz', 'ashar']
};
localStorage.setItem('obj2', JSON.stringify(objLocl2));
var localstr = localStorage.getItem("string2");
console.log(localstr);
var localnum = localStorage.getItem('number2');
console.log(localnum);
var localboolen = localStorage.getItem('boolean2');
console.log(localboolen);
var arry = localStorage.getItem('array2');
console.log(JSON.parse(arry));
var localobj = localStorage.getItem('objLocl2');
console.log(JSON.parse(localobj));
var name1 = "Ahmed";
localStorage.setItem("string", name1);
var num = 22;
localStorage.setItem("random", num.toString());
var array = ["apple", "bananna", "mango", "orange"];
localStorage.setItem("fruit", array.toString());
var array1 = localStorage.getItem('array');
console.log(array1);
