"use strict";
//------------------
//Basics
//------------------
// Literal types
let myName;
let userName;
userName = 'Dave';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
