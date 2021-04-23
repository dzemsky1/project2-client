'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.error)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.error)
}

const onSignOut = function (event) {
  console.log('test')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.error)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.error)
}

const onCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.createAnimal(data)
    .then(ui.onCreateSuccess)
    .catch(ui.error)
}

const onView = function () {
  event.preventDefault()
  api.viewAnimals()
    .then(ui.onViewSuccess)
    .catch(ui.error)
}

const onAllView = function () {
  event.preventDefault()
  api.allViewAnimals()
    .then(ui.onAllViewSuccess)
    .catch(ui.error)
}

const onUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateAnimal(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.error)
}

const onDestroy = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.destroyAnimal(data)
    .then(ui.onDestroySuccess)
    .catch(ui.error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onView,
  onCreate,
  onUpdate,
  onDestroy,
  onAllView
}
