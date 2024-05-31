//Nested Object
//object ke ander object nested object hota ha
var PrentObj = {
    name: "Hello",
    childObj: {
        name: "Child",
        age: 2,
    },
    subject: ["Math", "English"],
    callChildName: function () {
        console.log(this.childObj.name);
    },
};
console.log(typeof PrentObj.callChildName());
