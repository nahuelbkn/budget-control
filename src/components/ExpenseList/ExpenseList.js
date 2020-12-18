import React from 'react';
import Expense from '../Expense/Expense';
import PropTypes from "prop-types";


const ExpenseList = ({ expenses }) => {

    console.log("hola expenses")

    return (
        <div className="expenses-incurred">
        {
            expenses && expenses.map(expense=>{
                return (
                    <Expense
                        key={ expense.id } 
                        expense={ expense }
                    />
                )
            })
        }
        </div>
    );
}
 
ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default ExpenseList;