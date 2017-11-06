'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#credential-message').text('Sign-up Successful')
}

const signUpFailure = function () {
  $('#credential-message').text('Sign-up Failure')
}

const signInSuccess = function (data) {
  $('#credential-message').text('Sign-in Success')
  store.user = data
}

const signInFailure = function () {
  $('#credential-message').text('Sign-in Failure')
}

const signOutSuccess = function () {
  $('#credential-message').text('Sign out Success')
  store.user = null
}
const signOutFailure = function () {
  $('#credential-message').text('Sign-out Failure')
}

const changeSuccess = function () {
  $('#credential-message').text('Password change successful')
}

const changeFailure = function (error) {
  $('credential-message').text('Password change failed')
  console.log(error)
}

const showSuccess = function (data) {
  console.log(data)
}

const showFailure = function (error) {
  console.log(error)
}

const createSuccess = function (data) {
  store.game = data
  console.log(data)
}

const createFailure = function () {
  $('credential-message').text('Game creation failed')
}

const findSuccess = function (data) {
  console.log(data)
}

const findFailure = function (data) {
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changeSuccess,
  changeFailure,
  showSuccess,
  showFailure,
  createSuccess,
  createFailure,
  findSuccess,
  findFailure
}
