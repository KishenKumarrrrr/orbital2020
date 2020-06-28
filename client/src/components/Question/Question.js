import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './Question.module.css';
import { Fab } from '@material-ui/core';
import { Link } from "react-router-dom";


//Card Style
const useStyles = makeStyles({
    root: {
        width: 1000,
        height: 550
    }
});


export default function Question(props) {
    const classes = useStyles();

    console.log(props.cards);
    const buffer = [...props.cards];
    buffer.push({ question: "Congratulations! You're done with the deck!", answer: "", last: true });
    const [data, setData] = React.useState(buffer);

    const answerButton = () => {
        return (
            <div className={styles.button_wrap}>
                <div className={styles.button}>
                    <Button variant="contained" size="large" onClick={() => answerClicked()}>Answer</Button>
                </div>
            </div>
        )
    }

    const finalButton = () => {
        return (
            <div className={styles.button_wrap}>
                <div className={styles.button}>
                    <Link to="/decks" className={styles.link}>
                        <Button variant="contained" size="large">Done</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const feedbackButtons = () => {
        return (
            <div className={styles.button_wrap_answer}>
                <div className={styles.buttona}>
                    <Fab
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#d8432e",
                            padding: "0px 50px",
                            fontSize: "18px",
                            color: '#FFFFFF',
                        }} onClick={() => feedbackClicked()}>Again</Fab>
                </div>
                <div className={styles.buttona}>
                    <Fab
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#009755",
                            padding: "0px 50px",
                            fontSize: "18px",
                            color: '#FFFFFF',
                        }} onClick={() => feedbackClicked()}>Good</Fab>
                </div>
                <div className={styles.buttona}>
                    <Fab
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#176ced",
                            padding: "0px 50px",
                            fontSize: "18px",
                            color: '#FFFFFF',
                        }} onClick={() => feedbackClicked()}>Easy</Fab>
                </div>
            </div>
        )
    }

    const [state, setState] = useState({
        count: 0,
        isQuestion: true,
        buttonDisplay: answerButton
    })

    const answerClicked = () => {
        setState((state) => {
            return {
            count: state.count,
            isQuestion: false,
            buttonDisplay: feedbackButtons
            };
        })
    }

    const feedbackClicked = () => {
        console.log(data[state.count].last);
        setState((state) => {
            return {
            count: state.count + 1,
            isQuestion: true,
            buttonDisplay: data[state.count + 1].last ? finalButton : answerButton
        };
    })
}

return (
    <div className={styles.main}>
        <Card className={classes.root}>
            <div className={styles.test}>
                <CardContent>
                    <h1 className={styles.title}>{state.isQuestion ? data[state.count].question : data[state.count].answer}</h1>
                </CardContent>
                <CardActions>
                    {state.buttonDisplay()}
                </CardActions>
            </div>
        </Card>
    </div>

);
}