//Object
//key and value pair is object
type ObjSt = {
    name:string,
    age:number,
    callName:() => void,
};
let objSt:ObjSt = {
    name:"Sameer",  
    age:15,
    callName:function(){
        console.log(`${this.name} come here.`);
    },
};
objSt.callName();
console.log(objSt);
console.log(objSt["name"]);
console.log(objSt["age"]);


//Create an Object with type Alias with properties and Methods

type Student={
    name:string,
    id:number,
    age: number,
    class: string,
    teacherCall: () => void, 
};
let student:Student = {
    name:"moiz",
    id:370743,
    age:19,
    class:"Ai engineer",
    teacherCall:function(){
        console.log(`student name is ${this.name}  and student id ${this.id} and student age ${this.age} his subject ${this.class}`)
    },
}

student.teacherCall()

//Nested Object
type TeacherDetail = {
    shift:string,
    subjects:string[],
    students:string[],
}
type Teacher = {
    name:string,
    id:number,
    teacherDetail:TeacherDetail,
};

let teacherObj:Teacher = {
    name:"Ameen Alam",
    id:420,
    teacherDetail:{
        shift:'Sat - 9AM to 12PM',
        subjects:["Typescript","React"],
        students:["Ahmed","Mohsin","Anas"],
    },
};
type Feacture ={
    soundProof:boolean,
    luxury:boolean,


}
type Car={
    name:string,
    model:string,
    feature:Feacture,
}
const car:Car={
    name:"rolls royale",
    model: "2024",
    feature : {
        soundProof: true,
        luxury: true,
    }
}
console.log(car);



//constant object
const constObj = {
    name:"Ashar",
    id:540,
};
constObj.name = "Anas",
console.log(constObj);



//Adding Properties with For loop
let arrObj:string[] = ["Apple","Banana","Orange","Mango","Pineapple"];
let fruitObj:any = {};
for(let i=0; i<arrObj.length; i++){
    fruitObj[`${i}`] = arrObj[i];
};
console.log(fruitObj);
//Structural Typing
let obj1 = {
    name:"Ben",
    age:11,
    city:"Los Angelas",
};
let objTwo = {
    name:"Tom",
    age:10,
    
};
objTwo = obj1;
console.log(objTwo);

//Union Type
// |
//ye do ya uuse zyada types combine krta ha
type CarName = {
    name:string,
};
type CarModel = {
    model:string,
};
type Cars = CarName | CarModel;
let cars:Cars = {
    name:"Mercedez",
    model:"G-Wagon",
};
console.log(cars);
if("name" in cars){
    console.log(cars.name);
}else if("model" in cars){
    console.log(cars.model);
};

//Intersection Types
// &
// Ye do ya usse zyada type ko merged kr deta ha
type CarsIntersec = CarName&CarModel;
let intersecObj:CarsIntersec = {
    name:"Mercedez",
    model:"May bach",
};

console.log(intersecObj);
console.log(intersecObj.model);

//union type
type carName2 = {
    name: string
};
type carModel2 = {
    model: string
}:

type cars2 =  carName2 | carModel2;
let car2:cars2 = {
    name: "Mercedez",
    model: "may bach2",
}
console.log(car2);
if("name" in car2){
    console.log(car2.name);
}else if("model" in car2){
    console.log(car2.model);
};
//intersection type
type cars3 = carName2&carModel2;
let car3:cars3 = {
    name: "civic",
    model:  "oriel",
}
console.log(car3.model);
console.log(car3.name);



