import React from 'react';
import { Header, Question } from './components';
import styles from './Study.module.css';
import axios from 'axios';


let initDecks = [];

async function getCards() {
    let res = await axios.get("http://localhost:5000/decks");
    let data = res.data;
    initDecks = data;
}  

getCards();

const Study = (props) => {

    
    setInterval(() => updateDeck(), 10000);

    const updateDeck = () => {
        getCards();
    }


    const [decks, setDecks] = React.useState(initDecks.filter(deck => deck.name == props.match.params.deckName));

    return (
        <div>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.main}>
                <Question cards = {decks[0].cards}/>
            </div>
        </div>
    )
}

export default Study;