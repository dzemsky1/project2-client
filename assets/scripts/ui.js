'use strict'
const store = require('./store')

const onSignUpSuccess = function () {
  $('#sign-up-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Youre all signed up!')
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('.toast').toast('show')
  $('.toast-body').text('Welcome!')
}

const onSignOutSuccess = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('.toast').toast('show')
  $('.toast-body').text('Goodbye!')
  store.user = null
}

const onError = function () {
  $('.toast').toast('show')
  $('.toast-body').text('Error!')
}




module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError
}
