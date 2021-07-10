import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    let maxValue = 0;
    debugger
    const valueArray = props.dataPoints.map(data => data.value);
    maxValue = Math.max(...valueArray);
    return (
        <div className="chart">
            {props.dataPoints.map(chart => <ChartBar key={Math.random().toString()} label={chart.label} value={chart.value} maxValue={maxValue}></ChartBar>)}
        </div>
    )
}

export default Chart;