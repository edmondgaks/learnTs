// Basic Types
let id: number = 5
let company: string = 'Edmond Gaks'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number 
age = 30

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']

// Tuple 
let person: [string, number,boolean] = ['Edmond',1,true]
// Tuple arrray
let employee: [number,string][]

employee = [
    [1,'Brad'],
    [2,'John'],
    [3,'Mary']
]

// Union
let pid: string | number
pid = '123'

// Enums 
enum Direction1 {
    Up=1,
    down,
    left,
    right
}


enum Direction2 {
    Up= 'Up',
    down = 'Down',
    left = 'Left',
    right = 'Right'
}
// Objects 

type User = {
    id: number,
    name: string,
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number,y: number): number {
    return x+y
}
function log(message: string | number): void {
    console.log(message)
}
