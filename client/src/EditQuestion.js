import React, {useState} from 'react';
import { Header} from './components';
import Button from '@material-ui/core/Button';
import styles from './EditQuestion.module.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { withRouter } from 'react-router-dom';



const useStyles = makeStyles({
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

    const [question, setQuestion] = React.useState(props.location.state.question);
    const [answer, setAnswer] = React.useState(props.location.state.answer);

    const handleChangeQ = (event) => {
        setQuestion(event.target.value);
    }

    const handleChangeA = (event) => {
        setAnswer(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/cards/update', {name: props.match.params.deckName, ques: question, ans: answer, id: props.location.state.id })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            props.location.update.up(question, answer, props.location.state.id);
            props.history.push('/' + props.match.params.deckName + "/cards");
    }
        
    return (
        <div className = {styles.main}>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.display} >
                <div className = {styles.containCreate}>
                <form className={classes.root} height="75%" noValidate autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
                    <div className = {styles.editStack}>
                        <div className = {styles.editItems}>
                            <TextField className={classes.forms} onChange={handleChangeQ}  id="outlined-basic" label="Question" variant="outlined" value = {question} />
                        </div>
                        <div className = {styles.editItems}>
                            <TextField className={classes.forms} onChange={handleChangeA} id="outlined-basic" label="Answer" variant="outlined" value = {answer} />
                        </div>
                        <div className = {styles.editItems}>
                            <Button variant="contained" size="large" type = "submit">
                                    Save and Go Back
                            </Button>
                        </div>
                    </div>
                </form>
                </div>
                <div className = {styles.containTable}>
                    
                </div>
            </div>
        </div>

    )
}

export default withRouter(CardPage);