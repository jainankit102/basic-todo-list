import './ExpensesListData.css';
import ExpenseItem from './ExpenseItem';

const ExpensesListData = props => {

    const removeItemHandler = (itemId) => {
        props.onItemDelete(itemId);
    }

    if (props.expenses.length === 0) {
        return <p className="expenses-list__fallback">No expenses found</p>
    }
    return (
        props.expenses.map((expense) => {
            return <ExpenseItem id={expense.id} key={expense.id}
                title={expense.title} amount={expense.amount} date={expense.date}
                onRemove={removeItemHandler}></ExpenseItem>
        })
    )
}

export default ExpensesListData;