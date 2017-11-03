'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

const setIndex = function (id) {
// Set the index to corespond with the given id parameter
  let index
  if (id === 'box0') {
    index = 0
  } else if (id === 'box1') {
    index = 1
  } else if (id === 'box2') {
    index = 2
  } else if (id === 'box3') {
    index = 3
  } else if (id === 'box4') {
    index = 4
  } else if (id === 'box5') {
    index = 5
  } else if (id === 'box6') {
    index = 6
  } else if (id === 'box7') {
    index = 7
  } else if (id === 'box8') {
    index = 8
  }
  return index
}

const didIWin = function (currentPlayer) {
  if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else {
    return false
  }
}

const onClick = function (event) {
  const content = event.target.innerText
  const id = event.target.id
  const index = setIndex(id)
  // Detect whether the spot is empty and post the correct symbol
  if (content === '') {
    $('#' + id).html(currentPlayer)
    board[index] = currentPlayer
    // Check victory condition
    if (didIWin(currentPlayer)) {
      return
    }
    // Switch players
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else if (currentPlayer === 'O') {
      currentPlayer = 'X'
    }
    $('.message').html('It is now ' + currentPlayer + '\'s turn')
  } else {
    // Inform player if the space is occupied
    $('.message').html('That space is occupied')
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
}

const onShowGames = function (event) {
  event.preventDefault()
  api.showGames()
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onCreateGames = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const addHandlers = function () {
  $('#box0').click(onClick)
  $('#box1').click(onClick)
  $('#box2').click(onClick)
  $('#box3').click(onClick)
  $('#box4').click(onClick)
  $('#box5').click(onClick)
  $('#box6').click(onClick)
  $('#box7').click(onClick)
  $('#box8').click(onClick)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#show-games').on('submit', onShowGames)
  $('#create-game').on('submit', onCreateGames)
}

module.exports = {
  addHandlers,
  currentPlayer
}
