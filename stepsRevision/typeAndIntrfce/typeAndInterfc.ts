//Type vs Interface
type Str = string;
let strs:Str = "hello World";
console.log(strs);
type Obj1 = {
    name:string,
};
type Obj2 = {
    age:number;
};
type Obj =  Obj1 | Obj2;
let obj:Obj = {
    name:"Ahmed",
    age:20,
};
if("name" in obj){
    console.log(obj.name);
}else if("age" in obj){
    console.log(obj.age);
};

type ObjIntersec = Obj1&Obj2;
let objIntersec:ObjIntersec = {
    name:"Sameer",
    age:15,
};
console.log(objIntersec.name);


//Interface
interface ObjIntrfc{
    name:string,
};
interface ObjIntrfc2 extends ObjIntrfc{
    id:number,
};
let objIntrfc:ObjIntrfc2 = {
    name:"Sameer",
    id:1,
};
console.log(objIntrfc.name);

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box:Box = {
    height:34,
    width:34,
    scale:10,
};
box.
