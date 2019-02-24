const unirest = require("unirest");
const transform = require("ee-xml-to-json");

// Function to change XML String into JSON data//
// This shows the expected json data we are trying to push back to the front end. It can be see in your terminal when ran//
function xmlTransform(data) {
    transform(data).then(function (result) {
        console.log(result)
        return result
    });
}

// API pull from Microsoft Lang Translator//
function langTranslateJSON(startLang, endLang, textString) {
    let queryURL = `https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=${startLang}&to=${endLang}&text=${textString}`;
    unirest
        .get(queryURL)
        .header(
            "X-RapidAPI-Key",
            "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ"
        )
        .end(result => {
            // The problem is right here if I had to guess. I'm not sure if i'm returning the result properly//
            let xmlString = result.body;
            xmlTransform(xmlString);
            return
        });
}

// console.log(langTranslateJSON('en', 'es', 'hello+world'))


//API pull for Microsoft Lang translate//
function speech(textString, langAudio) {
    let queryURL = `https://microsoft-azure-translation-v1.p.rapidapi.com/Speak?text=${textString}&language=${langAudio}`;
    unirest
        .get(queryURL)
        .header(
            "X-RapidAPI-Key",
            "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ"
        )
        .end(result => {
            return result
        });
}

module.exports = { xmlTransform, langTranslateJSON, speech }
