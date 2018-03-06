var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },

  link: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  dateAdded:{
    type:Date,
    default:Date.now
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;
