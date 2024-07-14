"use strict";
// Thisis where the test of the main ffile will be written
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
it('expect myFunc(5) to equal 25', () => {
    expect((0, index_1.default)(5)).toEqual(25);
});
