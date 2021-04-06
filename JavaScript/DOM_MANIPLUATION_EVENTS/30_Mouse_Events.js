const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Double CLick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedowm
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// MouseEnter
card.addEventListener('mouseenter', runEvent);
// MouseLeave
card.addEventListener('mouseleave', runEvent);
// MouseOver
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// EVENT HANDLER
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // CHanges Task text content
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40)`;
}