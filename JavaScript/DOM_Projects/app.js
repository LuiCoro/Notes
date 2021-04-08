// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listeners
loadEventListeners();

// Load All Event Listeners
function loadEventListeners() {
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove Task Event
  taskList.addEventListener('click', removeTask);
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add A Task!');
  }

  // Create Li Element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  // Create text Node & Append to  LI
  li.appendChild(document.createTextNode(taskInput.value));
  // Create New Link Element
  const link = document.createElement('a');
  // Add A Class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  // Append The Link to Li
  li.appendChild(link);
  // Append Li to Ul
  taskList.appendChild(li);
  // Clear Input
  taskInput.value = '';

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  console.log(e.target);
}