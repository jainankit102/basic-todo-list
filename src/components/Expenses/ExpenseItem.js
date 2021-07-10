import './ExpenseItem.css';
import ExpanseDate from './ExpenseDate';
import Card from './../UI/Card'



function ExpenseItem(props) {

    const removeItem = () => {
        props.onRemove(props.id)
    }

    return (

        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpanseDate date={props.date}></ExpanseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
                <button type="button" className="remove-button" onClick={removeItem}>X</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;