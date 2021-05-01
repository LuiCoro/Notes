/*

//IMPORTANT COPY AND PASTE THIS PAGE ONTO script.js TO SEE NOTES ALONG WITH THEIR CONSOLE OUTPUT!!!!!!!!!!

// Value Example
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Luis');
console.log(22);

// Asinging Variables to values to use them
let firstName = 'Omi';
console.log(firstName);
console.log(firstName);
console.log(firstName);
// NOTE Notice when declared you can call the value and you can use it lot

// This is not a good example on declaring(Creating) a Variable
// IMPORTANT Variable names CAN ONLY CONTAIN NUMBERS,LETTERS, UNDERSCORES, AND/OR $!!!
let 3years = 3;

// NOTE CANNOT USE DEFINED PHARSES OR EXPRESSONS LIKE BELOW:
let new = "text"
let function = "example"

// Heres an EX to make defined pharses work
let _function = "example"
// or
let $function = "44"
console.log(_function);
console.log($function);

// IMPORTANT name is a special word because it is reserved but we are able to use it! Sometimes your not able to us it so its best to avoid if possible
let name = "Incineroar";
console.log(name);

// IMPORTANT Avoid starting Variables with Capital Letters
// Nothing wrong with it but ists used for certain jobs in JavaScript.. PLEASE AVOID

// VARIABBLE NAMED CONVENTIONS
let Person = 'Billy';
console.log(Person);

// IMPORTANT All CAPITAL LETTERS ARE RESERVED FOR CONSTANTS THAT WILL NEVER CHANGE!
let PI = 3.1415;
console.log(PI);

// IMPORTANT ALWAYTS TRY TO MAKE SURE YOUR VARIABLES ARE DESCRIPTIVE AS POSSIBLE
// EX
// LIKE THIS:
let favoriteFood = 'Pizza';
let favoriteDrink = 'Coffee';
console.log(favoriteFood);
console.log(favoriteDrink);
// NOT LIKE THIS:
let food1 = 'Apples'
let food2 = 'Milk';
console.log(food1);
console.log(food2);

================================

// Every Value is either:
// An Object
let me = {
  name: 'Omi'
};
// OR A PRIMITIVE Value
let favSnack = 'pizza';
let price = 11.99;


// 7 PRIMITIVE TYPES

Number:
floating point numbers -> Used for decimals and intergers
let speed = 50;

STRING:
Sequence of characters -> Used for text
ALWAYS USE SINGLE OR DOUBLE QUOTES!!!!
let firstName = 'Lui';

Boolean:
Logical Type that can only be TURE or FALSE!
let fullSpeed = true;

Undefined:
Value taken by a variable is not yet defined ('Empty Value')
let car;

Null:
Also means 'empty value'

Symbol (ES2015):
Value that is unique and cannot be changed

Bifint (ES2020)
Larger integers than the  NUmber type can hold

BOOLEANS
let iLovePizza = true;
console.log(iLovePizza);
The vaule represents the type of value
console.log(typeof true);

console.log(typeof true); // retunrs as BOOLEAN
console.log(typeof iLovePizza); // returns as BOOLEAN
console.log(typeof 444); // returns as NUMBER
console.log(typeof 'Coffee'); // retunrs as STRING IMPORTANT ALWAYS USE '' OR "" WHEN WORKING WITH STRINGS

ASSIGNING NEW VALUE TO VARIABLES
To change you put variable = changed value see below
iLovePizza = 'Hell YEAH!';
console.log(iLovePizza); // now retunrs as Hell Yeah!
console.log(typeof iLovePizza); //returns as String

let month;
console.log(month); //retunrs as UNDEFINED
console.log(typeof month); //Also returns as UNDEFINED
// UNDEFINED IS BASICALLY BOTH THE TYPE OF VALUE AND TYPE OF VALUE

// TIME To change the Value
month = 'April';
console.log(month); // now retunrs as APRIL
console.log(typeof month); // retuns as STRING
month = 04;
console.log(month); // Now returns as 04
console.log(typeof month); // retuns as Number now instead of STRING

console.log(typeof null); //retuns as OBJECT this is an ERROR! Should have retuned undefined

// Its okay to use LET to define variables and top cahnge them later
let age = 30;
age = 31;

// Const variables acn never be changed
const birthYear = 1998;
// birthYear = 1990; // RETURNS as 'ASSINGMETN TO CONSTANT VARIABLE'

// Cannot declare empty varibales with const
// const job; //RETURNS as "Missing intitilaizer in const declaration"
// ALWAYS IMPORTANT TO USE AS LITTLE VARIABLE MUTAIONS AS POSSIBLE to ensure there are less bugs in the code

var job = 'Trainer';
job = 'Back End Developer';

// NEVER DO THIS!
lastName = 'Corona';
console.log(lastName);


// Math Operators
const present = 2021;
const ageOmi = present - 1998;
const ageLui = present - 2000;
console.log(ageOmi, ageLui);
//retunrs as both 23 and 21 Always use a COMMA when you want to conole.log mroe then one item.

// Logging different values alnog with different opertors!
console.log(ageOmi * 2, ageLui / 7); //RETURNS AS 46 3 CORRECT!

console.log(ageOmi * 2, ageLui / 7, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2 * 2 * 2)

// THE ( + ) CAN BE USED TO ADD STRING TOGETHEIR(CONCATDANATE)
const firstName = 'Omi';
const lastName = 'Corona';
console.log(firstName + lastName); // RETUNRS AS 'OmiCorona'
// Now time to add a space
console.log(firstName + ' ' + lastName) // RETRUNS: OMI CORONA

// Asingment Operators(useing 2 different operators):
let x = 10 + 5; // RETURNS AS 15
x += 10; // x = x +10 = 25 (x= 15 + 10)
x /= 5; // x = x / 5 = 5 (x = 25 / 5)
x *= 4; // x = x * 4 =20 (x = 20 / 4)
x++; // x = x + 1
x--; // x = x - 1
x--; //retuns as 19 (21 - 2)
console.log(x);

// Comparison Operators (Used to create BOOLEANS)
console.log(ageOmi > ageLui); //RETURNS: TRUE (23 > 21)
console.log(ageOmi < ageLui); //RETURNS: FALSE (23 < 21)
console.log(ageOmi >= 18); //RETURNS: TRUE (23 >= 18)
console.log(ageOmi <= 18); //RETURNS: FLASE (23 <= 18)

// To stash the code into a variable look below:
const isFullAge = ageOmi >= 18;
console.log(isFullAge); //RETUNRS AS TRUE

// NOW ALL ON ONE LINE
console.log(present - 1998 > present - 2000) // RETURNS: TRUE

============================================================

// OPERATOR PRECEDENCE
// Check this LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const present = 2021;
const ageOmi = present - 1998;
const ageLui = present - 2000;


console.log(present - 1998 > present - 2000)

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

// Calutlating average age of Omi and Lui
const exampleAverage = ageLui + ageOmi / 2
console.log(ageOmi, ageLui, exampleAverage);
// Returns as 23 21 32.5 but wait average is wrong because the table(SEE link ABOVE) so we need to add ( )!
const averageAge = (ageLui + ageOmi) / 2;
console.log(ageLui, ageOmi, averageAge);
// NOW RETUNRS AS 21 23 22 <- THE CORRECT AVERAGE!

==============================================================

// STRINGS USAGE (OLD METHOD)

const firstName = 'Omi';
const job = 'Back End Developer'
const birthYear = 1998;
const year = 2021;
// IMPORTANT TO USE "" WHEN using words like I'm , isn't , etc
const omi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(omi);

// Template Literals ( BETTER WAY );
const omiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(omiNew);

// console.log(`Just a regular string...`);

// Creating multi-line strings(before ES6)
console.log('String with \n\
multiple \n\
lines');

// Creating Multi-Line strings ( with ES6):
console.log(`String
multiple
lines
with
ES6`);

==========================================================

// Taking Decisions: if / else Statement:

const age = 15;
// WINDOWS KEY + . = EMOJIS

if (age >= 18) {
  console.log('Omi can get a driver license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Omi is too young, wait another ${yearsLeft} years :) `);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

==============================================================

// TYPE CONVERSION:
// WHEN WE WAN TTO CONVERT FROM ON ETYPE TO ANOTHER!

// CONVERTING STRINGS TO NUMBERS:
const inputYear = '1998';
// console.log(inputYear + 18); RETURNS AS 199818
console.log(Number(inputYear)); //NOW A NUMBER
console.log(Number(inputYear) + 18); //RETURNS AS 2016

console.log(Number('Omi')); // RETURNS AS NaN
console.log(typeof NaN); // Invaild Number

// CONVERTING NUMBER TO STRING:
console.log(String(23)); //RETURNS AS A STRING OF 23

// TYPE COERCION:
// IMPORTANT the + is what starts the coercion
console.log('I am ' + 23 + ' years old');
// Below the ( - ) does the opposite so makes strings to num:
console.log('23' - '10' - 3); // RETURNS 10
// COMPARE TO ADDITION:
console.log('23' + '10' + 3); // RETUNRS 23103
// BOTH MULTI. AND DIVISONs convert Strings to Numbers:
console.log('23' * '2'); //retunrs 46 CORRECT
console.log('10' / '5'); //retunrs 2 CORRECT
console.log('23' > '18'); //retunrs TRUE

let n = '1' + 1; // OUTPUT STING '11'
n = n - 1; // n = 11 - 1
console.log(n); //retunrns as 10

//FLASY VALUES - Are values not excatly false but will become false when we try to convert to Boolean

// 5 FLASY VALUES : 0, '',UNDEFINED, NULL, NaN
console.log(Boolean(0)); // FALSE
console.log(Boolean(undefined)); //FALSE
console.log(Boolean('Omi')); // TRUE
console.log(Boolean({})); // TRUE
console.log(Boolean('')); // FALSE

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED!!!!')
}

*/






