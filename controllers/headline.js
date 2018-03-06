var db = require("../models");
module.exports = function (app) {
    app.get("/headlines", function (req, res) {

        db.Headline.find({}).sort({dateAdded:-1})
            .then(function (dbHeadlines) {
                res.json(dbHeadlines);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};