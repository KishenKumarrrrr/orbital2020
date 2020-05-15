import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './Question.module.css';
import {Fab} from '@material-ui/core';




const useStyles = makeStyles({
    root: {
        width: 1000,
        height: 550
    }
});

const question = () => {
    return (
        <div className={styles.test}>
            <CardContent>
                <h1 className={styles.title}>Something Something</h1>
            </CardContent>
            <CardActions>
                <div className={styles.button_wrap}>
                    <div className={styles.button}>
                        <Button variant="contained" size="large">Answer</Button>
                    </div>
                </div>
            </CardActions>
        </div>
    )
}

const answer = () => {
    return (
                        <div className={styles.test}>
                    <CardContent>
                        <h1 className={styles.title}>Answer Answer</h1>
                    </CardContent>
                    <CardActions>
                        <div className={styles.button_wrap_answer}>
                                <div className={styles.buttona}>
                                    <Fab 
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "#d8432e",
                                        padding: "0px 50px",
                                        fontSize: "18px",
                                        color: '#FFFFFF',
                                    }}>Again</Fab>
                                </div>
                                <div className={styles.buttona}>
                                <Fab 
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "#009755",
                                        padding: "0px 50px",
                                        fontSize: "18px",
                                        color: '#FFFFFF',
                                    }}>Good</Fab>
                                </div>
                                <div className={styles.buttona}>
                                <Fab 
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "#176ced",
                                        padding: "0px 50px",
                                        fontSize: "18px",
                                        color: '#FFFFFF',
                                    }}>Easy</Fab>
                                </div>
                        </div>
                    </CardActions>
                </div>
    )
}



export default function SimpleCard() {
    const classes = useStyles();

    return (
        <div className={styles.main}>
            <Card className={classes.root}>
                {question()}
            </Card>
        </div>

    );
}