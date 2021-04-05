// Guide Line to If / Else Statments
// if (something) {
//   do something
// } else {
//   do something else
// }

const id = 100;

// Equal TO ( == )
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO ( != )
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Equal To Value & Type ( === ) ( Perferred Method )
// Will come back as INCORRECT because its a string
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// How to check when its  Not Equal To Value & Type ()
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if its undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if (id >= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (id <= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// If Else

const color = 'red'
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else if (color === 'orange') {
  console.log('Color is orange')
} else {
  console.log('Color is not found!');
}

// logcial operators

const name = 'Steve';
const age = 20;

// Double && means ( And )
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// ( OR ) ( || )
if (age < 16 || age > 65) {
  console.log(`${name}Can not run in race`);
} else {
  console.log(`${name} is registerd for the race. Good Luck!`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//  WITHOUT  BRACES
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');