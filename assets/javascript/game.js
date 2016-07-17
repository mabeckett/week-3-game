$(document).ready(function() {

	var gameBank = ["super mario bros", "the legend of zelda", "bionic commando", "mega man", "metroid"];
        randomWord = "";
        guesses = [];
        lives = 10;

    function newWord() {
    	randomWord = gameBank[Math.floor(Math.random() * gameBank.length)];
    }
    function createBlank() {
	    var crBlank = "";

	    for (var i = 0; i < randomWord.length; i++) {
	        if (guesses.indexOf(randomWord[i].toLowerCase(), 0) == -1) {
	            crBlank += "_";
	        } else {
	            crBlank += randomWord[i];
	        }
	    }
	    return crBlank;
	}
	function drawWord() {
	    while (randomWord == "") {
	        newWord();
	    }
	    $('#targetWord').html(createBlank());
	}
	function remainingLives() {
	    var livesRemaining = lives,
	            string = randomWord.toLowerCase();

	    for (var i = 0; i < guesses.length; i++) {
	        if (string.indexOf(guesses[i], 0) == -1) {
	            livesRemaining--;
	        }
	    }
    }




})

	



