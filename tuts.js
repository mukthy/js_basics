// Primitive Data Types are stored in the stack.
// String, Number, Boolean, undefined, null, Symbol.

//string
const name = 'Mukthy';
//number
const age = 30;

console.log(typeof name);
console.log(typeof age);

//boolean
const hasKids = true;
//null
const car = null;

console.log(typeof hasKids);
console.log(typeof car);

//undefined
let test;
console.log(typeof test);

//symbol
const sym = Symbol();
console.log(typeof sym);

// Reference Data Types are stored in the heap.
// Object, Function, Array, date, etc.

//Array
const hobbies = ['movies', 'music'];

//object literal
const address = {
    city: 'Boston',
    state: 'MA'
}

console.log(typeof hobbies);
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);


// Type Conversion
let val;

// Number to String
val = String(555);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

//array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();


// String to Number
val = Number('5');

// Boolean to Number
val = Number(true);
val = Number(false);

// Null to Number
val = Number(null);
val = Number('hello');

val = parseInt('100.30');
val = parseFloat('100.30');

// output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

// NaN - Not a Number

// Type Coercion
const val1 = String(5);
const val2 = 6;

const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);


// Numbers and Math Object

const num1 = 100;
const num2 = 50;

let res;

// Simple Math with Numbers
res = num1 + num2;
res = num1 * num2;
res = num1 - num2;
res = num1 / num2;
res = num1 % num2;



//output
console.log(res);


// Math Object
res = Math.PI;



//String Conactination and String Methods

const firstName = 'William';
const lastName = 'Johnson';

let fullName;

fullName = firstName + lastName;


// Concatenation

fullName = firstName + ' ' + lastName;


// Append
myName = 'Mukthy';
myName += ' M';

console.log(myName);

// Escaping

fullName = 'Than\'s awesom, I can\'t wait';

// Length Method
fullName = firstName.length;

// Concat Method

fullName = firstName.concat(' ', lastName);

// Change Case
fullName = firstName.toUpperCase();
fullName = firstName.toLowerCase();

fullName = firstName[0];

// Index of

fullName = firstName.indexOf('l');
fullName = firstName.lastIndexOf('l');


// charAt()
fullName = firstName.charAt('2');

// Get last char
fullName = firstName.charAt(firstName.length - 1);


// substring()
fullName = firstName.substring(0, 4);

// slice()
fullName = firstName.slice(0, 4);
fullName = firstName.slice(-3);

// split()
str = 'Hello there my name is Mukthy';
tags = 'web design, web development, programming';

let str_res
str_res = str.split(' ');
console.log(str_res);

let tags_res
tags_res = tags.split(',');
console.log(tags_res);

// replace()
fullName = str.replace('Mukthy', 'Mukthy M');

// includes()
fullName = str.includes('Mukthy');

console.log(fullName);

