var Word = require("./word.js");
var prompt = require("prompt");

console.log("Hangman Game!");
console.log("Category is Desserts");

prompt.start();

game = {
	wordBank: ["cake", "popsicle", "churro", "eclair", "strudel", "baklava", "flan", "gelato"],
	timesWon: 0,
	guessesLeft: 10,
	currentWord: null,

	startGame: function (word) {
		this.resetGuesses();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentWord.getLetter();
		this.promptUser();
	},

	resetGuesses: function () {
		this.guessesLeft = 10;
	},

	promptUser: function () {
		var self = this;
		prompt.get(['guessLetter'], function (error, result) {
			console.log("You guessed: " + result.guessLetter);
			var lettersGuessed = self.currentWord.checkLetter(result.guessLetter);

			if (lettersGuessed === 0) {
				console.log("Wrong letter...");
				self.guessesLeft--;
				self.promptUser();
			} else {
				console.log("Correct letter!");
				if (self.currentWord.findWord()) {
					console.log("You Win!!");
					self.promptUser();
					// return;
				}
			}

			console.log("\nGuesses remaining: " + self.guessesLeft);
			if ((self.guessesLeft > 0) && (self.currentWord.found == false)) {
				self.promptUser();
			} else if (self.guessesLeft === 0) {
				console.log("Game Over! Correct dessert was " + self.currentWord.target + ".");
			} else {
				console.log(self.currentWord.makeWord());
			}
		});
	}
};

game.startGame();