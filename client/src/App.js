import React, { Component } from 'react';

import { Header} from './components';
import Home from './Home.js';
import About from './About.js';
import styles from './App.module.css';
import {Browser, Link, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className = {styles.container}>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/about" component = {About} />
            </div>
        )
    }
}

export default App;