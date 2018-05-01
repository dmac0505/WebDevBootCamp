

// var nums = [1,2,3,4];
// //console.log(nums);



// function printReverse(){
	
// //var i = nums.length;
// 	// nums.forEach(function(num, i){
// 	// console.log(num);
// 	// i-=1;
// 	// });
// var i = 1;

// for (i === nums.length - 1; i === 1; i--)
// 	console.log(nums[i]);

// }


// printReverse();

function printReverse(arr){

	for (var i = arr.length - 1; i >= 0; i-- ){
		console.log(arr[i]);
	}
};


printReverse([3,6,2,5]);


console.log("**********");
console.log("starting next exercise");
console.log("**********");


//returns wil be in console log so will need to call function from console log
// is uniform example

function isUniform(arr){
	var first = arr[0];
	 for (var i = 0; i < arr.length; i++){
		if (arr[i] !== first){
	 		return false;
	 	}
	 
	 }
	 return true;
}

// sum of array example

function sumArray(arr){
	var total = 0;
	arr.forEach (function(element){
		total += element;
	});
	return total;
}


//find max of array

function max(arr){
var max = arr[0];
for (var i = 0; i < arr.length; i++){
	
	if (arr[i] > max){
		max = arr[i];
	}
	
   }
   return max;
}