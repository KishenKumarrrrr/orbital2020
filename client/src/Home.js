import React, { Component } from 'react';

import { Header, IntroBanner, SecondBanner} from './components';
import styles from './App.module.css';

const Home = () => {
    return (
        <div className = {styles.container}>
            <Header />
            <IntroBanner />
            <SecondBanner />
        </div>
    )
}

export default Home;