const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// CLEAR INPUT
taskInput.value = '';

form.addEventListener('submit', runEvent);

// KEYDOWN Element
taskInput.addEventListener('keydown', runEvent);
// KEYUP Element
taskInput.addEventListener('keyup', runEvent);
// KEYPRESS Element
taskInput.addEventListener('keypress', runEvent);
// Focus Element
taskInput.addEventListener('focus', runEvent);
// Blurr Element
taskInput.addEventListener('blur', runEvent);
// Cut Element
taskInput.addEventListener('cut', runEvent);
// paste Element
taskInput.addEventListener('paste', runEvent);
// Input Element
// With this type it logs every event
taskInput.addEventListener('input', runEvent);
// Change Element

// IMPORTANT -  TO SEE THIS COMMENT OUT LINE 8 AND ADD COPY&PASTE ON LINE 27 
<select>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
// =======================================================================================
select.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);
  // Makes task heading  come out what we type in new task 
  heading.innerText = e.target.value;


  // Get Input Value
  console.log(taskInput.value);

  e.preventDefault();
}