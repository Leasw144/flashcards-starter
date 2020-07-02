const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Card = require('../src/Card')

class Game {
  constructor(currentDeck) {
    this.currentRound = 0;
    this.currentDeck = prototypeQuestions
  }

  start() {
    var deck = new Deck(this.currentDeck)
    // var round = new Round(deck)
    // this.printMessage(deck, round)
    // this.printQuestion(round)
    return deck
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