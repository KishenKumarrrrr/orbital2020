import React from 'react';
import { Header, Question } from './components';
import styles from './Study.module.css';


const Study = () => {
    return (
        <div>
            <Header />
            <div className = {styles.buffer}>
            </div>
            <div className = {styles.main}>
                <Question />
            </div>
        </div>
    )
}

export default Study;