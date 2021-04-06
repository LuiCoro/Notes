// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// ADD id
li.id = 'new-Item';

// ADD ATTRIBUTE
li.setAttribute('title', 'New Item');

// create text note & append
li.appendChild(document.createTextNode('Hi MY DUDE!'));

// APPEND LI AS CHILD TO ul
document.querySelector('ul.collection').appendChild(li);

// creating new link element
const link = document.createElement('a');
// Add Class
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// APPEND LI AS CHILD TO ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);