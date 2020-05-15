import React from 'react';

import styles from './IntroBanner.module.css';


const IntroBanner = () => {
    return (
        <div className = {styles.introbanner}>
        <h1 className = {styles.title} >Study Smart</h1>
        <p className = {styles.subtext}>Revolutionising the study process</p>
        </div>

    )
}

export default IntroBanner;