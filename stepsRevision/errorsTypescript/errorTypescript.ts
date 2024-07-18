//Syntax Error
let names:string = "Hello World";
if(names){
    console.log(names);
}

//Assignability Error
let strs:string = 5;

//Type Error
// console.logge(names);
type Objt = {
    name:string,
    callName:() => void,
};
let typeObj:Objt = {
    name:"Ahmed",
    callName:function(){
        console.log(this.name);
    }
}
typeObj.callNames();

