

//local Storage
localStorage.setItem("Name","Ashar");
let rollNo:number = 45;
localStorage.setItem("RollNo",rollNo.toString())
localStorage.setItem("isStudent",String(true));

let objLocl = {
    name:"Anas",
    rollNo:400,
    isStudent:true,
};

// Local Storage only admit string value . but object are not a string , so the solution is JSON
//JSON => Javascript Object Notation

localStorage.setItem("StudentDetail",JSON.stringify(objLocl));
// let getLocalStorageItem =  JSON.parse(localStorage.getItem("StudentDetail") as string);
let getLocalStorageItem = localStorage.getItem("StudentDetail");
console.log( JSON.parse(getLocalStorageItem as string));

// localStorage.clear()
localStorage.removeItem("RollNo");
console.log(localStorage.length);
console.log(localStorage.key(1));


//pra
// localStorage.clear()
// console.log(localStorage.key(3)); //ya use ke key console par print kar deta he
// console.log(localStorage.length);// ya use ke lenght console par print kar deta he
//  console.log(localStorage.removeItem("Name")); // ya local storage se removeItem ke method  ke through ko
//                                              // hum koi bhi item remove kar sakte ha 
                                             