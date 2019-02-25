let db = require("../models");

let passport = require("passport");

let langTranslate = require("./LangAPI");

let unirest = require('unirest')

const parseString = require('xml2js').parseString

module.exports = function (app) {
  // User login routes.
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/translate",
      failureRedirect: "/"
    })
  );
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/"
    }),
    (req, res, next) => {
      if (!req.user) {
        res.json({ success: false });
      }
    }
  );
  // Get all Users
  app.get("/api/Users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/Users", function (req, res) {
    db.User.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // Delete a user by id
  app.delete("/api/Users/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // Translation routes.
  // Get all translations.
  app.get("/api/Translate", function (req, res) {
    db.Translate.findAll({}).then(function (dbTranslate) {
      res.json(dbUsers);
    });
  });

  // Create a new translated text.
  app.post("/api/Translate", function (req, res) {
    // These console.logs are here to show we are getting the right data from the front end that we need to push//
    let queryURL = `https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=${req.body.translateFromLanguage}&to=${req.body.translateToLanguage}&text=${req.body.translateFrom}`;
    unirest
      .get(queryURL)
      .header(
        "X-RapidAPI-Key",
        "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ"
      )
      .end(result => {
        let xmlString = result.body
        parseString(xmlString, function (err, data) {
          console.log(data)
          res.send(JSON.stringify(data))
        })
      })
  });

  // Get Speech from LangAPI//
  app.post("/api/Translate/audio", function (req, res) {
    langTranslate
      .speech(req.body.translateToLanguage, req.body.translateFrom)
      .then(function (data) {
        res.send(data);
      });
  });

  // Delete an translation by id
  app.delete("/api/Translate/:id", function (req, res) {
    db.Translate.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};
