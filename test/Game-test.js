const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')

describe('Game', function() {

  // let card1, card2, card3, deck
  // beforeEach(() => {
  //   card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  //   card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

  //   card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  //   deck = new Deck([card1, card2, card3]);
  // })

  it(`Should keep track of the currentRound`, function() {
    // const round = new Round(deck);
    const game = new Game()
    expect(game.currentRound.turn).to.equal(1)
  })

  it('Start method should create cards', function () {
    const game = new Game()

    game.start()
    expect(game.currentDeck[1].id).to.equal(2)

  }) 
  it('Start method should create a deck of cards', function () {
    
    const game = new Game()
    var firstCard = game.start()

    var card = game.start()
    expect(game.currentDeck[0].id).to.equal(1)

  }) 

  it('', function() {
    const game = new Game()
    expect().to.equal()

  }) 
  // it('', function() {
  //   const round = new Round(deck);
  //   const game = new Game()
  //   expect().to.equal()

  // }) 
})