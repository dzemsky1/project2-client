'use strict'
const store = require('./store')

const onSignUpSuccess = function () {
  $('#sign-up-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Youre all signed up!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#animal-options').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#signed-in-options').show()
  $('.toast').toast('show')
  $('.toast-body').text('Welcome!')
}

const onSignOutSuccess = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#signed-in-options').hide()
  $('#animal-options').hide()
  $('.toast').toast('show')
  $('.toast-body').text('Goodbye!')
  console.log(store.user)
  // store.user = null
}

const onChangePasswordSuccess = function () {
  $('#sign-in-form').trigger('reset')
  console.log('pw should change')
  $('.toast').toast('show')
  $('.toast-body').text('Good Choice!')
}

const onCreateSuccess = function () {
  $('#create-form').trigger('reset')
  console.log('animal created?')
  $('.toast').toast('show')
  $('.toast-body').text('Roaaaarrrrrrrr!')
}

const onViewSuccess = function (response) {
  console.log(response)
  $('#create-form').trigger('reset')
  console.log('animal viwed?')
  $('.toast').toast('show')
  $('.toast-body').text('Here they are!')
}


const onError = function () {
  $('.toast').toast('show')
  $('.toast-body').text('Error!')
}




module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateSuccess,
  onViewSuccess,
  onError
}
