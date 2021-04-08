// REPLACE ELEMENT
// CREATE ELEMENT
const newHeading = document.createElement('h2');
// ADD ID
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// GET THE OLD HEADING
const oldHeading = document.getElementById('task-title');
// PARENT
const cardAction = document.querySelector('.card-action');
// REplace
cardAction.replaceChild(newHeading, oldHeading);
// REMOVE ELEMETN
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// REMOVE LIST ITEM
lis[0].remove();
// REMOVE CHILD ELEMENT
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
// CLASSES
val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;
// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);