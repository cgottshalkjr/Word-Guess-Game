function resetGame() {
    randomWord = Math.floor(Math.random() * kaiju.length);
    wordGuess = kaiju[randomWord];
    chancesLeft = 10;
    empty = [];
    for (var i = 0; i < wordGuess.length; i++) {
        empty.push("_");
    }
    wrongGuess = [];
    letterTally = 0;
}


// Taking out Godzilla for now because I can't figure out how to make letterTally not count the L's together
// Creating array storing all Word Guess answers.
var kaiju = ["gorosaurus", "gigan", "hedorah", "ghidorah", "destroyah", "mothra", "rodan", "anguirius", "kumonga", "kingkong"];

//Choosing a random word from the Kaiju array    
var randomWord = Math.floor(Math.random() * kaiju.length);
var wordGuess = kaiju[randomWord];
var wins = 0;
var chancesLeft = 10;
var empty = [];
var wrongGuess = [];
var letterTally = 0;

console.log(wordGuess);



// Created a for loop and an empty array to add _ _ _ to it for the empty letters 

for (var i = 0; i < wordGuess.length; i++) {
    empty.push("_");

}
// console.log(empty);


var startGame = document.getElementById("startGuess")
var keyPress = document.getElementById("wordDisplay");
var wrong = document.getElementById("wrongLetters");
var chances = document.getElementById("chances");
var victory = document.getElementById("winWin")

keyPress.textContent = empty.join(" ");




document.onkeyup = function (event) {

    startGame.textContent = "";

    // console.log(event.key)

    if (wordGuess.includes(event.key) == false) {
        wrongGuess.push(event.key);
        wrong.textContent = wrongGuess.join(" ");
        chancesLeft--;
        chances.textContent = chancesLeft;
    } else {
        for (var j = 0; j < wordGuess.length; j++) {
            if (wordGuess[j] === event.key) {
                empty[j] = event.key;
                keyPress.textContent = empty.join(" ");
                letterTally++;
            }
        } if (wordGuess.length === letterTally) {
            wins++;
        } victory.textContent = wins;
    }




















}



/* Psuedo Code
    -Computer chooses a random word from an array
    -Computer displays word with underscores in place of letters
    -User guesses a letter
    -Wrong guess and it goes into space alloted for wrong letters
    -Right guess and it replaces an underscore with correct letter
    -User gets 10 trys
    -If user guesses whole word right add one to Wins variable
    -If user uses all 10 trys, game over
    -Start with another random word
*/