// Create Some Arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get Array Length ( How many values are in an Array)
val = numbers.length;
// Check to see if something is an Array
val = Array.isArray(numbers);
// Getting A Single Value
val = numbers[3];
val = numbers[0];
// Insert Into Array
numbers[2] = 100;
// Find The Index Of A Value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to the end of the array
numbers.push(250);
// Add to Front
numbers.unshift(120);
// take off from the end of array
numbers.pop();
// Take off from the front
numbers.shift();
// Splice Values
numbers.splice(1, 3);
// Reverse Array
numbers.reverse();

// Concatenate ARRAY
val = numbers.concat(numbers2);

// Sorting of Array
val = fruit.sort();
val = numbers.sort();

// // Use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
});

// // Reverse Sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);