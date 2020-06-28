const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");

require('dotenv').config();

const app = express();
const port = (process.env.PORT || 5000);

app.use(cors());
app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const deckRouter = require('./routes/decks');
const cardRouter = require('./routes/cards');

app.use('/decks', deckRouter);
app.use('/cards', cardRouter);

app.use(express.static('client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}!`);
});