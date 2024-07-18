let str = "Hello World";
console.log(str.toLowerCase());
// str = 45;
//Type Narrowing
const typeNarow = (a) => {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    else {
        return a.valueOf();
    }
};
let typeNarw = typeNarow("helloWorld");
console.log(typeNarw);
let str2 = ['moiz', 'ashar', 'sameer', 'anus'];
console.log(str2);
str2 = 'moiz';
console.log(str2.length);
let nerowFunc = (a) => {
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
let age = 70;
// age= 7
const typeLit = (a, b) => {
    return b;
};
typeLit("Hello", "Left");
let custmStr = "Hello";
custmStr = 45;
//Type Narrowing using Type Alias
const typeNarow2 = () => {
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
};
typeNarow2();
let arrTupl = ["Hello", 12, true, "Hi"];
export {};
