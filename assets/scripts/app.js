'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#animal-options').hide()
  $('#signed-in-options').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-form').on('submit', authEvents.onCreate)
  $('#view-button').on('click', authEvents.onView)
  $('#update-form').on('submit', authEvents.onUpdate)
  $('#destroy-form').on('submit', authEvents.onDestroy)
  // your JS code goes here
})

dragElement(document.getElementById('sign-up-div'))
dragElement(document.getElementById('sign-in-div'))
dragElement(document.getElementById('update-div'))
dragElement(document.getElementById('destroy-div'))
dragElement(document.getElementById('create-div'))

function dragElement (elmnt) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0
  if (document.getElementById(elmnt.id + 'header')) {
    /* if present, the header is where you move the DIV from: */
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV: */
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag (e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement () {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
