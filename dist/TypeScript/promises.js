"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const step1 = () => {
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
const step2 = (step) => {
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
const step3 = (step) => {
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
step1()
    .then((result) => {
    return step2(result);
})
    .then((result) => {
    return step3(result);
})
    .then(() => {
    console.log('Your house is done!');
})
    .catch(() => {
    console.log('There was an error building your house');
});
