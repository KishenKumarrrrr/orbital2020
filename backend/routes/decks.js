const router = require('express').Router();
let Deck = require('../models/deck.model');

router.route('/').get((req,res) => {
    Deck.find()
        .then(decks => res.json(decks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const uuid = req.body.id;
    const newDeck = new Deck({name: name, _id : uuid});

    newDeck.save()
        .then(() => res.json('Deck added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/del').post((req,res) => {
    const delName = req.body.name;

    Deck.deleteOne({name: delName})
        .then(() => res.json('Deck deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;