








alert("You Have 10 Guesses")

const answer = 4;
const guess = prompt("whats your guess?")

for (i = 0; i < 10; i++) {
    if (answer==guess) {

        alert("you guess correctly!");
        break;

    } else { guess = prompt('please try again');
 }



}













