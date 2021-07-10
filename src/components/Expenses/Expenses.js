import React, { useState } from 'react';
import './Expenses.css';
import Card from './../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpensesListData from './ExpensesListData';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterValueHandler = (filterValue) => {
        setFilteredYear(filterValue);
    }

    const itemDeleteHandler = (itemId) => {
        props.onRemoveItem(itemId);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedValue={filteredYear} onFilterValueChange={filterValueHandler}></ExpenseFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesListData expenses={filteredExpenses} onItemDelete={itemDeleteHandler}></ExpensesListData>
            </Card>
        </div>
    )
}

export default Expenses;