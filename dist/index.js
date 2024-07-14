"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
const numbers_js_1 = __importDefault(require("./utilities/numbers.js"));
const strings_js_1 = __importDefault(require("./utilities/strings.js"));
const myFunc_js_1 = __importDefault(require("./utilities/myFunc.js"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays_js_1.default.addArr(numArr);
const mixArr = arrays_js_1.default.concatArr(numArr, wordArr);
const myNum = '15' % 2;
const five = parseInt('5');
// The only one function that I have inside of main
const newArr = (num, arr) => {
    return [num, ...arr];
};
console.log(arrays_js_1.default.cut3(mixArr));
console.log(numbers_js_1.default.sum(arrSum, myNum));
console.log(strings_js_1.default.capitalize('the quick brown fox'));
console.log(numbers_js_1.default.multiply(five, 8));
console.log(arrays_js_1.default.lgNum(mixArr));
console.log((0, myFunc_js_1.default)(5));
module.exports = newArr;
