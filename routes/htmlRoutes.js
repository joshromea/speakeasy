var db = require("../models");
var express = require("express");
var router = express.Router();


module.exports = function (app) {
  // Load index page, which is the log-in page.
  app.get("/", function (req, res) {

    res.render("index");
  });
  // Loads the translating home page when the user logs in.
  app.get("/translate", function (req, res) {

    res.render("translate");
  });
  // Displays the translation search history page of the user.
  app.get("/history", function (req, res) {

    res.render("history");
  });
  // Prompts an error page if the above routes are not used.
   app.get("*", function (req, res) {
    res.render("404");
  });
};
  // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
