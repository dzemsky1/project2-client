'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function () {
  console.log('woah')
  // event.preventdefault()
  // const form = event.target
  // const data = getFormFields(form)
  // api.signUp(data)
  //   .then(ui.onSignUpSuccess)
  //   .catch(ui.error)
}

module.exports = {
  onSignUp
}
