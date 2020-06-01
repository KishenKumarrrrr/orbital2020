const mongoose = require("mongoose");
const Card = require('./card.model.js');

const Schema = mongoose.Schema;


const deckSchema = new Schema({
    name : { type: String, required: true},
    cards : { type: [mongoose.Schema.Card]},
})

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;