import React, {useState} from 'react';
import { Header, StudyDeck, CardTable } from './components';
import Button from '@material-ui/core/Button';
import styles from './CardPage.module.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';



let initDecks = [];

async function getCards() {
    let res = await axios.get("http://localhost:5000/decks");
    let data = res.data;
    initDecks = data;
    console.log("Going to filter Deck");
}  

getCards();


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const CardPage = (props) => {

    

    const classes = useStyles();

    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [decks, setDecks] = React.useState(initDecks.filter(decks => decks.name == props.match.params.deckName));

    const handleChangeQ = (event) => {
        setQuestion(event.target.value);
    }

    const handleChangeA = (event) => {
        setAnswer(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/cards/add', {name: props.match.params.deckName, ques: question, ans: answer})
            .then(function (response) {
                console.log(response);
                getCards();
            })
            .catch(function (error) {
                console.log(error);
            });
        setDecks([{name: decks.name, 
                    cards: [...decks.cards, {q: question, a: answer, last: false}]
                }]);
        setQuestion('');  
        setAnswer('');  
    }

    const delDeck = (delname) => {
        // axios.post('http://localhost:5000/decks/del', {name: delname})
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // const newDecks = decks.filter(deck => deck.name != delname);
        // setDecks([...newDecks]);
    };
        
    return (
        <div className = {styles.main}>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.display} >
                <div className = {styles.containCreate}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
                    <TextField onChange={handleChangeQ} id="outlined-basic" label="Question" variant="outlined" value = {question} />
                    <TextField onChange={handleChangeA} id="outlined-basic" label="Answer" variant="outlined" value = {answer} />
                    <div>
                        <Button variant="contained" size="large" type = "submit">
                                Add Card
                        </Button>
                    </div>
                </form>
                </div>
                <div className = {styles.containTable}>
                    <CardTable data = {decks} del = {delDeck}/>
                </div>
            </div>
        </div>

    )
}

export default CardPage;