// // Adding event Lister
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

// // THIS ONLY LOGS THE HELLO WORLD 
//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;

  val = e;

  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target, innerText = 'Hello';
  // Event Type
  val = e.type;

  // Time Stmap
  val = e.timeStamp;

  // Coords Event Relative To The Window
  val = e.clientY;
  val = e.clientX;

  // Coords Event Relative To The Window
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}