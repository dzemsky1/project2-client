'use strict'

const onSignUpSuccess = function () {
  $('#sign-up-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Youre all signed up!')
}

const onSignInSuccess = function () {
  $('#sign-in-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Welcome!')
}

const onError = function () {
  $('.toast').toast('show')
  $('.toast-body').text('Error!')
}




module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
