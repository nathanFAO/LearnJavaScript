"use strict";
//------------------
//Basics
//------------------
// convert to more or less specific 
let a = 'Hello';
let b = a; //less specific
let c = a; // More Specific 
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// String return, Be careful
let nextVal = addOrConcat(2, 2, 'concat');
10;
// The DOM
const img = document.querySelector('img'); // Not null
const myImg = document.getElementById('#img');
img.src;
myImg.src;
