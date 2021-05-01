// PASTE CODE FROM NOTES IN HERE TO SEE HOW IT WORKS!!
// STUDY HARD!
let val;

val = document;
// HTML COLLECTION
val = document.all;
// ACCESS CERTAIN INDEX
// IT GIVES us the fist one. Just like an Array starts at 0
val = document.all[0];
// COUNTS ALL THE ELEMENTS
val = document.all.length;
// THIS WE GIVE US THE <HEAD> TAG
val = document.head;
// THIS RETURNS THE BODY TAG
val = document.body;
// Guves us the Document TYPE
val = document.doctype;
// LOOP BACK ADDRES
// RETURNS AS 127.0.0.1 AKA LOCAL DOMAIN
val = document.domain;
// THIS WILL GIVE WHOLE PORT http://
val = document.URL;
// INSERT TITLE
val = document.characterSet;
// GIVES US THE DOCEMNT TYPE THIS CASE ITS Text/HTML
val = document.contentType;

val = document.forms;
// This will reurn the index <forms id="task-from">...</forms>
val = document.forms[0];
val = document.forms[0].id;
// RETURNS AS get
val = document.forms[0].method;
val = document.forms[0].action;

//  THIS SHOWS US LISTS OF LINKS
val = document.links;
// This will return the first link <a href="#">...</a>
val = document.links[0];
val = document.links[0].id;
// Getting the classname of a Link
val = document.links[0].className;
// List of all class and the amount
val = document.links[0].classList;
// Getting a specific item returns as ( delete-item )
val = document.links[0].classList[0];

// images will return a collection
val = document.images;

// same with scrpits returns as [script, script, script]
val = document.scripts;
val = document.scripts[2].getAttribute("src");

// RETURNS ALL THE SCRIPT TAGS
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script);
});

console.log(val);
