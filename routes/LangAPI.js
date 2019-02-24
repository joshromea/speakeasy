const unirest = require("unirest");
const transform = require("ee-xml-to-json");

// Function to change XML String into JSON data//
function xmlTransform(data) {
    transform(data).then(function (result) {
        console.log(result);
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
            let xmlString = result.body;
            xmlTransform(xmlString);
            return xmlTransform;
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

module.exports = xmlTransform, langTranslateJSON, speech;
