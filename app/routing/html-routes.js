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

	//If no matching route is found default to home
	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'public/home.html'));
	});

	//Use static files in the public folder for css and images.
	//app.use(express.static(__dirname + '/public'));
	

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

