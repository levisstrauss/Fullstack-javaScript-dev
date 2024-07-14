"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const step11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log('completed step 1');
                resolve(nextStep); // Because this is always a number
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
const step22 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log('completed step 1');
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
const step33 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log('completed step 1');
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
const build = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const step1 = yield step11();
        const step2 = yield step22(step1);
        yield step33(step2);
        console.log('your house is done!');
    }
    catch (error) {
        console.log('There was an error building');
    }
});
build();
