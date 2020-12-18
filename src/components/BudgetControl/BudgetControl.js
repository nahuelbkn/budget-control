import React from 'react';
import PropTypes from "prop-types";

import { checkBudget } from "../../helpers";


const BudgetControl = ({ budget, remaining }) => {
    return (
        <div className="row">
            <div className="alert alert-primary one-half column">
                Presupuesto: $ {budget}
            </div>

            <div className={ checkBudget(budget, remaining) + " one-half column"} >
                Restante: $ {remaining}
            </div>
        </div>
    );
}
 
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default BudgetControl;