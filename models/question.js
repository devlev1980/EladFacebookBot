const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
    user_id: {type: String},
    question: [{type: String}]
    // plot: {type: String},
    // date: {type: String},
    // runtime: {type: String},
    // director: {type: String},
    // cast: {type: String},
    // rating: {type: String},
    // poster_url: {type: String}
});

module.exports = mongoose.model("Question", QuestionsSchema);