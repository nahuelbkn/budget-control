import React, { useState } from 'react';
import Error from "../Error/Error";
import PropTypes from "prop-types";


const FormBudget = ({ updateBudget_app, updateRemaining_app }) => {

    const [budget, updateBudget] = useState(0);
    const [error, updateError] = useState(false);

    const handlerChange = (event)=>{
        const userBudget = Number(event.target.value)
        updateBudget(userBudget);
    }

    const handlerSubmit = (event)=>{
        event.preventDefault();

        if ( budget < 1 || isNaN(budget) ) {
            updateError(true);
        } else {
            updateError(false);
            updateBudget_app(budget);
            updateRemaining_app(budget);
        }
    }

    return (
        <>
            <h2>Ingresá tu presupuesto</h2>

            {
                error && (
                    <Error message="EL valor ingresado no es válido." />
                )
            }

            <form>
                <input
                    type="number"
                    className="u-full-width input"
                    placeholder="Ingresá solo números..."
                    onChange={ handlerChange }
                />

                <button
                    type="submit"
                    className="button-primary u-full-width"
                    onClick={ handlerSubmit }
                >Ingresar</button>
            </form>
        </>
    );
}

FormBudget.propTypes = {
    updateBudget_app: PropTypes.func.isRequired,
    updateRemaining_app: PropTypes.func.isRequired
}

export default FormBudget;