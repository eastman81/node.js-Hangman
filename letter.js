// function Letter (letter) {
// 	this.letter = letter;
// 	this.appear = false;
// 	this.makeLetter = function () {
// 		return if (!this.appear) {
// 			this.letter = "_";
// 		} else {
// 			this.letter;
// 		}
// 	}
// }


var Letter = function (letter) {
	this.letter = letter;
	this.appear = false;
	this.makeLetter = function() {
		return !(this.appear) ? "_" : this.letter;
	};
};

module.exports = Letter;