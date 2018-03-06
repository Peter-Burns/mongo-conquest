var axios = require("axios");
var db = require("../models");
var cheerio = require("cheerio");
module.exports = function (app) {

    app.get("/scrape", function (req, res) {
        db.Headline.find({}).then(function (currentHeadlines) {
            var current = currentHeadlines.length;
            axios.get("https://www.reddit.com/r/MMA/").then(function (response) {
                var $ = cheerio.load(response.data);

                $(".thing").each(function (i, element) {
                    var result = {};

                    result.title = $(this)
                        .children(".entry")
                        .children(".top-matter")
                        .children(".title")
                        .children(".title")
                        .text();
                    result.link = $(this)
                        .children(".entry")
                        .children(".top-matter")
                        .children(".title")
                        .children(".title")
                        .attr("href");
                    result.thumbnail = $(this)
                        .children(".thumbnail")
                        .children("img")
                        .attr("src");
                    db.Headline.create(result)
                        .then(function (dbHeadline) {
                        })
                        .catch(function (err) {
                        });
                });
            }).then(function () {
                db.Headline.find({}).then(function (newHeadlines) {
                    res.json(newHeadlines.length - current + ' added');
                });
            });
        });
    });
};