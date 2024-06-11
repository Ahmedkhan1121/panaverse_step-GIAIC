//Local Storage
//setItem in Local Storage
var strLocl = "Hello Local Storage";
localStorage.setItem("String", strLocl); //for set data in local storage
var num = 56;
localStorage.setItem("Number", num.toString()); //for set data in local storage
var bool = true;
localStorage.setItem("Boolean", String(bool)); //for set data in local storage
//Using Object with local Storage
var arrLocl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//JSON - JAVASCRIPT OBJECT NOTATION
localStorage.setItem("Number-List", JSON.stringify(arrLocl));
var objLocl = {
    name: "Ahmed",
    age: 20,
};
localStorage.setItem("Object", JSON.stringify(objLocl));
localStorage.setItem("Numb", JSON.stringify(true));
var strLocl2 = 'moiz';
localStorage.setItem('string2', strLocl2);
var num2 = 33;
localStorage.setItem('number2', num2.toString());
var arrlocal = ["moiz", "ashar", "sameer", 'anus'];
localStorage.setItem('name list', JSON.stringify(arrlocal));
//getItem in Local Storage
var getLocl = localStorage.getItem("String");
console.log(getLocl);
console.log(localStorage.getItem("String"));
