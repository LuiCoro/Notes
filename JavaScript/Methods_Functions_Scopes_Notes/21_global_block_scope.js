// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

if (true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}
// The Return
// If Scope: 4 5 6
// Global Scope: 4 2 3
// Notice how the 4 is only number that switched postions thats beacuse var is wierd

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}


console.log('Global Scope: ', a, b, c);

