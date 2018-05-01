var movies = [
{
title: "Sleepless in Seattle",
rating: 4,
hasWatched: true
},
{
	title: "Rocky",
	rating: 5,
	hasWatched: true
},
{
	title: "Dunkirk",
	rating: 3,
	hasWatched: false
}
]

function moviesdb(){
	for (i = 0; i < movies.length; i++)
		if (movies[i].hasWatched)
		console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
}

moviesdb(movies)