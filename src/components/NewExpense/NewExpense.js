import React, { useState } from 'react';
import ExprenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormVisible, setFormVisivility] = useState(false);
    const saveExpenseDataHandler = expeseData => {
        expeseData['id'] = Math.random().toString();
        props.onAddExpense(expeseData)
        setFormVisivility(false);
    }
    const changeFormVisibilityHandler = isVisible => {
        setFormVisivility(isVisible);
    }
    const showFormVisibility = () => {
        setFormVisivility(true);

    }
    return (
        <div className="new-expense">
            {isFormVisible === false && <button type="button" onClick={showFormVisibility}>Add New Expenses</button>}

            {isFormVisible === true && <ExprenseForm onSaveExpenseData={saveExpenseDataHandler} onFormVisibility={changeFormVisibilityHandler}></ExprenseForm>}

        </div>
    )
}

export default NewExpense;