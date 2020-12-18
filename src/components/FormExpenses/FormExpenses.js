import React, {useState} from 'react';
import Error from '../Error/Error';
import shortid from "shortid";
import PropTypes from "prop-types";


const FormExpenses = ({ saveExpense, saveCreateExpense }) => {

    const emptyExpense = {
        concept: "",
        amount: 0
        // amount: undefined
        //Funciona solo la primera vez, luego deja el último valor cargado.
        // (Buscaré la manera a futuro) Evidentemente tiene que ver con el tipo "number" del input
    }

    const [expense, updateExpense] = useState(emptyExpense);
    const [error, updateError] = useState(false);

    const { concept, amount } = expense;

    const addExpense = (event)=>{
        event.preventDefault();

        if ( concept === "" || isNaN(amount) || amount < 1 )
        {
            updateError(true);

        } else {
            updateError(false);

            const newExpense = { 
                concept, 
                amount, 
                id: shortid.generate()
            }

            saveExpense(newExpense);
            updateExpense(emptyExpense);
            saveCreateExpense(true);
        }
    }

    return (
        <>
            <h2>Agregá tus gastos</h2>

            {
                error && (
                    <Error message="Información incorrecta." />
                )
            }

            <form onSubmit={ addExpense } >
                <label>Concepto</label>
                <input
                    type="text"
                    className="u-full-width input"
                    placeholder="Ej: Alimento para el gato."
                    value={expense.concept}
                    onChange={ (event)=>updateExpense({
                        concept: event.target.value,
                        amount: expense.amount
                    }) }
                />

                <label>Monto</label>
                <input
                    type="number"
                    className="u-full-width input"
                    placeholder="Ingrese solo numeros..."
                    value={expense.amount}
                    onChange={ (event)=>updateExpense({
                        concept: expense.concept,
                        amount: Number(event.target.value)
                    }) }

                />

                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Ingresar gasto</button>
            </form>
        </>
    );
}

FormExpenses.propTypes = {
    saveExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}
 
export default FormExpenses;