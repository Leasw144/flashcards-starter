const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')


describe('Turn', function() {
  
  it('should be a function', function() {
    const turn = new Turn
    expect(turn).to.be.an.instanceOf(Turn)
  });
  
  it('should take in two arguments', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    const turn = new Turn('object', card)
  
    expect(turn.guess).to.equal('object');
    expect(turn.card.id).to.equal(1)
  })
  

  it('should have a returnGuess method that returns the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var guess = turn.returnGuess()
    expect(guess).to.equal('object')
  } )

  it('Should have returnCard method that returns the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var returnedCard = turn.returnCard()
    expect(returnedCard).to.deep.equal(card)
  })

  it('the guess is included in the given possible answers', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('fish', card)
    var guess = turn.returnGuess()
    var result1 = turn.evaluateGuess(guess)
    expect(result1).to.equal(false)
  })

  it('Should have a method that determines if guess is correct via boolean', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var guess = turn.returnGuess()
    var result1 = turn.evaluateGuess(guess)
    expect(result1).to.equal(true)

  })

})

