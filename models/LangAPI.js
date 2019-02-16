const unirest = require('unirest')
const transform = require('ee-xml-to-json')

<<<<<<< HEAD
const xmlTransform = () => {

}

function apiJSON() {
    unirest.get("https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=Hello%2C+world!")
        .header("X-RapidAPI-Key", "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ")
        .end((result) => {
            let xmlString = result.body
        })
}
=======
// req.params change if needed//
let startLang
let transLang
let inputText

const APIKey = process.env.API_KEY;

// Function to change XML String into JSON data//
function xmlTransform(data) {
    transform(data).then(function (result) {
        console.log(result);
    });
}


// API pull from Microsoft Lang Translator//
function langTranslateJSON() {
    let queryURL = `https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=${startLang}&to=${transLang}&text=${inputText}`
    unirest.get(queryURL)
        .header("X-RapidAPI-Key", APIKey)
        .end((result) => {
            let xmlString = result.body
            xmlTransform(xmlString)
        })
}

module.exports = xmlTransform, langTranslateJSON;
>>>>>>> language translate added
