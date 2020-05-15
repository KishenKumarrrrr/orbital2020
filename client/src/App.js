import React from 'react';

import Home from './Home.js';
import About from './About.js';
import styles from './App.module.css';
import DeckPage from './DeckPage'
import Study from './Study'
import {Browser, Link, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className = {styles.container}>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/decks" component = {DeckPage} />
                <Route exact path = "/study" component = {Study} />
            </div>
        )
    }
}

export default App;