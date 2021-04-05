// For Loop
// Cant use const in a For Loop Statement
// This Reads out let i = 0 AS LONG as i is > 10; i = i + 1
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }

  if (i === 5) {
    console.log('Thats it!')
    break;
  }
  console.log('Number ' + i);
}

// =========================

// While Loop

let i = 0;

while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// DO WHILE
// ALWAYS GONNA RUN!

let i = 0;

do {
  console.log('Number ' + i);
  i++;
}

while (i < 10);

// LOOP THRU ARAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOR EACH
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Map
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
]
const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);


//FOR IN LOOP
// HOW TO GET BOTH KEY VALUE PAIR
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}


for (let x in user) {
  console.log(`${x}; ${user[x]}`);
}