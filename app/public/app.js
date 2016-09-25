 // Chosen CSS to allow users to deselect choice to choose another and make sure user enters a value for each.
  var config = {
    '.chosen-select'           : {},
    '.chosen-select-deselect'  : {allow_single_deselect:true},
    '.chosen-select-no-single' : {disable_search_threshold:10},
    '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
    '.chosen-select-width'     : {width:"95%"}
  }

  for (var selector in config) {
    $(selector).chosen(config[selector]);
  }

//Require data from friends array to add survey results
 
  //Get and store survey results 
    $("#submit").on("click", function(){

      // Validate survey information is complete
      function validateForm() {
      var isComplete = true;
      $('.form-control').each(function() {
        if ( $(this).val() === '' )
            isComplete = false;
      });

      $('.chosen-select').each(function() {

        if( $(this).val() === "")
          isComplete = false
      })
      return isComplete;
    }

    // If all required fields are completed
    if (validateForm() == true) {
      // Create an object for friends array
        var friends = {
          name: $("#name").val().trim(),
          photo: $("#photo").val().trim(),
          email: $("#email").val().trim(),
          scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        }

        console.log(friends);

        // Get the URL of the website
        var currentURL = window.location.origin;
 
        // AJAX post the data to the friendsArray. 
        $.post(currentURL + "/api/friends", friends, function(data){

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#matchName").text(data.name);
          $("#matchImg").attr("src", data.photo);

          // Show the modal with the best match 
          $("#resultsModal").modal('toggle');

        });
    } else
    {
      alert("Please complete all survey questions before submitting!");
    }
      
      return false;
    });

    //On modal close, clear data for new user
     $(".close").on("click", function(){
        $('#name').val(" ");
        $('#photo').val(" ");
        $('#email').val(" ");

        //Reset the chosen options back to empty
        $(".chosen-select").val('').trigger("chosen:updated");
     });