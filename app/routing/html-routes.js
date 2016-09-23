//DEPENDENCIES
//include the path and body-parser packages to get the correct 
//file path for html and correct format
var bodyParser = require('body-parser');
var path = require('path');


module.exports = function (app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	
	//HTML GET requests
	//Handles when users visit a page. Shows html content.
	//If no matching route is found default to home
	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'public/home.html'));
	});
	app.get('/home*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'public/home.html'));
	});
	app.get('/survey*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', '/survey.html'));
	});

}

