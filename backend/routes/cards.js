const router = require('express').Router();
var ObjectId = require('mongodb').ObjectID;

let Deck = require('../models/deck.model');
let Card = require('../models/card.model');


router.route('/add').post((req,res) => {
    const deckName = req.body.name;
    const ques = req.body.ques;
    const ans = req.body.ans;
    const uuid = req.body.id;
    const newCard = new Card({_id: uuid, question: ques, answer: ans, last:false});
    
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
    const delQues = req.body.question;
    const deckName =  req.body.name

    Deck.updateOne(
        {name: deckName},
        {$pull : {
                cards: {"question" : delQues}
            }
        }
    ).then(() => res.json('Card deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req,res) => {
    const updateQues = req.body.ques;
    const updateAns = req.body.ans;
    const cardID = req.body.id;
    const deckName =  req.body.name;
    const qpath =  "cards.$[card].question";
    const apath = "cards.$[card].answer";

    Deck.updateOne(
        { name : deckName},
        {$set : { [qpath] : updateQues, [apath] : updateAns}},
        {arrayFilters: [{"card._id": ObjectId(cardID)}]}
    ).then(() => res.json('Card updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;