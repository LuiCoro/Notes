// IMPORTANT - add a section.colletion-item on line34 in html 
// document.getElementsByClassName

// This retruns section so this is whole thing
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
// Makes List Items appear red
items[0].style.color = 'red';
// Changes textwithin
items[3].textContent = 'Changed'
// This only returns wahats inside the eleent 
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// IMPORTANT - More or Less same as above but with tags 
// document.getElementsByTagName
// Another li collection with tag
const lis = document.getElementsByTagName('li');
console.log(lis);
// returns first li class
console.log(lis[0]);
// changes 2nd list item to blue
lis[1].style.color = 'blue';
// changes last List item text
lis[4].textContent = 'targeted'

// =====================================================
// This alone retuns as lis.reverse() is not a function
lis.reverse();

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color = 'blue';
lis[4].textContent = 'targeted'


// // Convert HTML Collection into array
lis = Array.from(lis);

// // This alone retuns as lis.reverse() is not a function
lis.reverse();

lis.forEach(function (li)) {
  console.log(li.className);
  li.textcontent = `${index}: hello`;
};

console.log(lis);

// documentquerySelectorAll
// DID NOT HAVE TO CHANGE TO ARRAY BECAUSE IT IS NODE LOCKED
const items = document.querySelectorAll('ul.collection li.collection - item');

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

cosnt liOdd = document.querySelectorAll('li:nth-child(odd)');
cosnt liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEVen.length; i++) {
  liEven[i].style.background = '#f4f4';
}

console.log(items);