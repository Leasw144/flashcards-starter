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
    if (turn.guess === this.currentCard.correctAnswer) {
      return `${ this.currentCard.correctAnswer } is Correct!`
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      return `Incorrect! The answer is ${this.currentCard.correctAnswer}`
    }
  }

  calculatePercent() {
    if (this.incorrectGuesses.length >= 1) {
      console.log(Math.round(100 - ((this.incorrectGuesses.length / this.deck.cards.length) * 100)))
      return Math.round(100 - ((this.incorrectGuesses.length / this.deck.cards.length) * 100))
    } else {
      return 100
    }
  }
}

module.exports = Round
//