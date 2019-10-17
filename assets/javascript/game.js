
// Creating array storing all Word Guess answers.
var kaiju = ["godzilla", "gigan", "hedorah", "ghidorah", "destroyah", "mothra", "rodan", "mechagodzilla", "kumonga", "kingkong"];
//Choosing a random word from the Kaiju array    //Not seeing how this is working right with the loop right now
var randomWord = Math.floor(Math.random() * kaiju.length);
var wordGuess = kaiju[randomWord];
var wins = 0;
var chancesLeft = 10;
// var display = [];
var empty = [];

console.log(wordGuess);



// Created a for loop and an empty array to add _ _ _ to it for the empty letters / not sure which loop makes sense
// Do I have ot put this in a function?????????????????

for (var i = 0; i < wordGuess.length; i++) {
    empty.push("_");

}
// console.log(empty);



var key = document.getElementById("wordDisplay")

key.textContent = empty.join(" ");

document.onkeyup = function (event) {

  

   console.log(event.key)

   for (var j = 0; j < wordGuess.length; j++) {
       if (wordGuess[j] === event.key) {
           empty[j] = event.key;
           key.textContent = empty.join(" ");

       }
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