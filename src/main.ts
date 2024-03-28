//--------------------------------------------------------------------------------------------------------------------------
//Basics
//--------------------------------------------------------------------------------------------------------------------------

// let username = 'rashi';
// console.log(username);

// let a: number = 12;
// let b: number=  6;
// let c: number = 2;

// console.log(a / b)

// console.log(c * b)

//------------------------------------------------------------------------------------------------------------------------------
//Terminology
//------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------
// Arrays and Objects
//------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------
// Functions
//------------------------------------------------------------------------------------------------------------------------------

//type Aliases

// type stringOrNumber = string | number

// type stringOrNumberArray = (string | number)[]

// type Guitarist = {
//        name?: string,
//        active: boolean, //Question mark can be optional
//        albuns: stringOrNumberArray
//     }

//     type UserID = stringOrNumber

//     // Literal types

//     let myName: 'Dave'

//     let userName: 'Dave' | 'John' | 'Ammy'

//     userName = 'Dave'

//     // Functions

//     const add = (a: number, b: number):number => {

//         return a + b;
//     }

//     const logMsg = (message: any): void => {

//         console.log(message)
//     }

//     logMsg('Hello!')
//     logMsg(add(2, 3))

//     let subtract = function (c: number, d: number):number {
//         return c - d
//     }

//  type mathFunction = (a: number, b: number) => number

//  let multiply: mathFunction = (n, m) => {
//     return m * n
//  }

//  logMsg(multiply(2, 2))

//  // Opitional Parameters

//  const addAll = (a:number, b:number, c?:number):number => {
    
//     if(typeof c !== 'undefined'){
//         return a + b + c
//     }
//     return a + b

//  }

//  const sumAll = (a:number, b:number, c:number = 0):number => {
    
//         return a + b + c
 

//  }

//  logMsg(addAll(2, 3, 2))
//  logMsg(addAll(2, 3))

//  logMsg(sumAll(2, 3, 13))

//  // Rest parameters

//  const total = (...nums: number[]): number => {

//     return nums.reduce((prev, curr) => prev + curr)
//  }

// const createError = (errMsg: string):never => {

//     throw new Error(errMsg)
// }

// const numberOrString = (value: number | string):string => {

//     if(typeof value === 'string') return 'string'
//     if(typeof value === 'number') return 'number'

//     return createError('This Should Never Happen!') 
// }

//------------------------------------------------------------------------------------------------------------------------------
// Type Assertion   
//------------------------------------------------------------------------------------------------------------------------------

// type One = string
// type Two = string | number
// type Three = 'Hello'


// // convert to more or less specific 

// let a: One = 'Hello'
// let b = a as Two //less specific
// let c = a as Three // More Specific 

// let d = <One>'World'
// let e = <string | number>'World'


// const addOrConcat = (a: number, b:number, c: 'add' | 'concat'): number | string =>{

//     if(c === 'add') return a + b
//     return '' + a + b
// }


// let myVal: string = addOrConcat(2, 2, 'concat') as string 

// // String return, Be careful
// let nextVal: number = addOrConcat(2, 2, 'concat') as number


// (10 as unknown) as string

// // The DOM

// const img = document.querySelector('img')! // Not null
// const myImg = document.getElementById('#img') as  HTMLImageElement
// const nextImg = <HTMLImageElement>document.getElementById('#img')


// img.src
// myImg.src

//------------------------------------------------------------------------------------------------------------------------------
// Classes
//------------------------------------------------------------------------------------------------------------------------------

// class Coder {
    
//    secondLang!: string

//     constructor(
//         public readonly name:string,
//         public  music: string,
//         private age:number,
//         protected lang:string = 'Typescript'
//         ){

//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
        
        
//     }

//     public getAge() {

//         return `Hello, I'm ${this.age}`
//     }
// }





// const dave = new Coder('Dave', 'Rock', 42)
// console.log(dave.getAge())
// // console.log(dave.age)
// // console.log(dave.lang)

// class WebDev extends Coder {

//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//     ){
//         super(name, music, age)
//         this.computer = computer

        
//     }
//     public getLang(){
//         return `I write ${this.lang}`    }
// }

// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

// console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)

/////////////////////////////////////////

// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string,

// }

// class Guitarist implements Musician {
    
//     name: string
//     instrument: string

//     constructor(name: string, instrument: string){
//         this.name = name
//         this.instrument = instrument
//     }

//     play(action: string) {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const Page = new Guitarist('Jimmy', 'Guitar')

// console.log(Page.play('strums'))

// //////////////////////////////////////////////

// class Peeps {

//     static count: number = 0
//     static getCount(): number {

//         return Peeps.count

//     }
//     public id: number

//     constructor(public name:string){
//         this.name = name
//         this.id = ++Peeps.count // ++ na esquerda = 1, ++ na direita = 0
//     }
// }


// const John = new Peeps('John')
// const Steve = new Peeps('Steve')
// const Amy = new Peeps('Amy')

// console.log(Steve.id)


// //////////////////////////////////////////////

// class Bands {

//     private dataState: string[]

//     constructor(){
//         this.dataState = []
//     }

//     public get data(): string[] {
//         return this.dataState
//     }

//     public set data(value: string[]){

//         if(Array.isArray(value) && value.every(el => typeof el === 'string')){
//             this.dataState = value
//             return 
//         }
//         else throw new Error('Param is not an array of strings')
//     }
// }

// const myBands = new Bands()

// myBands.data = ['Neil Young', 'Led Zep']

// console.log(myBands.data)
// myBands.data = [...myBands.data, 'ZZ Top']


//------------------------------------------------------------------------------------------------------------------------------
// Index Signatures and keyof
//------------------------------------------------------------------------------------------------------------------------------

//  interface transactionObj {
//     readonly [index: string]:number
//      Pizza: number,
//      Books: number,
//     Job: number
//  }

// // interface transactionObj {
// //     readonly [index: string]: number
// // }

// const todaysTransaction: transactionObj = {
//     Pizza : -10,
//     Books: -5,
//     Job:50,
//     Dave: 30
// }

// console.log(todaysTransaction.Pizza)
// console.log(todaysTransaction['Pizza'])


// let prop: string = 'Pizza'

// console.log(todaysTransaction[prop])

// const todaysNet = (transactions: transactionObj): number => {
//     let total = 0
//     for (const transaction in transactions){
//         total += transactions[transaction]
//     }
//     return total
// }

// console.log(todaysNet(todaysTransaction))

// console.log(todaysTransaction)

// /////////////////////////////////////////////////////////////

// interface Student {
// //    [key: string]: string | number | number[] | undefined
//     name: string
//     GPA: number
//     classes?:number[]
// }

// const student: Student = {
//     name: 'Doug',
//     GPA: 3.5,
//     classes: [100, 200]
// }

// //console.log(student.classes)

// for (const key in student){
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }

// Object.keys(student).map(key => {console.log(student[key as keyof typeof student])})

// const logStudentKey = (student: Student, key: keyof Student):void => {
//     console.log(`Student ${key}: ${student[key]}`)
// }

// logStudentKey(student, 'name')

// //////////////////////////////////////////

// // interface Incomes {
// //     [key:string]: number
// // }

// type Streams = 'salary' | 'bonus' | 'sidehustle'

// type Incomes = Record<Streams, number | string>

// const monthlyIncomes: Incomes = {
//     salary: 500,
//     bonus: 100,
//     sidehustle: 250
// }

// for (const revenue in monthlyIncomes){
//     console.log(monthlyIncomes[revenue as keyof Incomes])
// }

//------------------------------------------------------------------------------------------------------------------------------
// Generics
//------------------------------------------------------------------------------------------------------------------------------

const echo = <T>(arg: T): T=> arg

const isObj = <T>(arg: T): boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj({name: 'John'}))
console.log(isObj(1))

const isTrue = <T>(arg: T): {arg: T, is:boolean} => {
    
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false }
    }
    return {arg, is: !!arg}
}

