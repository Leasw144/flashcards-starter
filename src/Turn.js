class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }
  
  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    var possibleAnswers = this.card.answers
    console.log(this.card.answers)
    if (this.guess === this.card.correctAnswer) {
      return true
    } else if(!this.guess.includes(possibleAnswers) || this.guess === this.card.correctAnswer) {
      return false
    }
  }

  giveFeedback(result) {

    return result === true ? 'Correct!' : 'Incorrect!'
  }
}

module.exports = Turn
//npm test test/Turn-test.js