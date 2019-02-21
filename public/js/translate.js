// Translation submit function.
$("#translate").on("submit", function (event) {
  event.preventDefault();
  // get values from form and make a body().
  var body = {
    translateFrom: $("#translate-from-text").val().trim(),
    translateTo: $("#translate-to-text").val().trim(),
    translateFromLanguage: $("#translate-from-language").val(),
    translateToLanguage: $("#translate-to-language").val()
  };
  console.log(body);

  // Make the post request.
  $.ajax({
    type: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: "/api/Translate",
    data: JSON.stringify(body)
  }).then(function (data) {
    console.log(data);

  });
});

// Array of language options that is dynamically pushed to the translate.handlebars form.

//  ** Will need backend data to be put into this array. Make a ajax request of language list **
var languages = ["English", "Spanish"];

for (let i = 0; i < languages.length; i++) {
  var newOption = $("<option>");
  newOption.text(languages[i]);
  newOption.attr("value", languages[i]);

  $("#translate-from-language").append(newOption);
};

for (let i = 0; i < languages.length; i++) {
  var newOption = $("<option>");
  newOption.text(languages[i]);
  newOption.attr("value", languages[i]);

  $("#translate-to-language").append(newOption);
};