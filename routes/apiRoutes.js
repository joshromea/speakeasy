var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   unirest.get("https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=Hello%2C+world!")
  //   .header("X-RapidAPI-Key", "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ")
  //   .end(function (result) {
  //     console.log(result);
  //     let xml = result;
  //     let newJSON = parseXml(xml)
  //     console.log(newJSON)
  //     res.json(newJSON);
  //   }

