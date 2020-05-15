const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route GET api/items
// @desc Get all items
// @Access Public 
router.get("/", (req, res) => {
    Item.find()
    .sort({ date : -1 })
    .then(items => res.json(items))
}); //already at items


//@route POST api/items
// @desc Creates A Item
// @Access Public 
router.post("/", (req, result) => {
    const newItem = new Item({
        name: req.body.name,
        color: req.body.color
    });

    newItem.save().then( item => result.json(item));
}); //already at items

//@route DELETE api/items
// @desc Deletes A Item
// @Access Public 
router.delete("/:id", (req, result) => {
    Item.findById(req.params.id)
    .then( item => item.remove().then( () => result.json({ success: true })))
    .catch(err => result.status(404).json({ success: false }));
}); //already at items

module.exports = router;
