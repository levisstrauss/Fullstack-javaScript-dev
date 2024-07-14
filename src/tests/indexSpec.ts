// Thisis where the test of the main ffile will be written
// import strings from '../utilities/strings';
// import numbers from '../utilities/numbers';
// import arrays from '../utilities/arrays';
// import myFunc from '../utilities/myFunc';
// import countries from "../index";
import newArr from "../index"


//--------------- Functions testing --------------------.
// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

// it('It should capitalize a string', () => {
//    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
// })

// it('Should be a sum greater than 10', () => {
//    expect(numbers.sum(3, 10)).toBeGreaterThan(10)
// })

// it('Should multiply 3 by 5 and be 15', () => {
//    expect(numbers.multiply(3, 5)).toBe(15)
// })

// it('Should add numbers in array and be truthy', () => {
//    expect(arrays.addArr(numArr)).toBeTruthy();
// })

// it('Should concatenate 2 arrays to not equal just 1', () => {
//    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
// })

// it('Should not contain the third index', () => {
//    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
// })


// it ('should not have a large number and be falsy', () => {
//    expect(arrays.lgNum(wordArr)).toBeFalsy();
// });

// // ------------ myFunc ----------------
// it('expect myFunc(5) to equal 25', () => {
//    expect(myFunc(5)).toEqual(25);
// })

// it('expect myFunc(5) to equal 25', () => {
//    expect(myFunc(5)).toBe(25);
// })

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];


// // The value are the same but there do ne represent the same index in memory
// it('expect arr1 to be equal arr2', () => {
//    expect(arr1).toEqual(arr2);
// })

// it('expect arr1 to be equal arr2', () => {
//    expect(arr1).toEqual(arr2);
// })

/*
Truthiness
.toBeTruthy() passes when
The expectation has any non-zero value
The expectation evaluates to true
.toBeFalsy() passes when the value is:
0
'' (an empty string)
undefined
null
NaN
If you just need the Boolean value of false, use .toEqual()
Numerical Matchers
.toBeCloseTo(expected value, precision)
Passes if a value is within a specified precision of the expected value
Precision is optional and is represented the number of decimal points to check (defaults to 2)
.toBeGreaterThan(expected value)
.toBeLessThan(expected value)
.toBeGreaterThanOrEqual(expected value)
.toBeLessThanOrEqual(expected value)
Negating Other Matchers
In JavaScript, use the ! to negate
In TypeScript, use not
In Jasmine, use .not
Exceptions
.toThrow(expected value)
.toThrowError(expected value, expected message) (expected value and expected message are optional)
Other Matchers
.toContain(expected value)
.toMatch(expected value)
.toBeDefined()
.toBeUndefined()
.toBeNull()
.toBeNan()



Comparaison

Truthiness

Matchers

toEqual checks if the tested value is equal to the expected value

toBe checks if tested object is the same object

*/


//--------------- Async testing ------------------------>

// it("should get basica data on the country canada", async () => {
// 	const data = await countries.getCountry('canada');
// 	expect(data).toEqual({
// 		capital: 'Ottawa',
// 		region: 'Americas',
// 		numericCode: '124'
// 	});
// });

// /** Add test for getRegionCountries function here */

// it("should get the countries in the region NAFTA", async () => {
//    const data = await countries.getRegionCountries('nafta');
//    expect(data).toEqual([
//        'Canada', 'Mexico', 'United States of America'
//    ]);
// });


// it("should get capitals of NAFTA countries", async () => {
// 	const data = await countries.getRegionCapitals('nafta');
// 	expect(data).toEqual([
// 		'Ottawa', 'Mexico City', 'Washington, D.C.'
// 	]);
// });

//--------------- Endpoint testing ----------------------->

// import supertest from 'supertest';
// import app from '../index';

// const request = supertest(app);

// describe('Test endpoint responses', () => {
//    it('gets the api endpoint', async () => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//    });
// });


//--------------   Teardown ----------------------------------->
// Use beforAll(() => {} // To check the value before running the test
/*
Suites are set up to organize the tests with one parent suite and 2 child suites.
There are an object and an array providing data to be used within the child suites.
beforeAll();can be used to run some code before the specs run, and any log statements show up before the specs.
afterAll(); allows functionality to be added after all of the specs in a suite have run. Log statements will show after the specs.
beforeEach(); a
nd afterEach(); will run before or after each one of the individual specs.
fdescribe and fit allows jasmine to focus on one specific suite, skipping the others
xdescribe and xit allows Jasmine to skip a specific suite or test, running all others. */

describe('newArr should add a new item to the start of array', () => {
   const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

   it('should make a new array containing dog', () => {
       expect(newArr(3, wordArr)).toContain('dog');
   });
   it('make a new array containing 3', () => {
       expect(newArr(3, wordArr)).toContain(3);
   });
});