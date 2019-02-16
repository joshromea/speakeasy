const unirest = require('unirest')
const transform = require('ee-xml-to-json')

const xmlTransform = () => {

}

function apiJSON() {
    unirest.get("https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=Hello%2C+world!")
        .header("X-RapidAPI-Key", "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ")
        .end((result) => {
            let xmlString = result.body
        })
}