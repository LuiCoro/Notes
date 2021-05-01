// IMPORTANT -  MUST HAVE HTML FILE IN LIVE SERVER RUNNING put in app.js
// document.getElementById()
// if we wanted to selsect the Task Title in <h5>
console.log(document.getElementById("task-title"));
// RETURNS AS <h5 id="task-title">Tasks</h5>

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// CHnage Styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// This makes any element disapppear
// taskTitle.style.display = 'none';

// CHange Content Using Any Of These 3
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// ================================================================

// document.querySelector()
// RETURNS AS <h5 id="task-title">Tasks</h5>
console.log(document.querySelector("#task-title"));
// RETURNS AS <span class="card-title">Task List</span>
console.log(document.querySelector(".card-title"));
// CAN GRAB ANYTHING!!!! BECARFUL WHEN MULTIPLY IT ONLY GETS FIRST ONE
console.log(document.querySelector("h5"));

// THIS ONLY COLORS FIRST OF ITS KIND
document.querySelector("li").style.color = "red";
// A BIT MORE SPECIFIC WHEN IT COMES TO SELECTING
document.querySelector("ul li").style.color = "blue";

// SELECTING THE LAST ITEM
// NOW THE LAST ITEM ON LIST IS RED
document.querySelector("li:last-child").style.color = "red";
// THIS MAKES THE 3RD LIST ITEM YELLOW
document.querySelector("li:nth-child(3)").style.color = "yellow";
// THE 4TH LIST ITEM NOW READS BAMMMMM
document.querySelector("li:nth-child(4)").textContent = "BAMMMM";
// only first odd is effect in a sibgle element selector
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
// ONLY FIRST EVEN LIST NUMBER GOES FIRST
document.querySelector("li:nth-child(even)").style.background = "#f4f4";
