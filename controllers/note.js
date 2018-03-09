var db = require("../models");
module.exports = function (app) {
    app.get("/headlineNotes/:id", function (req, res) {
        db.Headline.findOne({ _id: req.params.id }).populate('notes').then(function (headline) {
            res.json(headline);
        });
    });

    app.post("/note/:id", function (req, res) {
        db.Note.create(req.body)
            .then(function (dbNote) {
                db.Headline.findOneAndUpdate({ _id: req.params.id }, { $push: { notes: dbNote._id } }, { new: true }).then(function () {
                    res.json(dbNote);
                });
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete("/note/:id", function (req, res) {
        db.Note.remove({ _id: req.params.id }).then(function () {
            db.Headline.findOneAndUpdate({ _id: req.body.headlineId }, { $pull: { notes: { _id: req.params.id } } }).then(function () {
                res.json('Deleted');
            }).catch(function (error) {
                res.json(error);
            });
        });
    });
};