'use strict'
const store = require('./store')

const didIWin = function (currentPlayer, gameBoard) {
  if (gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[3] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[6] === currentPlayer && gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[0] === currentPlayer && gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[1] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[2] === currentPlayer && gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else if (gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer) {
    $('.message').html('Player ' + currentPlayer + ' wins!')
    return true
  } else {
    return false
  }
}

const signUpSuccess = function () {
  $('#feedback-message').text('Sign-up Successful')
}

const signUpFailure = function () {
  $('#feedback-message').text('Sign-up Failure')
}

const signInSuccess = function (data) {
  $('.sign-in-page').hide(100)
  $('.game-page').show(200)
  $('#feedback-message').text('Sign-in Success')
  store.user = data.user
}

const signInFailure = function () {
  $('#feedback-message').text('Sign-in Failure')
}

const signOutSuccess = function () {
  $('#feedback-message').text('Sign out Success')
  $('.game-page').hide(100)
  $('.sign-in-page').show(200)
  store.user = null
}
const signOutFailure = function () {
  $('#feedback-message').text('Sign-out Failure')
}

const changeSuccess = function () {
  $('#feedback-message').text('Password change successful')
}

const changeFailure = function () {
  $('#feedback-message').text('Password change failed')
}

const showSuccess = function (data) {
  let wins = 0
  let losses = 0
  let draws = 0
  for (let i = 0; i < data.games.length; i++) {
    const board = data.games[i].cells
    if (didIWin('X', board)) {
      wins++
    } else if (board.every((element) => element !== '') && didIWin('O', board) === false) {
      draws++
    } else {
      losses++
    }
  }
  $('.message').html('Wins: ' + wins + '<br>Losses: ' + losses + '<br>Draws: ' + draws)
}

const showFailure = function () {
  $('#feedback-message').text('Games could not be retrieved')
}

const createSuccess = function (data) {
  $('.message').text('Game Created')
  store.game = data.game
}

const createFailure = function () {
  $('.message').text('Game creation failed')
}

const findSuccess = function (data) {
  $('#feedback-message').text('Your game is ' + data.game.id)
}

const findFailure = function (data) {
  $('#feedback-message').text('Game not found')
}

const updateSuccess = function () {
  $('#feedback-message').text('Game updated')
}

const updateFailure = function () {
  $('#feedback-message').text('Game not updated')
}

module.exports = {
  didIWin,
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
  findFailure,
  updateSuccess,
  updateFailure
}
