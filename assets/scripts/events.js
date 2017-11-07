'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

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

const updateGame = function (i) {
  if (ui.didIWin(currentPlayer, board) || board.every((element) => element !== '')) {
    store.gameState.game.over = true
  }
  store.gameState.game.cell.index = i
  store.gameState.game.cell.value = currentPlayer
  api.gameUpdate()
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onClick = function (event) {
  const content = event.target.innerText
  const id = event.target.id
  const index = setIndex(id)
  if (content === '' && store.gameState.game.over === false) {
    $('#' + id).html(currentPlayer)
    board[index] = currentPlayer
    updateGame(index)
    // Check victory condition
    if (ui.didIWin(currentPlayer, board)) {
      return
    }
    if (board.every((element) => element !== '')) {
      $('.message').html('The game is a tie')
      return
    }
    // Switch players
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else if (currentPlayer === 'O') {
      currentPlayer = 'X'
    }
    $('.message').html('It is now ' + currentPlayer + '\'s turn')
    // Prevent further moves if the game is over
  } else if (store.gameState.game.over === true) {
    $('.message').html('The game is over')
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
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => {
      return api.createGame()
    })
    .then(ui.createSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
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

const onFindGame = function (event) {
  event.preventDefault()
  api.findGame()
    .then(ui.findSuccess)
    .catch(ui.findFailure)
}

const wipeGame = function () {
  for (let i = 0; i < board.length; i++) {
    $('#box' + i).html('')
    board[i] = ''
  }
  store.game = null
  store.gameState.game.over = false
}

const onCreatNewGame = function (event) {
  event.preventDefault()
  wipeGame()
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  store.gameState.game.over = true
  store.gameState.game.cell.index = null
  store.gameState.game.cell.value = null
  updateGame()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(wipeGame())
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('.box').click(onClick)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#show-games').on('submit', onShowGames)
  $('#find-game').on('submit', onFindGame)
  $('#new-game').on('submit', onCreatNewGame)
}

module.exports = {
  addHandlers,
  currentPlayer
}
