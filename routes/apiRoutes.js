var db = require("../models");
var passport = require('passport');
module.exports = function (app) {
  // User login routes.
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/translate',
    failureRedirect: '/'
  }
  ))
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/fail'
  }
  ));
  // Get all Users
  app.get("/api/Users", function (req, res) {
    db.User.findAll({}).then(function (data) {
      res.json(data);
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
    db.Translate.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Create a new translated text.
  app.post("/api/Translate", function (req, res) {
    db.Translate.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // Delete an translation by id
  app.delete("/api/Translate/:id", function (req, res) {
    db.Translate.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};


