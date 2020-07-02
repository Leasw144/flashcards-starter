const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound = null;
    this.currentDeck = []
  }

  start() {
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    this.currentDeck = cards
    var deck = new Deck(this.currentDeck)
    var round = new Round (deck)
    this.currentRound = round
    console.log(this.currentRound.turn)
    // this.printMessage(deck, round)
    // this.printQuestion(round)
    
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;