import React, { useState, useEffect } from "react";
import Setting from "./components/Setting";
import Form from "./components/Form";
import List from "./components/List";
import BudgetCount from "./components/BudgetCount";

function App() {
  const [budget, handleBudget] = useState(0);

  const [remainingBudget, handleRemaining] = useState(0);

  const [showSetting, handleSetting] = useState(true);

  const [expenses, handleNewExpense] = useState([]);

  const [expense, handleExpense] = useState({});

  const [createExpense, executeExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      handleNewExpense([...expenses, expense]);
      executeExpense(false);

      const remaining = remainingBudget - expense.expenseAmount;
      handleRemaining(remaining);
    }
  }, [expense, createExpense, expenses, remainingBudget]);

  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="contenido-principal contenido">
          {showSetting ? (
            <Setting
              handleBudget={handleBudget}
              handleRemaining={handleRemaining}
              handleSetting={handleSetting}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  handleExpense={handleExpense}
                  executeExpense={executeExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />

                <BudgetCount
                  budget={budget}
                  remainingBudget={remainingBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
