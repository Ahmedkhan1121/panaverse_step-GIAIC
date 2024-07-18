"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
const ab_mjs_1 = require("./ab.mjs");
const ab_mjs_2 = __importDefault(require("./ab.mjs"));
const ahmed = __importStar(require("./ab.mjs"));
console.log(ab_mjs_1.abd);
console.log(ab_mjs_1.adb);
let filtArr = (0, ab_mjs_2.default)();
console.log(filtArr);
console.log(ahmed.default());
console.log(ahmed.one);
console.log(ab_mjs_1.profesorZiaKhan); //as a NickName
let animal = {
    name: "lion",
    description: "King of Forest",
};
console.log(animal);
let human = {
    name: "Evan",
    age: 25,
};
