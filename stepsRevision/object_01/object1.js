let objSt = {
    name: "Sameer",
    age: 15,
    callName: function () {
        console.log(`${this.name} come here.`);
    },
};
objSt.callName();
console.log(objSt);
console.log(objSt["name"]);
console.log(objSt["age"]);
let student = {
    name: "moiz",
    id: 370743,
    age: 19,
    class: "Ai engineer",
    teacherCall: function () {
        console.log(`student name is ${this.name}  and student id ${this.id} and student age ${this.age} his subject ${this.class}`);
    },
};
student.teacherCall();
let teacherObj = {
    name: "Ameen Alam",
    id: 420,
    teacherDetail: {
        shift: 'Sat - 9AM to 12PM',
        subjects: ["Typescript", "React"],
        students: ["Ahmed", "Mohsin", "Anas"],
    },
};
const car = {
    name: "rolls royale",
    model: "2024",
    feature: {
        soundProof: true,
        luxury: true,
    }
};
console.log(car);
//constant object
const constObj = {
    name: "Ashar",
    id: 540,
};
constObj.name = "Anas",
    console.log(constObj);
//Adding Properties with For loop
let arrObj = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
let fruitObj = {};
for (let i = 0; i < arrObj.length; i++) {
    fruitObj[`${i}`] = arrObj[i];
}
;
console.log(fruitObj);
//Structural Typing
let obj1 = {
    name: "Ben",
    age: 11,
    city: "Los Angelas",
};
let objTwo = {
    name: "Tom",
    age: 10,
};
objTwo = obj1;
console.log(objTwo);
let cars = {
    name: "Mercedez",
    model: "G-Wagon",
};
console.log(cars);
if ("name" in cars) {
    console.log(cars.name);
}
else if ("model" in cars) {
    console.log(cars.model);
}
;
let intersecObj = {
    name: "Mercedez",
    model: "May bach",
};
console.log(intersecObj);
console.log(intersecObj.model);
let car2 = {
    name: "Mercedez",
    model: "may bach2",
};
console.log(car2);
if ("name" in car2) {
    console.log(car2.name);
}
else if ("model" in car2) {
    console.log(car2.model);
}
;
let car3 = {
    name: "civic",
    model: "oriel",
};
console.log(car3.model);
console.log(car3.name);
export {};
