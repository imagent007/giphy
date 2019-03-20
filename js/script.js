// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $.ajax({
  url: "https://slack-redir.net/link?url=https%3A%2F%2Fapi.giphy.com%2Fv1%2Fgifs%2Fsearch%3Fq%3Dpuppy%26rating%3Dpg%26api_key%3DcVRNyx7QJZX0F6nTWQ0XbssO1yb4KtSM",
method: "GET",
  success: function(response) {
    // function runs if successful
    console.log(response.data[0])
  },
});

  
  
});

