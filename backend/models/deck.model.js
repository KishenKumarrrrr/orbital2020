const mongoose = require("mongoose");
const Card = require('./card.model.js');

const Schema = mongoose.Schema;


const deckSchema = new Schema({
    _id : String,
    name : { type: String, required: true},
    cards : { type: [mongoose.Schema.Card]},
}, {_id : false});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;