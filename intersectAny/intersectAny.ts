//Union
// Union type ma koi ek type bhi cover hojati ha to code successfully run hojata ha
type Person = {
    name:string,
    id:number,
};
type Employee = {
    company:string,
    location:string,
};
type CombineType = Person | Employee;
let obj:CombineType = {
    company:"Apple",
    location:"San Fransisco",
};
console.log(obj);
//Intersection
type CombineTypeIntersc = Person&Employee;
//Inersection type  ma start to end type cover hojati ha to code successfully run hojata ha
let objIntersc:CombineTypeIntersc = {
    name:"Ahmed",
    id:2,
    company:"Amazon",
    location:"USA",
};
console.log(objIntersc);

type CombineType1 = {
    name:string,
    id:number,
}
type CombineType2 = {
    location:string,
    city:string,
}
type CombineType3= CombineType1 | CombineType2;

let obj6:CombineType3 ={
    name:"moiz",
    id:3,
    location:"USA",
    city:"virginia",
};

type schoolFriend={
    name:string,
    number:number,
    adress:string,
    SchoolName:string,
}
type collgeFriend={
    collageName:string,
}

type friends = schoolFriend | collgeFriend ;

function Friend(name:string,number:number,adrees:any,){
    this.name =name;
    this.number =number;
    this.adrees =adrees;
}
let friend2 = new friend("ahmed","03182334328",'ahjsun@')