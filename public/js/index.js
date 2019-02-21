// Log-in submit buttion
$("#user-form").on("submit", function (event) {
  event.preventDefault();
  // get values from form and make a body().
  var body = {
    userName: $("#user-name").val().trim(),
    password: $("#password").val().trim(),
  };

  // Make the post request.
  $.ajax({
    type: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: "/api/Users",
    data: JSON.stringify(body)
  }).then(function (data) {

    // Once server replies, redirect to /translate.
    window.location = "/translate"
  });

});

