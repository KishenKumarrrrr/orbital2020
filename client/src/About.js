import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

import { Header, IntroBanner, SecondBanner} from './components';
import styles from './About.module.css';
import firstdp from './JonesDP.jpg';
import seconddp from './KishenDP.jpg';

const About = () => {
    return (
        <div className = {styles.container}>
            <Header />
            <div className = {styles.maingrid}>
                <div className = {styles.tb}>
                    <img alt="Jones" src= {firstdp} className = {styles.displaypics}/> 
                    <h1 className = {styles.names}>Jones Lim</h1>
                </div>
                <div className = {styles.tb}>
                    <img alt="Kishen" src= {seconddp} className = {styles.displaypics}/>
                    <h1 className = {styles.names}>Kishen Kumar</h1>
                </div>
            </div>
        </div>
    )
}

export default About;