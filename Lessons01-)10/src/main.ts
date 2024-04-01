// https://youtu.be/gieEQFIfgYc?si=GJRUmf57MtolTwMg



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

// const echo = <T>(arg: T): T=> arg

// const isObj = <T>(arg: T): boolean => {
//     return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// console.log(isObj({name: 'John'}))
// console.log(isObj(1))

// const isTrue = <T>(arg: T): {arg: T, is:boolean} => {
    
//     if(Array.isArray(arg) && !arg.length){
//         return {arg, is: false }
//     }
//     if(isObj(arg) && !Object.keys(arg as keyof T).length){
//         return {arg, is:false}
//     }
//     return {arg, is: !!arg}
// }

// const ptf = <T>(txt: T): void => {

//    console.log(txt)
// }


// ptf(isTrue(false))
// ptf(isTrue(0))
// ptf(isTrue(true))
// ptf(isTrue(1))
// ptf(isTrue('Dave'))
// ptf(isTrue(''))
// ptf(isTrue(null))
// ptf(isTrue(undefined))
// ptf(isTrue({}))
// ptf(isTrue({name: 'Dave'}))
// ptf(isTrue([]))
// ptf(isTrue([1, 2, 3]))
// ptf(isTrue(NaN))
// ptf(isTrue(-0))


// interface BoolCheck<T> {
//     value: T,
//     is: boolean,
// }

// const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    
//     if(Array.isArray(arg) && !arg.length){
//         return {value: arg, is: false }
//     }
//     if(isObj(arg) && !Object.keys(arg as keyof T).length){
//         return {value: arg, is:false}
//     }
//     return {value: arg, is: !!arg}
// }


// interface HasID {
//     id: number
// }

// const processUser = <T extends HasID>(user: T): T => {
//     //process tge yser wuth logic here
//     return user
// }

// ptf(processUser({id: 1, name: 'Dave'}))
// //ptf(processUser({ name: 'Dave'})) 

// const getUsersPropoerty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
//     return users.map(user => user[key])
// }

// const userArray = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//           "lat": "24.8918",
//           "lng": "21.8984"
//         }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//           "lat": "-14.3990",
//           "lng": "-120.7677"
//         }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//       }
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//           "lat": "24.6463",
//           "lng": "-168.8889"
//         }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//       }
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//           "lat": "-38.2386",
//           "lng": "57.2232"
//         }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//       }
//     }
//   ]

//   ptf(getUsersPropoerty(userArray, "email"))
//   ptf(getUsersPropoerty(userArray, "username"))

//   class StateObject<T> {
//     private data: T
    
//     constructor(value: T) {
//         this.data = value
//     }

//     get state(): T{
//         return this.data
//     }
//     set state(value: T){
//         this.data = value
//     }
//   }

//   const store = new StateObject("John")

//   ptf(store.state)
//   store.state = "Dave"

//   //store.state = 12

//   const myState = new StateObject<(string | number | boolean)[]>([15])

//   myState.state = (['Dave', 42, true])
//   ptf(myState.state)


//------------------------------------------------------------------------------------------------------------------------------
// Utility types
//------------------------------------------------------------------------------------------------------------------------------

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propstoUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propstoUpdate}
}

const ptf = <T>(txt: T): void => {
    console.log(txt)
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
}

ptf(assign1)
ptf(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // pipipi popopo
    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

recordAssignment({...assignGraded, verified: true})

// Record

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type  Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "C"
}


interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 20, assign2: 12}
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A"| "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

//type newAssign = {
//    title: string,
//    points: number
//} 

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const newAssign = createNewAssign("Utility Type", 100)

ptf(newAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics" , 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

ptf(tsAssign2)

// Awaited - Helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res=> {
        return res.json()
    }).catch(err=> {
        if(err instanceof Error) console.log(err.message)
    })

    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))


