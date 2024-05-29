var str = "Hello World";
console.log(str.toLowerCase());
// str = 45;
//Type Narrowing
var typeNarow = function (a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    else {
        return a.valueOf();
    }
};
var typeNarw = typeNarow("helloWorld");
console.log(typeNarw);
var str2 = ['moiz', 'ashar', 'sameer', 'anus'];
console.log(str2);
str2 = 'moiz';
console.log(str2.length);
var nerowFunc = function (a) {
    if (typeof a === "string") {
        return a;
    }
    else {
        return a;
    }
};
console.log(nerowFunc('hello world'));
//literal Type
//Variable ma wo type assign karwana ke uske ilawa wo variable koi value reassign ya assign nhi kr sakta
var age = 70;
age = 7;
var typeLit = function (a, b) {
    return b;
};
typeLit("Hello", "Left");
var custmStr = "Hello";
custmStr = 45;
if (typeof custmStr === "string") {
    console.log(custmStr.toUpperCase());
}
else if (typeof custmStr === "number") {
    console.log(custmStr.toFixed(2));
}
else if (typeof custmStr === "boolean") {
    console.log(custmStr);
}
;
