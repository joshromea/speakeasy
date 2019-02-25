// Translation submit function.
$("#translate").on("submit", function (event) {
  event.preventDefault();
  // get values from form and make a body().
  let body = {
    translateFrom: $("#translate-from-text")
      .val()
      .trim(),
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
  }).then(function (result) {
    console.log(`this is the result:${result}`)
    let newJSON = JSON.parse(result)
    console.log(newJSON)


  });
});

// Array of language options that is dynamically pushed to the translate.handlebars form.

//  ** Will need backend data to be put into this array. Make a ajax request of language list **
let languages = [
  "ar",
  "ar-eg",
  "ar-sa",
  "bg",
  "bg-bg",
  "ca",
  "ca-es",
  "cs",
  "cs-cz",
  "da",
  "da-dk",
  "de",
  "de-de",
  "de-at",
  "de-ch",
  "el",
  "el-gr",
  "en",
  "en-au",
  "en-ca",
  "en-gb",
  "en-in",
  "en-us",
  "es",
  "es-es",
  "es-mx",
  "fi",
  "fi-fi",
  "fr",
  "fr-ca",
  "fr-fr",
  "he",
  "he-il",
  "hi",
  "hi-in",
  "hr",
  "hr-hr",
  "hu",
  "hu-hu",
  "id",
  "id-id",
  "it",
  "it-it",
  "ja",
  "ja-jp",
  "ko",
  "ko-kr",
  "ms",
  "ms-my",
  "nb-no",
  "nl",
  "nl-nl",
  "no",
  "pl",
  "pl-pl",
  "pt",
  "pt-br",
  "pt-pt",
  "ro",
  "ro-ro",
  "ru",
  "ru-ru",
  "sk",
  "sk-sk",
  "sl",
  "sl-si",
  "sv",
  "sv-se",
  "ta",
  "ta-in",
  "th",
  "th-th",
  "vi",
  "vi-vn",
  "yue",
  "zh-chs",
  "zh-cht",
  "zh-cn",
  "zh-hk",
  "zh-tw"
];

for (let i = 0; i < languages.length; i++) {
  var newOption = $("<option>");
  newOption.text(languages[i]);
  newOption.attr("value", languages[i]);

  $("#translate-from-language").append(newOption);
}

for (let i = 0; i < languages.length; i++) {
  var newOption = $("<option>");
  newOption.text(languages[i]);
  newOption.attr("value", languages[i]);

  $("#translate-to-language").append(newOption);
}
