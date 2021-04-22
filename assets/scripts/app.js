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
  // your JS code goes here
})
