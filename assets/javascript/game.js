// This function will reset everything after the the word is guessed correctly
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
    chances.textContent = chancesLeft;
    wrong.textContent = wrongGuess.join(" ");
    keyPress.textContent = empty.join(" ");

}

// Was going to create a function here, but got hung up
// function startUp () {




// }


// Taking out Godzilla for now because I can't figure out how to make letterTally not count the L's together
// Creating array storing all Word Guess answers.
var kaiju = ["gorosaurus", "gigan", "hedorah", "ghidorah", "destroyah", "mothra", "rodan", "anguirius", "kumonga", "kingkong"];

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Choosing a random word from the Kaiju array    
var randomWord = Math.floor(Math.random() * kaiju.length);
var wordGuess = kaiju[randomWord];
var wins = 0;
var losses = 0;
var chancesLeft = 10;
var empty = [];
var wrongGuess = [];
var letterTally = 0;

// console.log(wordGuess);



// Created a for loop and an empty array to add _ _ _ to it for the empty letters 

for (var i = 0; i < wordGuess.length; i++) {
    empty.push("_");

}
// console.log(empty);


var startGame = document.getElementById("startGuess");
var keyPress = document.getElementById("wordDisplay");
var wrong = document.getElementById("wrongLetters");
var chances = document.getElementById("chances");
var victory = document.getElementById("winDisplay");
var youLose = document.getElementById("lossDisplay");

keyPress.textContent = empty.join(" ");



// Start of game, when key is clicked.
document.onkeyup = function (event) {

    //Makes it so if you type anything that isn't in alphabet array it leaves function
       var key = event.key
    if (!alphabet.includes(key)) {
        return;
    }

    //Hiding start text when key is clicked
    startGame.textContent = "";

    // console.log(event.key)

    //I need to use this to somehow only let Users select letters
    // if (alphabet.indexOf(event.key) > -1) {};
        
    //If key is pressed and isn't in wordGuess it goes to wrong letters and chances left goes down by 1
    if (wordGuess.includes(event.key) == false) {
        if(wrongGuess.includes(event.key) == false) {
            wrongGuess.push(event.key);
            wrong.textContent = wrongGuess.join(" ");
            chancesLeft--;
            chances.textContent = chancesLeft;

            if (chancesLeft === 0){
                losses++;
                resetGame();
                youLose.textContent = losses;
                
            }

        }
    //if correct letter is guessed it replaces underscore   
    } else {
        for (var j = 0; j < wordGuess.length; j++) {
            if (wordGuess[j] === event.key) {
                empty[j] = event.key;
                keyPress.textContent = empty.join(" ");
                letterTally++;
            }
            //if word is completed it adds one to Wins and resets game with new random word while retaining win
        } if (wordGuess.length === letterTally) {
            wins++;
            resetGame();
        } victory.textContent = wins;
    

     // I need to finish game with make making game over and losses tally when chances get down to 0;
     //I also need to make sure after key is in wrong guess to make sure it is not registered again.
     // I will also add image and sounds


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