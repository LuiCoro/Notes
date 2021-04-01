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

// Use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse Sort
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
// EXAMPLE FORM HOME WORK FOR MORE HELP ON ARRAYS
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!
/*
Use the copy function below to do the following:
    1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
    2. Return a copy of the received array  
*/

function copy(arr) {
  return [...arr];
}

console.log(copy(originalFlavors));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
  1. an array as a parameter
  2. Check to see if the array given is 31 flavors
  3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/


function is31Flavors(arr) {
  if (arr.length === 31) {
    return true;
  } else {
    return false;
  }
}

console.log(is31Flavors(originalFlavors));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 
Use the addFlavor function below to do the following:
  1. Receive an array
  2. Receive a new flavor as a string
  3. The function adds the passed flavor to the front of the passed array
  4. The function should return the resulting array
  For example: addFlavor(originalFlavors, "Rainbow Sherbert") should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/


function addFlavor(arr, flavor) {
  arr.unshift(flavor);
  return arr;
}

console.log(addFlavor(originalFlavors, "Rainbow Sherbert"));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 
Use the removeLastFlavor function below to do the following:
  1. Receive an array
  2. Remove the last item from the received array
  3. Return the resulting array
  For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/

function removeLastFlavor(arr) {
  arr.pop();
  return arr;
}

console.log(removeLastFlavor(originalFlavors));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.
Use the getFlavorByIndex function below to do the following:
  1. Recieve an array
  2. Receive a number (the desired index)
  3. Return the flavor located at the received index position
  For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/

function getFlavorByIndex(arr, index) {
  return arr[index];
}

console.log(getFlavorByIndex(originalFlavors, 2));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  
Use the removeFlavorByName function below to do the following:
  1. Receive an array
  2. Receive a flavor as a string
  3. Remove the received flavor from the received array
  4. Return the resulting array that now contains one less flavor
  For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 
  HINT: You can use .splice() for this
*/

function removeFlavorByName(arr, flavor) {
  arr.splice(arr.indexOf(flavor), 1);
  return arr;
}

console.log(removeFlavorByName(originalFlavors, "Rocky Road"));
console.log(originalFlavors.length); // 30

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.
Use the filterByWord function below to do the following:
  1. Receive an array
  2. Receive a string (example: "chocolate")
  3. Check to see if any of the flavors in the array contain that string
  4. If they do, add them to a new array
  5. Return the new array that contains the filtered flavors
  For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]
  HINT - you can use the .includes method to help you solve this
  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/

function filterByWord(arr, string) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(string)) {
      results.push(arr[i]);
    }
  }
  return results;
}