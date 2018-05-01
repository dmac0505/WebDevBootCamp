
//alert("connected");
// print all numbers between -10 and 19

// console.log("printing all numbers between -10 and 19");

// var num = -10;

// while (num <=19) {
// 	console.log(num);
// 	num++;
// }

console.log("printing all numbers between -10 and 19");

for (num = -10;num <= 19;num++){
console.log(num);
}

// print all even numbers between 10 and 40

// console.log("printing all even numbers between 10 and 40");

// var num = 10;

// while (num <= 40) {
// 	console.log(num);
// 	num +=2;
// }


console.log("printing all even numbers between 10 and 40");

for (i = 10; i < 41; i+=1){
	if (i % 2 === 0)
	console.log(i);
}

// print all odd numbers between 300 and 333"

// console.log("printing all odd numbers between 300 and 333");

// var num = 300;

// while (num <=333) {
// 	if (num % 2 === 1)
// 	console.log(num);
// 	num++;
// }


console.log("printing all odd numbers between 300 and 333");

for (i = 300; i <334; i+=1){
	if (i % 2 === 1){
		console.log(i);
	}
}

//print all numbers divisible by 5 and 3 between 5 and 50*/

// console.log("printing all numbers divisible by 5 and 3 between 5 and 50*");

// var num = 5;

// while (num <= 50) {
// 	if (num % 5 === 0 && num % 3 === 0)
// 	console.log(num);
// 	num++;
// }

console.log("printing all numbers divisible by 5 and 3 between 5 and 50*");

for (i = 5; i <=50; i++){
	if (i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}