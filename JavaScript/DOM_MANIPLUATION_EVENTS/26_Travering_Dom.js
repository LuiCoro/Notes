let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
// RETURNS ul class
val = list;

// GET CHILD NODES
val = list.childNodes;
val = list.childNodes[0];
// returns as #text
val = list.childNodes[0].nodeName;
val - list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribtue (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get Children Elemetn Nodes
// RETURNS NODE LESS ALL HTML 
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Hello';
// Childrenof Children
// returns as new id 
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
// First Child
val = list.firstChild;
val = list.firstElementChild;
// last child
val = list.lastChild;
val = list.children[4].id = 'NA'
val = list.lastElementChild;
// Count child ELements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
// returns with the div=card action 
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;

// Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


console.log(val);