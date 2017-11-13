var inquirer = require('inquirer');
var fs = require('fs');

//this records how many guesses are left

var wordArray = ['cannonball', 'toothbrush', 'casing', 'phenomenal', 'absinthe'];
var randomWord = Math.floor( Math.random() * wordArray.length);
var chosenWord = wordArray[randomWord];

exports.chosenWord = chosenWord;


