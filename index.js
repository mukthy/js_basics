// Comments
console.log('Hello World');

// variables
//1. it cannot be a reserved keyword.
//2. Make sure its meaningful.
//3. It should not start with a number.
//4. It should not contain space or hyphen.
//5. It is case Sensitive.
let firstName = 'Mukthy';  // string literal
let lastName = 'M'
console.log(firstName, lastName);
console.log(lastName);

// constants
// 1. make sure to use const when u want the value to be constant.
// 2. do not re-assign the value.
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

// Data Types
// 1. Primitive Value types

let name = 'Mukthy';  // string literal
let age = '30';     // number literal

let isApproved = true;      // boolean literal
let fName = undefined;      // if we do not initialize a variable it will be undefined automatically.
let lname = null;       // when we want to clear the value of the variable.

//typeof <variable name>
//typeof name give the type of the variable.

// js does not have a decimal or floating type. Floating number is also a number type.

// 2. Reference Types
// Object.

let person = {
    name: 'Mukthy',
    age: '30'
}; // these curly braces are object literals

// how to change the property value of object.
//1. Dot Notations
;
person.name = 'Mukthy.Dot';

console.log(person);

//2. Bracket Notations
person['name'] = 'Mukthy.Bracket';
console.log(person);

// Example:
let selection = 'name';
person[selection] = 'SelectioName';
console.log(person);

// Arrarys
let selectedColors = ['red', 'blue']; // arrary literals
console.log(selectedColors);
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length); 
// array is a datastructure to represnt a list of items

// function

function greet() {
    console.log('Hello World');
}

greet();

// function with parameters

function greet1(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet1('Mukthy', 'M');


// Square functions

function square(num){
    return num * num;
}

let sq = square(2);
console.log(sq)


const prompt = require('prompt-sync')();

input = prompt('What is your Name?')
console.log(typeof(input));
console.log(input);




















