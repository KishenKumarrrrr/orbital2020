import React from 'react';
import {Link, Typography, Grid} from '@material-ui/core';

import styles from './Header.module.css';

const onMouseOver = event => {
    const et = event.target;
    let newColour = "#98878F";
    et.style.color = newColour;
}

const onMouseOut = event => {
    const et = event.target;
    let defaultColour = "white";
    et.style.color = defaultColour;
}

const Header = () => {
    return (
        <div className = {styles.mainmenu}>
        <Typography className={styles.links}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <div className = {styles.individuallink}>
            <Link href="#" color="inherit" onMouseEnter = {event => onMouseOver(event)} onMouseOut = {event => onMouseOut(event)}>
                About
            </Link>
            </div>
            <div className = {styles.individuallink}>
            <Link href="#" color="inherit" onMouseEnter = {event => onMouseOver(event)} onMouseOut = {event => onMouseOut(event)}>
                FAQ
            </Link>
            </div>
            </Grid>
        </Typography>
        </div>
    )
}

export default Header;