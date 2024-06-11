//Syncronous and Asyncronous
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Syncronous
// console.log(1);
// console.log(2);
// console.log(3);
//Asyncronous
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(4);
//     }, 2000);
// console.log(3);
//CallBack
// const callBack = (a:number,cb:(a:number) => void) => {
//     if(a === 5){
//         cb(a);
//     }else{
//         console.log("Value Not FOund");
//     }
// };
// callBack(5,(b:number) => {
//     console.log(`${b} is Available`);
//     // callBack(5,(c:number) => {
//     //     console.log(`${b+c} is Available`);
//     // })
// });
//Promises
var ourPromise = function (a) {
    var val = 5;
    val += a;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (a) {
                resolve(val);
            }
            else {
                reject("Value not Found");
            }
            ;
        }, 2000);
    });
};
// ourPromise(5).then((res) => {
//     // console.log(`${res} is Available`);
//     return ourPromise(res as number);
// }).then((res2) => {
//     return ourPromise(res2 as number)
// }).then((resp1) => {
//     console.log(`${resp1} is Available`);
// })
// .catch((error) => {
//     console.log(error);
// });
var asycAwait2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, res2, res3, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, ourPromise(5)];
            case 1:
                res = _b.sent();
                return [4 /*yield*/, ourPromise(res)];
            case 2:
                res2 = _b.sent();
                return [4 /*yield*/, ourPromise(res2)];
            case 3:
                res3 = _b.sent();
                console.log(res3);
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                console.log("error found");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
console.log(asycAwait2());
