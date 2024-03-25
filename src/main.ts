//------------------
//Basics
//------------------

// let username = 'rashi';
// console.log(username);

// let a: number = 12;
// let b: number=  6;
// let c: number = 2;

// console.log(a / b)

// console.log(c * b)

//----------------------
//Terminology
//----------------------

// let myName: string = 'rashi' 
// let meaningOfLife: number
// let isLoading: boolean
// let album: number | string

// isLoading = true

// const sum = (a: number, b: string ) => {

//     return a + b
// }

// let postId: string | number
// let isActive: number | boolean

// //RegExp = Regular Expression
// let re: RegExp = /\w+/g

//----------------------
// Arrays and Objects
//----------------------

// let stringArr = ['one', 'hey', 'Dave']

// let guitars = ['Strat', 'Les Paul', 5150]

// let mixedData = ['EVH', 1984, true]


// stringArr[0] = 'Hwello'
// stringArr.push('hey')

// guitars[0] = 1984

// guitars.unshift('42')

// let bands: string[] = []

// bands.push('Youhou')

// //tuple

// let myTuple: [string, number, boolean] = ['Dave', 42, true]

// let mixed = ['John', 1, false]

// // Objects

// let myObj: object
// myObj = []

// console.log(typeof myObj)

// const exampleObj = {
//     prop1 : 'Dave',
//     prop2: true
// }

// console.log(exampleObj)

// interface Guitarist  {
//     name?: string,
//     active: boolean, //Question mark can be optional
//     albuns: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albuns: [1983, 5150, 'ou812']
// }

// let jp: Guitarist = {
//     name: 'jimmy',
//     active: true,
//     albuns: ['1983', '5150', 'ou812']
// }

// const greetGuitarist = (guitarist: Guitarist) => {

//     if(guitarist.name){
//         return `Hello ${guitarist.name.toString()}!`
//     }
    
// }

// console.log(greetGuitarist(evh))

// // Enums 

// enum Grade {

//     U = 1, 
//     D, 
//     C,
//     B,
//     A,
// }

// console.log(Grade.U);

//----------------------
// Functions
//----------------------

//type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
       name?: string,
       active: boolean, //Question mark can be optional
       albuns: stringOrNumberArray
    }

    type UserID = stringOrNumber

    // Literal types

    let myName: 'Dave'

    let userName: 'Dave' | 'John' | 'Ammy'

    userName = 'Dave'

    // Functions

    const add = (a: number, b: number):number => {

        return a + b;
    }

    const logMsg = (message: any): void => {

        console.log(message)
    }

    logMsg('Hello!')
    logMsg(add(2, 3))