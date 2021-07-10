import './ChartBar.css';

const ChartBar = props => {
    let filledValue = '0%';
    filledValue = Math.round((props.value / props.maxValue) * 100) + '%';
    debugger
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: filledValue }}  >

                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar;