// # Lecture30--Setting-Up-The-Environment-Cipherschools
// In this lecture we have set up the environment for node.js by creating 
// folders - node/math/src File-app.js
// Command used : npm init, cd node, cd math, node src/app.js, npm start, npm test

// app.js

const addNumbers = (...args) => {
    let sum = 0;
    args.forEach((arg) => (sum += arg));
    return sum;
};
console.log(addNumbers(4, 5, 1, -2, 10, 5));




// package.json

{
  "name": "math",
  "version": "1.0.0",
  "description": "This is a test app based on Math.",
  "main": "app.js",
  "scripts": {
    "start":"node src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Venkateshwara Raju Chakrahari",
  "license": "ISC"
}
