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
  $('#credential-message').text('Sign-up Successful')
}

const signUpFailure = function () {
  $('#credential-message').text('Sign-up Failure')
}

const signInSuccess = function (data) {
  $('.game-page').show()
  $('.sign-in-page').hide()
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
  $('#credential-message').text('Password change failed')
  console.log(error)
}

const showSuccess = function (data) {
  let wins = 0
  let losses = 0
  let draws = 0
  for (let i = 0; i < data.games.length; i++) {
    const board = data.games[i].cells
    if (didIWin('X', board)) {
      wins++
    } else if (board.every((element) => element !== '')) {
      draws++
    } else {
      losses++
    }
  }
  console.log('Wins: ' + wins + '<br>Losses: ' + losses + '<br>Draws: ' + draws)
  $('.message').html('Wins: ' + wins + '<br>Losses: ' + losses + '<br>Draws: ' + draws)
}

const showFailure = function (error) {
  console.log(error)
}

const createSuccess = function (data) {
  store.game = data
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
  findFailure
}
