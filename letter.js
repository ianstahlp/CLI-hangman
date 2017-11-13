//This whole thing controles whether or not a letter appears as an
// underscore or as itself on-screen

exports.letter = letter;

function letter(value) {

	this.value = value;
	this.show = false;
	if (this.value == ' ') 

		this.show = true;
	
}

letter.prototype.printInfo = function() {

	if (this.show) {
		return this.value;
	}

	return " _ ";
}