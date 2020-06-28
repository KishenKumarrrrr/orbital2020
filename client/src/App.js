import React from 'react';

import Home from './Home.js';
import About from './About.js';
import styles from './App.module.css';
import DeckPage from './DeckPage';
import CardPage from './CardPage';
import Study from './Study';
import EditQuestion from './EditQuestion';
import {Browser, Link, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className = {styles.container}>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/decks" component = {DeckPage} />
                <Route exact path = "/:deckName/cards" render = {(deckName) => <CardPage {...deckName} />} />
                <Route exact path = "/study/:deckName" render = {(deckName) => <Study {...deckName} />} />
                <Route exact path = "/:deckName/cards/edit" render = {(props) => <EditQuestion {...props} update = {props.location.update}/>} />
            </div>
        )
    }
}

export default App;