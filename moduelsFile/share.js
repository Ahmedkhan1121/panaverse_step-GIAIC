const modl = () => {
    let arr = [1, true, undefined, null, "Apple"];
    let filtArr = arr.filter((e) => {
        return typeof e === "string";
    });
    console.log(filtArr);
};
//Default Export
export default modl;
let name = "Hello World";
let age = 15;
export { name, age };
let obj = {
    name: "Tom",
    city: "Washington DC"
};
let obj2 = {
    name: "Tom",
    city: "Washington DC"
};
export { obj, obj2 };
