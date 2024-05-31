//Any
var messsge = "Hello World";
messsge.toFixed();
messsge = 4;
messsge.toLowerCase();
if (typeof messsge === "string") {
    console.log(messsge.toLowerCase());
}
else if (typeof messsge === "number") {
    console.log(messsge.toFixed());
}
else if (typeof messsge === "object" && Array.isArray(messsge)) {
    messsge;
}
