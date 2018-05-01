//create secretNumber

var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number between 1 and 10"));

//check guess
if (guess === secretNumber) {
	alert("you got it right!");
}

//otherwise, check if higher
else if (guess > secretNumber) {
	alert("Too high, guess again");
}

//otherwise check if lower
else {
	alert("Too low, guess again.");
}