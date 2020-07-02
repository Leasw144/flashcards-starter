const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')

// const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

// const deck = new Deck([card1, card2, card3]);
// // const round = new Round(deck);



describe('Round', function() {
  let card1, card2, card3, deck
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);
  })

  it('Should have a returnCurrentCard method that returns the current card being played', function() {
    // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    const round = new Round(deck);
    // console.log('Our console log to admire', round.deck.cards[0])
    
    var currentCard = round.returnCurrentCard()
    expect(currentCard).to.equal(card1)
  })

  it('Should create a new instance of Turn when a guess has been made', function() {
    const round = new Round(deck);
    var currentTurn = round.takeTurn('sea otter')

    expect(round.turn instanceof Turn, true);
  })

  it('The turns count is updated regardless of the answer', function() {
    const round = new Round(deck);
    var newRound = round.takeTurn('sea otter')
    
    expect(round.turns).to.equal(1)
  })

  it('When takeTurn occurs, the first card is removed from the deck and the second card becomes the new current card', function() {
    const round = new Round(deck);

    var newDeck = round.takeTurn('derp')
    // console.log(`this is newDeck `, newDeck.cards)
    // console.log(`this is card2`, card2)
    expect(round.deck.cards[0]).to.equal(card2)
  })

  it('Incorrect guesses will be recorded in the incorrectGuesses array', function() {
    const round = new Round(deck);
    
    var newDeck = round.takeTurn('derp')

    expect(newDeck).to.deep.equal([1])
  })

  it('Feedback is returned regarding whether the guess is correct/incorrect', function() {
    const round = new Round(deck);

    var newDeck = round.takeTurn('sea otter')

    expect(newDeck).to.equal(`Correct!`)
  })
})