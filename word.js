//This is a large brunt of everything to happen. 

//this is hard. i hate this
//enjoy i guess

var letterExp = require('./letter.js');

function word(value) {
    this.value = value;
    this.letters = [];
    this.guessesMade = '';
    for (var i = 0; i < this.value.length; i++) {
    	this.letters.push(new letterExp.letter(this.value[i]));
    }

};

word.prototype.completed = function() {
	for ( var i = 0; i < this.letters.length; i++) {

		if (!this.letters[i].show) { return false; }
	}

		return true;
}

word.prototype.findLetter = function( letter ) {

	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Samesies, try again";
	}
	this.guessesMade += lowerLetter; //records the guesses
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].value.toLowerCase() == lowerLetter) {
			this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function() {

	var output = "";
	for ( var i = 0; i < this.letters.length; i++) {

		output += this.letters[i].printInfo();
	}
	return output;
}

exports.wordExp = word;
