import React from 'react';
import { Header, CreateDeck, StudyDeck } from './components';
import styles from './DeckPage.module.css';

const fakeArray = ['CS2040S', 'CS2030', 'MA1101R', 'IS1103', 'GER1000'];

const DeckPage = () => {
    return (
        <div className = {styles.main}>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.create}>
            <CreateDeck />
            </div>
            <div>
                <h1 className = {styles.otherdecks}>Study a deck!</h1>
            </div>
            <div className = {styles.wrapper}>
                {fakeArray.map(name => <StudyDeck name = {name}/>)}
            </div>
            <div className = {styles.buffer2}>
            </div>
        </div>

    )
}

export default DeckPage;