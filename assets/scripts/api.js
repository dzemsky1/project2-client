'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const createAnimal = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/animals',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const viewAnimals = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/animals',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateAnimal = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/animals/' + data['ID'],
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createAnimal,
  updateAnimal,
  viewAnimals
}
