// import arrays from './utilities/arrays.js';
// import numbers from './utilities/numbers.js';
// import strings from './utilities/strings.js';
// import myFunc from './utilities/myFunc.js';

// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ('15' as unknown) as number % 2;
// const five = parseInt('5');


// // The only one function that I have inside of main
// const newArr = (num: number, arr:(string | number)[]): (string | number)[] => {
//     return [num, ...arr];
// }


// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(five, 8));
// console.log(arrays.lgNum(mixArr));
// console.log(myFunc(5))


// //--------------- Async code-----------------------
// /** Use Axios to get data from restcountries api */
// import axios from 'axios';

// /** Use the free API https://restcountries.eu/
//  * You will use the following endpoints
//  * https://restcountries.eu/rest/v2/name/{name} for countries by name
//  * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
//  */

// /** Create getCountry Function here */
// async function getCountry(name: string) {
//     const getApi = await axios(`https://restcountries.com/v2/name/${name}`);
//     const data = getApi.data[0];
//     return {
//         capital: data.capital, 
//         region: data.region,
//         numericCode: data.numericCode
//     };
// }

// /** Create a test for this getRegion function */
// async function getRegionCountries(regionalbloc: string) {
//   const getApi = await axios(
//     `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
//   );
//   const data = getApi.data;
//   const countries = [];
//   for (let i = 0; i < data.length; i++) {
//     countries.push(data[i].name);
//   }
//   return countries;
// }

// /** Create getRegionCapitals function here */
// async function getRegionCapitals(regionalbloc: string) {
//     const countryEndpoints = await getRegionCountries(regionalbloc);
//     const promises = countryEndpoints.map((endpoint: any) => 
//        axios(`https://restcountries.com/v2/name/${endpoint}`
//     ));
//     const arr = await Promise.all(promises);
//     const capitals = [];
//     for (let i=0; i < arr.length; i++) {
//         capitals.push(arr[i].data[0].capital);
//     }
//     return capitals;
// }
// export default {
//   getCountry,
//   getRegionCountries,
//   getRegionCapitals
// };


//--------- Endpoint Testing ------------------->

// import express from 'express';

// const app = express();
// const port =  5001;

// // set the endpoint
// app.get('/api', (req, res) => {
//     res.send("Hello, world.")
// });

// // check for port to avopid already in use error testing
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // if (require.main === module) {
// //     app.listen(port, () => console.log(`Listening on port ${port}`));
// // }
// export default app;

// export = newArr;



//--------------------- Express ------------------->

import express  from "express";
// import routes from './routes/index';

import { promises as fsPromises } from 'fs';
import csv from 'csvtojson';
import { json } from "stream/consumers";


const app = express();
const port = 3000;

//Define a route handler for the default home page
// app.use('/api', routes);



//---- Working with files ------------->
const inputFile = './users.csv';
const outputFile = 'users.json';

app.get('/convert', (req, res) => {
   res.send('converting in process!');
   csv()
   .fromFile(inputFile)
   .then((data) => {
    let newData = data.map((item: {
    first_name: string; 
    last_name: string;
    phone: string; }) =>{
        let first = item.first_name;
        let last = item.last_name;
        let phone = item.phone;
        if(item.phone === ""){
            phone = "missing data";
        }
        return {first, last, phone};
    });
    fsPromises.writeFile(outputFile, JSON.stringify(newData));
   });
});


//Start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})