"use strict";
// Basic Types
let id = 5;
let company = 'Edmond Gaks';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple 
let person = ['Edmond', 1, true];
// Tuple arrray
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Mary']
];
// Union
let pid;
pid = '123';
// Enums 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
