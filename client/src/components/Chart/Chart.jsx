import React from 'react';
import {Line} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {


    const updated = [{day:"Mon", correct: 3, wrong: 0},{day:"Tue", correct: 7, wrong: 2},{day:"Wed", correct: 5, wrong: 4},{day:"Thur", correct: 15, wrong: 4},{day:"Fri", correct: 22, wrong: 7},{day:"Sat", correct: 20, wrong: 10},{day:"Sun", correct: 29, wrong: 8}];

    const lineChart = (
        <Line data = {{ 
            labels: updated.map(x => x.day), 
            datasets: [{
               data: updated.map(x => x.correct),
               label: 'Correct',
               borderColor: '#0D865D',
               fill: true, 
            }, {
                data: updated.map(x => x.wrong),
               label: 'Wrong',
               borderColor: '#ff0033',
               fill: true, 
            }],
        }}
        />
    );

    return (
        <div className = {styles.container} >
        {lineChart}
        </div>
        
    )
    
}

export default Chart;