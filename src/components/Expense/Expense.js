import React from 'react';
import PropTypes from "prop-types";



const Expense = ({ expense }) => {
    
    return (
        <li className="expenses-incurred">
            <p>
                {expense.concept}
                <span className="expense">
                    $ {expense.amount}
                </span>
            </p>
        </li>
    );
}
 
Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense;