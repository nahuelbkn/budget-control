import React, { useState, useEffect } from 'react';
import BudgetControl from './components/BudgetControl/BudgetControl';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Question from "./components/FormBudget/FormBudget";
import FormExpenses from './components/FormExpenses/FormExpenses';


function App() {

  const [budget, updateBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);
  const [expenses, updateExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      updateExpenses( [ ...expenses, expense ] );

      const auxRemaining = remaining - expense.amount;
      updateRemaining(auxRemaining);
    }
  }, [expense]);


  return (
    <div className="App">
      
      <header>
        <h1>Balance mensual</h1>
      </header>

      <div className="main-content content">
      {
        !budget ? (
          <Question
            updateBudget_app={updateBudget}
            updateRemaining_app={updateRemaining}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
            {
              (remaining <= 0) ? (
                <h2 className="mt-6" >No se pueden hacer más gastos</h2>
              ) : (
                <FormExpenses
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              )
            }
            </div>

            <div className="one-half column">
              <h2>Balance</h2>
              <BudgetControl 
                budget={budget}
                remaining={remaining}
              />
              {
                expenses.length ? (
                  <>
                    <h2 className="mt-6">Gastos realizados</h2>
                    <ExpenseList expenses={ expenses } />
                  </>
                ) : (
                  <h2 className="mt-6">Aún no hay gastos</h2>
                )
              }
            </div>
          </div>
        )
      }
      </div>

    </div>
  );
}

export default App;
