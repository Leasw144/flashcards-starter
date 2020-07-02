const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turn = 0
    this.incorrectGuesses = []
    this.currentCard = 0
  }

  returnCurrentCard() {
    return (`this is the returned card `, this.deck.cards[this.currentCard])
  }

  takeTurn(guess) {
    this.turn = this.turn += 1
    var turn = new Turn(guess, this.deck.cards[this.turn])
    this.currentCard = this.deck.cards[this.turn]
    if(turn.guess === turn.card.correctAnswer) {
      return `Correct!`
    } else {
      this.incorrectGuesses.push(turn.card.id)
      console.log(`Incorrect!`)
      return this.incorrectGuesses
    }
  }

  calculatePercent(incorrectGuesses) {
    console.log('length', this.deck.cards.length)
    if (this.turn === this.deck.card.length && incorrectGuesses.length < 0) {
      return incorrectGuesses.length / this.deck.length
    } else {
      return 100
    }
  }
}

module.exports = Round
//