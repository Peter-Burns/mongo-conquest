var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");
var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

// Routes
require("./controllers/scrape.js")(app);
require("./controllers/headline.js")(app);
require("./controllers/note.js")(app);

app.get("/", function(req,res){
    res.render("home");
});

app.get("/saved", function(req,res){
  res.render("saved");
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
