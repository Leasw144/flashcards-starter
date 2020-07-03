const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')

describe('Game', function() {



  it(`Should be a function`, function() {
    const game = new Game()

    expect(Game).to.be.a('function')
  })

  it('Should be an instance of Game', function () {
    const game = new Game()

    expect(game).to.be.an.instanceOf(Game)
  }) 

  it('CurrentRound is set to null', function () {
    const game = new Game()

    expect(game.currentRound).to.be.equal(null)
  }) 
})