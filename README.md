npm init
npm init -y 
npm install package-name

//----------- Prettier & Eslint--------------->

npm i --save-dev prettier@2.5.1
npm i --save-dev eslint@8.8.0
npm i --save-dev eslint-config-prettier@8.3.0  // Installed ESLint Config Prettier
npm i --save-dev eslint-plugin-prettier@4.0.0 // Installed ESLint Prettier Plugin

//Created scripts for both prettier and ESLint. Example:
"lint": "eslint 'index.js'",
"prettier": "prettier --config .prettierrc '*.js' --write"

// example config file, path structure to check, and write fixes 
"prettier": "prettier --config .prettierrc 'src/**/*.js' --write"
// or
"prettier": "prettier --config .prettierrc \"src/**/*.js\" --write"

npm run lint


//----------- TypeScript set up --------------->
$ npm i typescript // save to dependencies
$ npm i typescript --save-dev // save to devDependencies
npm i --save-dev ts-node
npm i --save-dev @types/node



-------  Test-Driven Development ---------
Test-Driven Development is a development style well suited for backend development. It focuses on writing unit and integration tests that produce expected results.

Test-driven development follows a development cycle:

A feature request comes in
Tests are written for the most simple functionality of the feature that includes edge cases and failure expectations
Tests fail due to lack of code
Code is written to make tests pass
Code is refactored to be most concise and easy to read


"scripts": {
    "build": "npx tsc"
  },

npm run build

--- Configuration ----
npx tsc --init // Create a tsconfig.json for configuration


-------- Jasmine installation ---------------

npm i jasmine

Add a reporter for outputting Jasmine results to the terminal:
npm i jasmine-spec-reporter 

Add type definitions for Jasmine with :
npm i --save-dev @types/jasmine

// Script
"jasmine": "jasmine"

// File structure

├── node_modules
├── spec
│      └── support
│           └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json

--------- Always -------
npm run build
npm run jasmine

//------------- Endpoint testing -------------->

npm i supertest
npm i --save-dev @types/supertest
npm i --save-dev @types/express


├── node_modules
├── spec
│ ├── support
│ └── jasmine.json
├── src
│ ├── tests
│ │ ├── helpers
│ │ │ └── reporter.ts
│ │ ├── utilities
│ │ │ ├── arraysSpec.ts
│ │ │ ├── numbersSpec.ts
│ │ │ └── stringsSpec.ts
│ │ └── indexSpec.ts
│ ├── utilities
│ │ ├── arrays.ts
│ │ ├── numbers.ts
│ │ └── strings.ts
│ └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json


//------------------- Differents typesmf test ----------------

UI Testing: Does the user interface work as expected?
End to End Testing: Does the application work as expected?
Integration Testing: Do services integrate as expected?
Unit Testing: Does the code run as expected?

//----------------------- Server Express ----------------------------->

Idempotency
Definition:
“A request is said to be idempotent when making multiple requests to the API that are identical produce the same result.”
Idempotency and API Methods:
The only method not considered idempotent is POST.
POST adds a new resource each time; on the other hand, GET, DELETE, PATCH, and PUT act on the same resource each time with the same result.
Idempotency and Security
Get:
Safe because the database doesn’t change
Endpoint is stored in session history
Can be cached
Often logged
Post:
Endpoint not stored in session history
Protects user data from being inadvertently exposed

//-------------- New Terms --------------
Term	Definition
DELETE	HTTP request that removes data from the server
GET	HTTP request that retrieves data from the server
Idempotency	When making multiple identical requests to the API produce the same results each time
PATCH	HTTP request that updates data on the server
POST	HTTP request that sends data to the server
PUT	HTTP request that replaces data on the server
Query parameter	A key-value pair added to the end of a URL to supply data through the URL that can be used by the application
Route	The name or path used to access endpoints


//------------- Installation----------------------
 npm i --save-dev nodemon
 npm i express
 npm i --save-dev @types/express

 npm run start => start the server
 npm run build => Will build the code
 node dist/.

 CTRL + C to stop the server


 //------------------------ Middleware --------------------->

 - Logging requests to the server
 - Checking user privileges
 - Working with Cross-origin ressource sharing (CORS)

 --------- Type of Middleware-----------
 - Expresss builtin middleware
 - Third party middleware
 - Custom middleware


Using Middleware
There are two ways of applying middleware:

Application/route level
Applies the middleware to an entire application or the entirety of a route on either the entry point application object, or to specific routes (view working with routes).

.use();
The .use(); method is a method that can be applied to the application object or to route objects. It is used for applying middleware and can take in a route, and middleware as arguments

app.use(middleware);
Endpoint level
Applies middleware to a specific endpoint.

students.get('/', middleware, (req, res) => { // do stuff });
Applying Multiple Middleware
It's possible to apply multiple middlewares to an application/route or endpoint.

Using an Array
Create an array of the names of the middleware and apply that on app/route or endpoint level

const middleware = [cors, logger];

app.use(middleware); // app level
students.get('/', middleware, (req, res) => { // do stuff }); // endpoint level
Listing Middleware
List out the middleware

app.use(cors(), logger); // app level 
students.get('/', cors(), logger, (req, res) => { // do stuff }); // endpoint level
Writing Middleware
Middleware is really just a function that is applied between the request and response. As such, if writing middleware, you create a function.

A middleware function takes at least 3 arguments (req, res, next); a 4th is also available of err (err, req, res, next) for use in writing error-handling middleware. Then you write the necessary code to complete your functionality followed by calling the next(); method.

next();
The next method is a method from the express router. next() calls the next middleware in a chain of middlewares. Without adding next to your middleware function, your application will get stuck on the middleware.

const myMiddleware = (req, res, next) => {
  // do stuff
  next();
};


 //------------------------ Routes  --------------------->
import express from 'express';   
const routes = express.Router();

routes.get('/', (req, res) => { //do something });

export default routes;