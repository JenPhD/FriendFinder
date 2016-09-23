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
	

		// $('#submit').on('click', function () {
		// 		var newFriend = {
		// 			name: $('#name').val().trim(),
		// 			phone: $('#photo').val().trim(),
		// 			email: $('#email').val().trim(),
		// 			scores: [
		// 			$('#q1').val(),
		// 			$('#q2').val(),
		// 			$('#q3').val(),
		// 			$('#q4').val(),
		// 			$('#q5').val(),
		// 			$('#q6').val(),
		// 			$('#q7').val(),
		// 			$('#q8').val(),
		// 			$('#q9').val(),
		// 			$('#q10').val()
		// 			]
					
		// 		};
		// 		$.post('http://localhost:3000/data/new', newFriend)
		// 			.done(function (data) {
		// 				console.log(data);
		// 				alert('Adding friend...');
		// 			});
		// 		return false;
		// });
	});
}

