import React from 'react';
import {Grid, Typography, Fab} from '@material-ui/core';
import {Chart} from '../';
import ItemModal from '../itemModal';
import styles from './SecondBanner.module.css';

//padding: "18px 36px",
//padding: "5px 50px",
const SecondBanner = () => {
    return (
        <div className = {styles.container}>
            <Grid container spacing={10} justify = 'center'>
             <Grid item >
                 <div  className = {styles.graph}>
                 <Chart />
                 </div>
             </Grid>
             <Grid item>
                 <div className = {styles.descr}>  
                 <Typography >
                     <p className = {styles.para}>By combining spaced repetition with our analytics tools, 
                         we are able to optimize your study process and provide you with insights like never before.
                     </p>
                     <ItemModal/>
                 </Typography>     
                 </div>
             </Grid>
            </Grid>
        </div>
    )
}

export default SecondBanner;