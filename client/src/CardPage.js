import React, {useState} from 'react';
import { Header, StudyDeck, CardTable } from './components';
import Button from '@material-ui/core/Button';
import styles from './CardPage.module.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';



let initDecks = [];

async function getCards() {
    let res = await axios.get("http://localhost:5000/decks");
    let data = res.data;
    initDecks = data;
}  

getCards();


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }));


  const useStyles2 = makeStyles({
    root: {
      width: '100%',
      height: "100%",
    },
    container: {
      maxHeight: 440,
    },
    forms: {
        minWidth: "500px",
        minHeight: "30px"
    }
  });
  

const CardPage = (props) => {

    const classes = useStyles();
    const classes2 = useStyles2();

    const [decks, setDecks] = React.useState(initDecks.filter(deck => deck.name == props.match.params.deckName));

    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [question2, setQuestion2] = React.useState('');
    const [answer2, setAnswer2] = React.useState('');
    const [cardID, setCardID] = React.useState('');
    const [display, setDisplay] = React.useState(true);


    const toEdit = (question, answer, id) => {
        setAnswer2(answer);
        setQuestion2(question);
        setCardID(id);
        setDisplay(false);
    }

    const toTable = () => {
        updateCards(question2, answer2, cardID);
        setAnswer2('');
        setQuestion2('');
        setCardID('');
        setDisplay(true);
    }



    const updateCards = (question, answer, id) => {
        const targetCard = decks[0].cards.filter(card => card._id != id);
        targetCard.push({question: question, answer: answer, _id : id}); 
        const newDeck = decks;
        newDeck[0].cards = [...targetCard];
        setDecks(newDeck);
    }

    const handleChangeQ = (event) => {
        setQuestion(event.target.value);
    }

    const handleChangeA = (event) => {
        setAnswer(event.target.value);
    }

    const handleChangeQ2 = (event) => {
        setQuestion2(event.target.value);
    }

    const handleChangeA2 = (event) => {
        setAnswer2(event.target.value);
    }
    
    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/cards/update', {name: props.match.params.deckName, ques: question2, ans: answer2, id: cardID })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            props.location.update.up(question2, answer2, props.location.state.id);
        toTable();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const uuid = uuidv4();
        axios.post('http://localhost:5000/cards/add', {id : uuid, name: props.match.params.deckName, ques: question, ans: answer})
            .then(function (response) {
                console.log(response);
                getCards();
            })
            .catch(function (error) {
                console.log(error);
            });
        const updateDeck = decks.length !== 0 ? decks[0] : {cards : []};
        updateDeck.cards = [...updateDeck.cards, {_id : uuid, question: question, answer: answer, last: false}];
        setDecks([updateDeck]);
        setQuestion('');  
        setAnswer('');  
    }

    const delDeck = (delname) => {
        axios.post('http://localhost:5000/decks/del', {name: props.match.params.deckName, question: delname})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        const newDecks = decks.filter(deck => deck.name != delname);
        const updateDeck = decks[0];
        updateDeck.cards = decks[0].cards.filter(card => card.question != delname);
        setDecks([updateDeck]);
    };


    const table = (<div className = {styles.display} >
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
                            <CardTable data = {decks} del = {delDeck} transition = {toEdit}/>
                        </div>
                    </div>)

    const editQn = (<div className={styles.containCreate2}>
                        <form className={classes2.root} height="75%" noValidate autoComplete="off" onSubmit={(event) => handleSubmitUpdate(event)}>
                            <div className={styles.editStack}>
                                <div className={styles.editItems}>
                                    <TextField className={classes2.forms} onChange={handleChangeQ2} id="outlined-basic" label="Question" variant="outlined" value={question2} />
                                </div>
                                <div className={styles.editItems}>
                                    <TextField className={classes2.forms} onChange={handleChangeA2} id="outlined-basic" label="Answer" variant="outlined" value={answer2} />
                                </div>
                                <div className={styles.editItems}>
                                    <Button variant="contained" size="large" type="submit">
                                        Save and Go Back
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>);
        
    return (
        <div className = {styles.main}>
            <Header />
            <div className = {styles.buffer}>
            </div>
            {display ? table : editQn}
        </div>

    )
}

export default CardPage;