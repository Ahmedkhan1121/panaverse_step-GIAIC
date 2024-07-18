"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesorZiaKhan = exports.helo = exports.three = exports.two = exports.one = exports.adb = exports.abd = void 0;
let abd = 'Hello ABD';
exports.abd = abd;
let adb = "Hello ADB";
exports.adb = adb;
let arr = ["Apple", "Banana", 1, true, null, undefined];
let filtArr = () => {
    return arr.filter((e) => typeof e === "string");
};
exports.default = filtArr; //One time use Only
exports.one = "One";
exports.two = "two";
exports.three = "three";
function helo() {
    console.log("Hello");
}
exports.helo = helo;
exports.profesorZiaKhan = 'Sir Zia';
