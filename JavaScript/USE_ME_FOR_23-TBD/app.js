// IMPORTANT - add a section.colletion-item on line34 in html 
// document.getElementsByClassName

// This retruns section so this is whole thing
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// // Makes List Items appear red
// items[0].style.color = 'red';
// // Changes textwithin
// items[3].textContent = 'Changed'
// // This only returns wahats inside the eleent 
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// IMPORTANT - More or Less same as above but with tags 
// document.getElementsByTagName
// Another li collection with tag
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// // returns first li class
// console.log(lis[0]);
// // changes 2nd list item to blue
// lis[1].style.color = 'blue';
// // changes last List item text
// lis[4].textContent = 'targeted'

// =====================================================
// This alone retuns as lis.reverse() is not a function
// lis.reverse();

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color = 'blue';
lis[4].textContent = 'targeted'


// Convert HTML Collection into array
lis = Array.from()

// This alone retuns as lis.reverse() is not a function
lis.reverse();

console.log(lis);