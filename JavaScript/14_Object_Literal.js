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