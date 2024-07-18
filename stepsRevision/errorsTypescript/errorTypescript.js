//Syntax Error
let names = "Hello World";
if (names) {
    console.log(names);
}
//Assignability Error
let strs = 5;
let typeObj = {
    name: "Ahmed",
    callName: function () {
        console.log(this.name);
    }
};
typeObj.callNames();
export {};
