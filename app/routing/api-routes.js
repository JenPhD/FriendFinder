// Your api-routes.js file should contain two routes: 
// This route will also be used to handle the compatibility logic.
//Loading DATA
// Dependencies 
// =============================================================
var friendsArray = require('../data/friends.js');

// =============================================================
//ROUTING

module.exports = function(app) {
	//API GET request for the data from the surveys already taken
	app.get('/api/friends', function(req, res){
		res.json(friendsData);

		//fix for CORS problem
		app.use(function(req, res, next) {
		  res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  next();
		});
	});

	// API POST Requests
	app.post('../data/friends',function(req,res){

		var newFriend = req.body;
		console.log(newFriend);
		
		friendsArray.push(newFriend);

			
		var differenceScore = 0;

			
		var differencesArray = [];
			

		for (var i = 0; i < (friendsArray.length - 1); i++){
				
				
			for (var j = 0; j < friendsArray[i].scores.length; j++){
					differenceScore += Math.abs(friendsArray[i].scores[j] - newFriend.scores[j]);
				}

				differencesArray.push(differenceScore);
				differenceScore = 0;
		}
			
			var friendMatch = friendsArray[differencesArray.indexOf(Math.min.apply(null, differencesArray))];

			res.send(friendMatch);

	});
}


// Create New Characters - takes in JSON input
// app.post('../data/new', function (req, res) {
// 	var newFriend = req.body;

// 	console.log(newFriend);

// 	friends.push(newFriend);

// 	res.json(friends);
// });

// }