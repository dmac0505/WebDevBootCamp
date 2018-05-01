var age = Number(prompt("What is your age?"));


if (age <= 0) {
	console.log("Get back in the womb, you're too young.");
}

else if (age == 21) {
	console.log("Happy Birthday - take a drink.");
}

else if (age % 2 == 1) {
	console.log("Your age is an odd number");
}

else {
	console.log("You gotta be an oddball eh?");
}
