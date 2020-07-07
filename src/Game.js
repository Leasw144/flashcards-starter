const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentDeck = prototypeQuestions
    this.currentRound = null
  }

  start() {
    const cards = prototypeQuestions.map(card => new Card(
      card.id, 
      card.question, 
      card.answers, 
      card.correctAnswer
    ));
    const deck = new Deck(this.currentDeck)
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck)
    this.printQuestion(this.currentRound) 
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}


module.exports = Game;
