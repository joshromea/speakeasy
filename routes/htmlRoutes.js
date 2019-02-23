var db = require("../models");
var express = require("express");
var router = express.Router();
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())

    return next();

  res.redirect('/');

}

module.exports = function (app) {
  // Load index page, which is the log-in page.
  app.get("/", function (req, res) {

    res.render("index");
  });
  // Load index page, which is the log-in page.
  app.get("/register", function (req, res) {

    res.render("register");
  });
  // Loads the translating home page when the user logs in.
  app.get("/translate", isLoggedIn, function (req, res) {

    res.render("translate");
  });
  // Displays the translation search history page of the user.
  app.get("/history", isLoggedIn, function (req, res) {
    //Get data from table
    // (code goes here)
    db.Translate.findAll({/*Where user is current user*/ })
      .then((data) => {
        res.render("history", {
          // history: data
        });
      })
  });
  // Logs the user out of their session.
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}