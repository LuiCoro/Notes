const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'me@email.com',
  hobbies: ['music', 'sports',],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  // The ( this. ) is used for getting info stored in object
  getBirthYear: function () {
    return 2021 - this.age;
  }
}

let val;

val = person;
// Get A Specific Value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.email;
val = person.getBirthYear();


console.log(val);

const people = [
  { name: 'Jonh', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nacy', age: 40 },
];
// For Loop Statement. (as long as i is less than the length of the array +1)
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// Object Class Notes

//         0  1 2 3 4  5 6 
let arr = [1, 34, 6, 6, 3, 78, 8];
// cup is property
// color is key and "red" is value
let cup = {
  color: "red",
  contents: 0,
  material: "glass",
  state: "solid",
  heightInches: 5,
  weightPounds: 1,
  fill: function () {
    cup.contentsOunces += .5
    return this; //referring to parent object
  }
}

cup.color = "blue";
cup.material = "plastic";
cup.brand = "Great Value";
// Deleting items
delete cup.color;



console.log(cup.brand)
console.log(cup['color']) // Bracket Notation
console.log(cup.fill) // Dot Notation For objects
console.log(cup)

// This lists all the keys in an Objexzt
for (let key in cup) {
  console.log(key)
}

// Methods
console.log(Object.keys(cup))
console.log(Object.values(cup))
console.log(Object.entries(cup))

console.log(this) DONT DO THIS

Array.prototype = {
  pop: function () { }, // - last index
  push: function (thingToAdd) { }, // + Last index
  shift: function () { },
  unshift: function (thingToAdd) { },
}