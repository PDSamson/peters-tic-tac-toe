'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    },
    data
  })
}

const showGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    }
  })
}

const findGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    }
  })
}

const gameUpdate = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.user.token
    },
    data: store.gameState
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  showGames,
  createGame,
  findGame,
  gameUpdate
}
