import React, {useState} from 'react';
import { Header, StudyDeck, DeckTable } from './components';
import Button from '@material-ui/core/Button';
import styles from './DeckPage.module.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';



let initDecks = [];

async function getDecks() {
    let res = await axios.get("http://localhost:5000/decks");
    let data = res.data;
    initDecks = data;
    console.log("Successfully retrieved Decks");
}  

getDecks();


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const DeckPage = () => {

    const classes = useStyles();

    setInterval(() => updateDeck(), 10000);

    const [state, setState] = React.useState('');
    const [decks, setDecks] = React.useState(initDecks);

    const updateDeck = () => {
        getDecks();
    }

    React.useEffect(() => {
        setDecks(initDecks);
      }, [initDecks]);

    const handleChange = (event) => {
        setState(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const uuid = uuidv4();
        axios.post('http://localhost:5000/decks/add', {name: state, id : uuid, cards: []})
            .then(function (response) {
                console.log(response);
                getDecks();
            })
            .catch(function (error) {
                console.log(error);
            });
        setDecks([...decks,{_id: uuid, name: state, cards: []}]);
        setState('');
       
    }

    const delDeck = (delname) => {
        axios.post('http://localhost:5000/decks/del', {name: delname})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        const newDecks = decks.filter(deck => deck.name != delname);
        setDecks([...newDecks]);
    };
        
    return (
        <div className = {styles.main}  onFocus = {() => console.log("focused")}>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.display} >
                <div className = {styles.containCreate}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
                    <TextField onChange={handleChange} id="outlined-basic" label="Deck Name" variant="outlined" value = {state} />
                    <div>
                        <Button variant="contained" size="large" type = "submit">
                                Add Deck
                        </Button>
                    </div>
                </form>
                </div>
                <div className = {styles.containTable}>
                    <DeckTable data = {decks} del = {delDeck}/>
                </div>
            </div>
        </div>

    )
}

export default DeckPage;