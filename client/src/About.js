import React from 'react';

import { Header } from './components';
import styles from './About.module.css';
import firstdp from './images/JonesDP.jpg';
import seconddp from './images/KishenDP.jpg';
import logo from './images/rocket.png';

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
            <div className = {styles.bottomgrid}>
                <div className = {styles.tb1}>
                    <img alt ="rocket" src = {logo} className = {styles.logo} />
                </div>
                <div className = {styles.tb2}>
                    <p className = {styles.logotext}>
                        A web application developed as part of Orbital 2020.
                        We aim to provide students a platform to receive feedback
                        on the content they are studying so that they can best focus
                        their efforts on the areas they are weak in.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;