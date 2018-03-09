var db = require("../models");
module.exports = function (app) {
    app.get("/headlines", function (req, res) {
        db.Headline.find({}).sort({ dateAdded: -1 })
            .then(function (dbHeadlines) {
                res.json(dbHeadlines);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get("/savedHeadlines", function (req, res) {
        db.Headline.find({ saved: true })
            .then(function (dbHeadlines) {
                res.json(dbHeadlines);
            })
            .catch(function (error) {
                res.json(err);
            });
    });

    app.post("/saveHeadline", function(req,res){
        db.Headline.findByIdAndUpdate({_id:req.body._id}, {$set:{saved:true}},{
            returnNewDocument: true
        })
        .then(function(result){
            res.json(result);
        }).catch(function(error){
            res.json(error);
        });
    });

    app.delete("/deleteSaved", function(req,res){
        db.Headline.findByIdAndUpdate({_id:req.body._id}, {$set:{saved:false}},{
            returnNewDocument: true
        })
        .then(function(result){
            res.json(result);
        }).catch(function(error){
            res.json(error);
        });
    });
};