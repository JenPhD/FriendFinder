//DEPENDENCIES
//include the path and body-parser packages to get the correct 
//file path for html and correct format
var bodyParser = require('body-parser');
var path = require('path');


module.exports = function (app) {

	//HTML GET requests
	//Handles when users visit a page. Shows html content.
	
	app.get('/home*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'public/home.html'));
	});
	app.get('/survey*', function (req, res) {
		res.sendFile(path.join(__dirname, '..', 'public/survey.html'));
	});
	//Testing for heroku
	app.get('/', function (req, res) {
		//res.send("Hello heroku!");
		res.sendFile(path.join(__dirname, '..', 'public/home.html'));	
	});

	//If no matching route is found default to home
	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'public/home.html'));
	});
}

