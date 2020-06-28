const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    _id : String,
    question : { type: String, required: true},
    answer: { type: String, required: true},
    last: { type: Boolean, required: true},
}, {_id : false});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;