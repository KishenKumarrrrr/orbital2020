import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import {Link} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <Typography className={styles.links}>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <div className = {styles.individuallink}>
                        <Link to="/" className = {styles.link}>
                            Home
                        </Link>
                    </div>
                    <div className = {styles.individuallink}>
                        <Link to = "/about" className = {styles.link}>
                            About
                        </Link>
                    </div>
                    <div className = {styles.individuallink}>
                        <Link href="#" className = {styles.link}>
                            FAQ
                        </Link>
                    </div>
                </Grid>
            </Typography>
        </div>
    )
}

export default Header;