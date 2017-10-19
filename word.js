var Letter = require("./letter.js")

function Word (targetWord) {
	this.targetWord = targetWord;
	this.letters = [];
	this.letterFound = false;

	this.getLetter = function () {
		for (var i = 0; i < this.targetWord.length; i++) {
			this.letters.push(new Letter(this.targetWord[i]));
		}
	};

	this.findWord = function () {
		this.letterFound = this.letters.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.letterFound;
	};

	this.checkLetter = function (guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].letter == guessLetter) {
				this.letters[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.makeWord = function () {
		var string = "";
		for (var i = 0; i < this.letters.length; i++) {
			string += this.letters[i].makeLetter();
		}
		return string;
	};
}

module.exports = Word;

