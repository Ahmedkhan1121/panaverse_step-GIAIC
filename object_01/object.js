//Object
//Pair of Key and Value is Object
let obj2 = {
    name: "moiz",
    age: 19,
    id: 12,
    callName: function () {
        console.log(`this ${this.name} of the student  this ${this.age} of the student . this ${this.id} of the student `);
    }
};
obj2.callName();
export {};
// obj2['callName()']; // Method of Object doesn't call
