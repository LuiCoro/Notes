// Function Decleration
// firstName is in the parameter spot
function greet(firstName, lastName) {
  if (typeof firstName === 'undefined') { firstName = 'John' }
  if (typeof lastName === 'undefined') { lastName = 'Doe' }
  console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith'));
console.log(greet());

// FUNCTION EXPRESSION

const square = function (x = 3) {
  return x * x;
};

console.log(square());

// IMMIDEIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// NEEDS TO END WITH A () FOR IT TO WORK  
(function () {
  console.log('IIFE Ran...');
})();

(function () {
  console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
// WHEN EVER A fUNCTION IS IN AN OBJECT ITS CALLED A METHOD

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22)