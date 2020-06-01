const router = require('express').Router();

let Deck = require('../models/deck.model');
let Card = require('../models/card.model');


router.route('/add').post((req,res) => {
    const deckName = req.body.name;
    const ques = req.body.ques;
    const ans = req.body.ans;
    const newCard = new Card({question: ques, answer: ans, last:false});
    
    Deck.updateOne(
        {name: deckName},
        {$push : {
                cards: newCard
            }
        }
    ).then(() => res.json('Card added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/del').post((req,res) => {
    const delName = req.body.name;

    Deck.deleteOne({name: delName})
        .then(() => res.json('Deck deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;