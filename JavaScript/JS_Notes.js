// Log to Console
console.log('Hello World'); //console.log is what will be used more
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4,]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error('This is some error');
console.clear();
console.warn('THIS IS A WARNING!');
console.time('Hello');
console.log('YOU GOT THIS!');
console.log('YOU GOT THIS!');
console.log('YOU GOT THIS!');
console.log('YOU GOT THIS!');
console.log('YOU GOT THIS!');
console.log('YOU GOT THIS!');
console.timeEnd('Hello');
/*
    multi
    line
    comments
    */
//------------------------------------------------------------------------
// VOCAB var, let, const
var name = 'John Doe';
console.log(name);

//var and const names can be reasigned while const can't
name = 'Steve Smith';
console.log(name);

// VOCAB Init var (Initalize Variable)
var greeting;  //use this in an if statement
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Variable includes letters, numbers, _, $
// IMPORTANT CAN NOT START WITH A NUMBER

var $name = 'John';
// use the $(symbol) only in J Query

// Multi Word Vars              //IMPORTANT
var firstName = 'John'; // Camel Case mainly used on variables
var first_name = 'Sara'; // Underscore Method(Underscore Convenstion)
var FirstName = 'Tom'; // Pascla Case(Also Starts With Uppercase)
var firstname;
console.log(firstName);
console.log(first_name);

// VOCAB LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// VOCAB CONST(CONSTANT)
const name = 'John';
console.log(name);
// CAN NOT REASSIGN
name = 'Sara';
// HAVE TO ASSIGN A VAULE!!!!
const greeting;
// you get an error message if you do this they need to be defined\

// YOU ARE ABLE TO CHANGED THE INSIDE JUST NOT REASSIGN PERSON(VAR)
// CONST CAN BE MUTATED TO BETTER SUIT YOU 
const person = {
    name: 'John',
    age: 30
};

person.name = 'Sara';
person.age = 25;

// console.log(person);

const number = [1, 2, 3, 4, 5]; // This is a Array
number.push(6);

console.log(number);

// -----------------------------------------------------------------------

// VOCAB PRIMITIVE

// VOCAB STRING
const name = 'John Doe';
// VOCAB NUMBER
const age = 45;
// VOCAB BOOLEANS(NEVER HAS QUOTES!)
const hasKids = true;
// VOCAB NULL(BUG! WILL COME UP AS OBJECT IF ON typeof)
const car = null;
// VOCAB UNDEFINED
let test;
// VOCAB Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym)

// REVIEW REFERENCE TYPES - Objects
// NOTE Array
const hobbies = ['movies', 'music'];
// NOTE Object Literal
const address = {
    city: 'Riverside',
    state: 'California'
}
const today = new Date();

console.log(typeof hobbies);
console.log(typeof address);
console.log(today);
console.log(typeof today);

// ----------------------------------------------------------------------

let val;

// NOTE NUMBER to STRING
val = String(555);
val = String(4 + 4);
// NOTE BOOLEAN to String
val = String(true);
// NOTE DATE to STRINGA
val = String(new Date())
// NOTE ARRAY to STRING
val = String([1, 2, 3, 4,]);

// NOTE toString() METHOD
val = (5).toString();
val = (true).toString();

// NOTE STRING to Number
val = Number('5'); // returns as 5.00
val = Number(true);// returns as 1
val = Number(false);// returns as 0
val = Number(null);// returns as 0
val = Number('hello'); // returns as NaN(NOT A NUMBER)
val = Number([1, 2, 3]); // reurns as Nan

val = parseInt('100.30');// passes it as a integer
val = parseFloat('100.30');
// passes as with the deciemle point detetrmined by the .toFixed

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);// Gives you character length of string
console.log(val.toFixed(2)); // Gives you decemile of number

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

// RESULTS returns as 56 & String because they basically combine
// You can use Number(var1 + var2) to get rid of string!

// ----------------------------------------------------------------------5

const num1 = 100;
const num2 = 50;
let val;

// Simple math with number
val = num1 + num2; // returns as 150
val = num1 * num2; // returns as 7500
val = num1 - num2; // retuns as 50
val = num1 / num2; // retuns as 2
val = num1 % num2; // retuns as 0

// NOTE Math Object
val = Math.PI; // returns value Pi
val = Math.E; // returns value of 2.71828182849045(Ulears Numbers)
val = Math.round(2.8); // retuns as 3. This is ued when roundinng numbers
val = Math.ceil(3.9); // returns as 4. This is used to round only up
val = Math.floor(4.3); // retuns as 4, This is used to round down
val = Math.sqrt(25); // retuns the Square Root of a number in this case 5
val = Math.abs(-2); // retruns the absolute value of a number
val = Math.pow(8, 2); // retuns the power vlue. (8 to the 2nd power is 64)
val = Math.min(2, 56, 678, 234, 2); //retuns the smallest vaule regardless if its neg.
val = Math.max(45, 234, 46, 23, 65); // retuns the highest number in this case 234
val = Math.random(); //returns as a random dec. number (in this case returns as 0.800404...)

val = Math.random() * 20; // retuns a random number between 0 to 19 not counting 20 with dec.
val = Math.random() * 20 + 1; // returns a random number between 0 to 10 now it includes 10
val = Math.floor(Math.random() * 20 + 1); // returns a random number between 0 to 5. NO DEC.

console.log(val);

// -------------------------------------------------------------------------------------------

const firstName = 'Luis';
const lastName = 'Corona';
const age = 22;
const str = 'Hello there my name is Omi';
const tags = 'web design,web development,programming';
let val;

val = firstName + lastName; // Returns as LuisCorona... now we need a space

// NOTE Concatentaion
val = firstName + ' ' + lastName; // Concatention in this line is (+=)

// NOTE Append (add onto a variable)
val = 'Echo ';
val += 'Blu'; //This is where the append happens (+=)

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// NOTE Escaping
val = "That's awesome, I can't wait"; // You can either use "" or you can use/(Ex. That/'s)

// NOTE Length
val = firstName.length;

// NOTE Concat
val = firstName.concat(' ', lastName); // Another way of doing it besides Append

// NOTE Change Case
val = firstName.toUpperCase();
val = lastName.toUpperCase();

// NOTE This is an Array
val = firstName[0]; // This returns as L why? Well it basically counts the string starting @0

// NOTE indexOf()
val = firstName.indexOf('s'); // retuns as 3(s). Counts uppwards from Start
val = lastName.indexOf('o'); // returns as 1(o). Counts downwards starts at End!

// NOTE chartAt()
val = firstName.charAt('2');

// NOTE Get Last Char
val = firstName.charAt(firstName.length - 1); // Returns last Chara(s)

// NOTE substring()
val = firstName.substring(0, 2); // returns as Lu( returns whats in '(x, y)')

// NOTE slice()
val = firstName.slice(0, 2); // This is used with Arrays can also be used with strings
val = firstName.slice(0, -3);// retruns as Lu simliar to substring() but this starts at end

// NOTE split()
// splits a string into an Array based on a seperator
val = str.split(' ');
// Returns as ["Hello", "there", "my", "name", "is", "Omi"] slits at all spaces
val = tags.split(','); // retuns as["web design", "web development", "programming"]

// NOTE replace()
val = str.replace('Omi', 'Omii'); //replaces whats inside the (y) with the (x)

// NOTE includes()
val = str.includes('Hello'); // Returns as true because the word is in the string check str.
val = str.includes('Pepper');// Returns as false because 'Pepper' is not in str

console.log(val);
// -------------------------------------------------------------------------------------------

const name = 'Luis'
const age = 23;
const job = 'Web Developer';
const city = 'Mira Loma';
let html;

// IMPORTANT NOTE Without template strings (es5)
html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>Job:' + job + '<li></li>City:' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +     //this is the same way just cleaner code
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';

function hello() {
    return 'hello';
}
// EXAMPLE With Template Strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
				<li>${hello()}</li>
				<li>${age > 30 ? 'Over 30' : 'Under 30 GG Mate'}</li>
        </ul>
`;
// Still the as above only alot neater!


document.body.innerHTML = html;

//  OLD WAYS OF DOING THINGS NOT RECOMMNEDED!!!!
// -------------------------------------------------------------------------------------------   