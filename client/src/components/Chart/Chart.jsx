import React from 'react';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { render } from '@testing-library/react';

const Chart = () => {

    const initial = [
        { day: "Mon", correct: 0, wrong: 0 }, 
        { day: "Tue", correct: 0, wrong: 0 }, 
        { day: "Wed", correct: 0, wrong: 0 }, 
        { day: "Thur", correct: 0, wrong: 0 }, 
        { day: "Fri", correct: 0, wrong: 0 }, 
        { day: "Sat", correct: 0, wrong: 0 }, 
        { day: "Sun", correct: 0, wrong: 0 }];
    const updated = [
        { day: "Mon", correct: 3, wrong: 0 },
        { day: "Tue", correct: 7, wrong: 2 },
        { day: "Wed", correct: 5, wrong: 4 },
        { day: "Thur", correct: 15, wrong: 4 },
        { day: "Fri", correct: 22, wrong: 7 },
        { day: "Sat", correct: 20, wrong: 10 },
        { day: "Sun", correct: 29, wrong: 8 }];
    let animate = true;

    /*
    Figure out how to animate the graph so that the values update on user scroll down.
    */

    const onScrollEvent = () => {
        animate = !animate;
    }
    const lineChart = (
        <Line data={{
            labels: animate ? updated.map(x => x.day) : initial.map(x => x.day),
            datasets: [{
                data: animate ? updated.map(x => x.correct) : initial.map(x => x.correct),
                label: 'Correct',
                borderColor: '#0D865D',
                fill: true,
            }, {
                data: animate ? updated.map(x => x.wrong) : initial.map(x => x.wrong),
                label: 'Wrong',
                borderColor: '#ff0033',
                fill: true,
            }],
        }}
        />
    );

    return (
        <div className={styles.container} onMouseEnter={() => onScrollEvent()}>
            {lineChart}
        </div>

    )

}

export default Chart;