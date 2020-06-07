import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from './StudyDeck.module.css';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200
  }
});

export default function CreateDeck(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <h1 className = {styles.title}>{props.name}</h1>
        <div className = {styles.button_wrap}>
          <div className = {styles.button}>
          <Link to={`/study/${props.name}`} className = {styles.link}>
            <Button size="large">
              Study
              </Button>
            </Link> 
          </div>
        </div>
    </Card>
  );
}