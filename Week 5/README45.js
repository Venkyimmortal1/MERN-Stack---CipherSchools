# Lecture46--Implementing-JWT-Cipherchools
// In this lecture we have successfully generated a token and verified it in our node.js environment
// The JS code used is : 

// Terminal npm code to install jwt library

// npm i jsonwebtoken

// jwt.js

const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("mongoose");

const CS_SECRET_KEY = "CSSecretKey";

const generateToken = (payload) => {
    const token = jwt.sign(payload, CS_SECRET_KEY);
    return token;
};

const verifyToken = (token) => {
    try{
        const payload = jwt.verify(token, CS_SECRET_KEY);
        return {isValidToken: true, payload};
    }catch(err){
        console.error(err);
        return {isValidToken: false, payload: undefined};
    }
};

// module.exports = {generateToken, verifyToken};

// console.log(generateToken({name: "Venkateshwara Raju"}));
console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVua2F0ZXNod2FyYSBSYWp1IiwiaWF0IjoxNzIxODU2MDI1fQ.s0wcm5LxM7YAtB03o1TwP9KmcCYPYZB9HoUTCS_rSaU"));
