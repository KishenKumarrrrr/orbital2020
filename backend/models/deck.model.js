const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    question : { type: String, required: true},
    answer: { type: String, required: true},
    last: { type: Boolean, required: true},
})


const deckSchema = new Schema({
    name : { type: String, required: true},
    cards : { type: [cardSchema]},
})

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;