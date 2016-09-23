// Your api-routes.js file should contain two routes: 
// This route will also be used to handle the compatibility logic.
//Loading DATA
// Dependencies 
// =============================================================
var friends = require('../data/friends');

// =============================================================
//ROUTING

module.exports = function(app) {
		//API GET request
		//The code bellow will handel when user visits the page.
		//In each of the below cases when the user visits the link
		app.get('../data/friends', function(req, res) {
			res.json(friends);
		});

		//Creats a New Friend if true
		// app.post('/api/friends', function(req, res) {
		// 	if(){

		// 	}
		// })




}