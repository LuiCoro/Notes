// Every Value is either:
// An Object
let me = {
  name: 'Omi'
};
// OR A PRIMITIVE Value 
let favSnack = 'pizza';
let price = 11.99;


// 7 PRIMITIVE TYPES

/* Number:
floating point numbers -> Used for decimals and intergers */
let speed = 50;
/**
 * STRING:
 * Sequence of characters -> Used for text
 * ALWAYS USE SINGLE OR DOUBLE QUOTES!!!! */
let firstName = 'Lui';
/** Boolean:
 * Logical Type that can only be TURE or FALSE! */
let fullSpeed = true;
/** Undefined:
 * Value taken by a variable is not yet defined ('Empty Value') */
let car;
/** Null:
 Also means 'empty value' */
/**Symbol (ES2015):
  Value that is unique and cannot be changed */
/** Bifint (ES2020)
 * Larger integers than the  NUmber type can hold */

// BOOLEANS
let iLovePizza = true;
console.log(iLovePizza);
// The vaule represents the type of value
console.log(typeof true);

console.log(typeof true); // retunrs as BOOLEAN
console.log(typeof iLovePizza); // returns as BOOLEAN
console.log(typeof 444); // returns as NUMBER
console.log(typeof 'Coffee'); // retunrs as STRING IMPORTANT ALWAYS USE '' OR "" WHEN WORKING WITH STRINGS

// ASSIGNING NEW VALUE TO VARIABLES
// To change you put variable = changed value see below
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