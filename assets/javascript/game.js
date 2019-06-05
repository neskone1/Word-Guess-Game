//VARIABLES
const words = ['pug', 'shitzu', 'bulldog', 'germansheperd', 'bullterrier','poodle']

//Empty variables to store values later
let randomWord = "";
let lettersOfWord = []
let blanks = 0;
let blanksAndCorrect = [];
let wrongGuess = [];

//Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;



// ALL FUNCTIONS
/////////////////////////


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}



const pug = document.getElementById('pug');
const shitzu = document.getElementById('shitzu');
const bulldog = document.getElementById('bulldog');
const germansheperd = document.getElementById('germansheperd');
const bullterrier = document.getElementById('bullterrier');


//pug / Image
//---------------------------
if (randomWord === words[0]) {


    document.getElementById("image").src = "./assets/images/pug.jpg";
    console.log(Image);
}
// shitzu /Image
//---------------------------
else if (randomWord === words[1]) {

    document.getElementById("image").src = "./assets/images/Shitzu.jpg";
    console.log(Image);
}
//bulldog / Image
//---------------------------
else if (randomWord === words[2]) {

    document.getElementById("image").src = "./assets/images/bulldog.jpg";
    console.log(Image);


}

//german sheperd
//------------------------
else if (randomWord === words[3]) {

    document.getElementById("image").src = "./assets/images/germansheperd.jpg";
    console.log(Image);
}
//bull terrier
//------------------------
else if (eandomword === word[4]) {

    document.getElementById("image").src = "./assets/images/germansheperd.jpg";
    console.log(Image);
}

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    let letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert,  display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        alert('You Win!');

        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        alert('Try Again');
        reset()

        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
} 
