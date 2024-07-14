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
