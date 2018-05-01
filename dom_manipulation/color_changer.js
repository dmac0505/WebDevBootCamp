// var button = document.querySelector("button");
// var isPurple = false;
// //var body = document.querySelector("body");

// button.addEventListener("click", function() {
// 	if(isPurple){
// 		document.body.style.background = "white";
		
// 	}else{
// 		document.body.style.background = "purple";
		
// 	}
// 	isPurple = !isPurple;
// });


var button = document.querySelector("button");
//var isPurple = false;
//var body = document.querySelector("body");

button.addEventListener("click", function() {
		document.body.classList.toggle("purple");
});