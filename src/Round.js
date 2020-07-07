const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turn = 0
    this.incorrectGuesses = []
    this.percentageCorrect = null
  }

  returnCurrentCard() {
    return this.deck.cards[this.turn]
  }

  takeTurn(guess) {
    var card = this.deck.cards[this.turn]
    var turn = new Turn(guess, card)
    var statement

    if (turn.guess === card.correctAnswer) {
      statement = `${ card.correctAnswer } is Correct!`
    } else {
      this.incorrectGuesses.push(card.id)
      statement = `Incorrect! The answer is ${card.correctAnswer}`
    }

    this.turn++
    return statement
  }

  calculatePercent() {
    var result;
    if (this.incorrectGuesses.length >= 1) {
      result = Math.round(100 - ((this.incorrectGuesses.length / this.deck.cards.length) * 100))
      this.percentageCorrect = result
      return result
      
    } else {
      this.percentageCorrect = 100
      return result
    }
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercent()}% of the questions correctly!`)
    return process.exit()
  }

}

module.exports = Round
//
