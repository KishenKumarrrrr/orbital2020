import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './StudyDeck.module.css';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200
  }
});

export default function CreateDeck(props) {
    console.log(props);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <h1 className = {styles.title}>{props.name}</h1>
      </CardContent>
      <CardActions>
        <div className = {styles.button_wrap}>
          <div className = {styles.button}>
            <Button size="large">Study</Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}