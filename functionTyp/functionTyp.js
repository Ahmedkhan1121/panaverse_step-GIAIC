"use strict";
//Functions
Object.defineProperty(exports, "__esModule", { value: true });
//Function Decralation
function name1() {
    console.log("Hello World");
}
;
name1();
//Function Expression
var funcExp = function () {
    console.log('Function Expression');
};
funcExp();
//Arrow Function
var arrwFunc = function () { return console.log("Arrow Function"); };
arrwFunc();
//Function with Parameters and Arguments
//jab hum function ko define kar rahe huto hum parameter dalte he
function add1(a, b) {
    console.log(a + b);
}
;
add1(5, 5);
//Function with return
function retrnValue(a, b) {
    return a / b;
}
;
var retrn = retrnValue(10, 2);
console.log(retrn);
var arrwFunc2 = function () {
    console.log(1);
    console.log(2);
    console.log(3);
};
arrwFunc2();
var arrwFunc3 = function (a, b) {
    console.log(a + b);
};
arrwFunc3(5, 5);
//Function with optional parameter
var optnlParam = function (a, b) {
    return b;
};
var optParm = optnlParam(4);
console.log(typeof optParm);
//Function with Default parameter
var defaltParam = function (a) {
    if (a === void 0) { a = 10; }
    console.log(a);
};
defaltParam(20);
//Function without Default parameter
function withOutDefltParm(a) {
    if (a === undefined) {
        return a = 10;
    }
    ;
    return a;
}
;
var witOutDefltPrm = withOutDefltParm(40);
console.log(witOutDefltPrm);
//rest parameter
var parameter2 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var reduce = a.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    return reduce;
};
console.log(parameter2(2, 3, 4, 5));
var parameter3 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a;
};
console.log(parameter3("hello world", "muiz", "ashar", "ahmed"));
