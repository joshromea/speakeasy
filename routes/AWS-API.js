let AWS = require("aws-sdk");
let uuid = require("uuid");
let util = require("util");
let comprehend = new AWS.Comprehend({ region: "us-west-2" });
let searchStr;
let LC;

let params = {
    LanguageCode: startLang,
    Text: textString
    // LanguageCode: "en", /*LC*/
    // Text: "Today Josh, Felicia, Georgie, and I are working on our group project at the University of Arizona coding bootcamp.  We are also watching Star Wars" /* searchStr */
};

const detectEntitiesPromise = params => {
    return new Promise((resolve, reject) => {
        comprehend.detectEntities(params, (err, entData) => {
            if (err) {
                reject(err);
            }
            resolve(entData);
        });
    });
};

detectEntitiesPromise(params).then(entData => {
    console.log(entData);
});

module.exports = detectEntitiesPromise;
