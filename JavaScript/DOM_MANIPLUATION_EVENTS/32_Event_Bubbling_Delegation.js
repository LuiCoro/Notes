// Event Bubbling
document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});

// Event Delgation
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  console.log('delete item');
  console.log(e.target);
}

// THIS GIVES US THE I TAG 
function deleteItem(e) {
  if (e.target.className === 'fa fa-remove') {
    console.log('delete item');
  }
}

function deleteItem(e) {
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    console.log('delete item');
  }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    // This will now let you delete tasks with the x icon
    e.target.parentElement.parentElement.remove();
  }
}