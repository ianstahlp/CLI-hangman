var game = require('./CLI.js');
var wordExp = require('./word.js');
var letterExp = require('./letter.js');
var inquirer = require('inquirer');
var chosenWord = game.chosenWord;
var guessedLetters;
exports.letter;

var myWord = new wordExp.wordExp(game.chosenWord);
var guesses = 10;

function guess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= guesses) {
		console.log('Out of guesses, scrub');

		return;
	}

	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter: ',
		validate: function(str) {
			var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
			return regEx.test(str);
		}
	}]).then(function( letterInput ) {

		var letter = letterInput.letter;
		myWord.findLetter( letter ); 
		if (myWord.completed()) {
			console.log('Correcto senor! Es ' + myWord.toString() + "! *spanish phrase*");
			return;
		}
		console.log('--------------\n');
		console.log('You have ' + (guesses - myWord.guessesMade.length) + 'guesses left...');

		guess();
	});
}

guess();