var gameBank = {
	gameWords: {
		"super mario bros": {
			picture: "#", 

		},
		"the legend of zelda": {
			picture: "#", 

		},
		"bionic commando": {
			picture: "#", 

		},
		"mega man": {
			picture: "#", 

		},
		"metroid": {
			picture: "#",
		},

	wordInPlay: null,
	lettersOfTheWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,

	setupGame: function() {
		// pick up random word
		var objKeys = Object.keys(this.gameWords);
		this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

		this.lettersOfTheWord = this.wordInPlay.split("");
		this.rebuildWordView();
		this.processUpdateTotalGuesses();

	},

	updatePage: function(letter) {
		if (this.guessesLeft == 0) {
			this.restartGame();

		} else {
			 this.updateGuesses(letter);
			 this.updateMatchLetters(letter);
			 this.rebuildWordView();

			 if (this.updateWins() == true) {
			 	this.restartGame ();

			 }

		}
	},

	updateGuesses: function(letter){
	//if the letter is not in the guessedLetters array
	//and
	//the letter is not in the lettersOfTheWord array
	//then
	//make guesses go down

		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
			
			this.guessedLetters.push(letter);

			this.guessesLeft--;

			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;

			document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');
		}
	},
	processUpdateTotalGuesses: function() {
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// ---Render the guesses left
		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	},
	updateMatchedLetters: function(letter){
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
			};
		};
	},
	rebuildWordView: function() {
		var wordView = "";

		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) ! = -1) {
				wordView += this.lettersOfTheWord[i];
			} else {
				wordView += "&nbsp;_&nbsp;"
			}
		}

		document.querySelector("#current-word").innerHTML = wordView;
	};
	restartGame: function() {
		document.querySelector("#guessed-letters").innerHTML = "";
		this.wordInPlay = null;
		this.lettersOfTheWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setupGame();
		this.rebuildWordView();
	},
	updateWins: function() {
		if (this.matchedLetters.length == 0) {
			var win = false;
		} else {
			var win = true;
		}
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) == -1) {
				win = false;
			}
		}
		if (win == true) {
			this.wins = this.wins + 1;
			document.querySelector("#wins").innerHTML = this.wins;
			document.querySelector("#").innerHTML = this.wordsToPick[this.wordInPlay].song + "by" + this.wordInPlay;

			return true;

		} else {
			return false;
		}
	}
	gameBank.setupGame();

	document.onkeyup = fucntion(event) {
		gameBank.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		gameBank.updatePage(gameBank.letterGuessed);
	}
}









