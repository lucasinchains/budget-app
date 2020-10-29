import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ handleExpense, executeExpense }) => {
  const [expenseName, handleExpenseName] = useState("");

  const [expenseAmount, handleAmountExpended] = useState(0);

  const [error, handleError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    // validar, contruir el gasto (objeto), pasar el gasto hacia el componente principal, resetear el form

    if (
      isNaN(expenseAmount) ||
      expenseName.trim() === "" ||
      expenseAmount < 1
    ) {
      handleError(true);
      return;
    }

    handleError(false);

    const expense = {
      expenseName,
      expenseAmount,
      id: shortid.generate(),
    };

    handleExpense(expense);

    executeExpense(true);
  };

  return (
    <Fragment>
      <h2>Expense Details</h2>
      <div className="campo">
        <form onSubmit={addExpense}>
          {error ? (
            <Error message="Both fields are required. Expense amount must be above zero." />
          ) : null}
          <label>Insert expense type</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="i.e: transport, food, cinema..."
            value={expenseName}
            onChange={(e) => handleExpenseName(e.target.value)}
          />
          <label>Insert amount</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="amount expended"
            value={expenseAmount}
            onChange={(e) => handleAmountExpended(parseInt(e.target.value))}
          />
          <input
            type="submit"
            className="button-primary u-full-width"
            value="Add expense"
          />
        </form>
      </div>
    </Fragment>
  );
};

Form.propTypes = {
  handleExpense: PropTypes.func.isRequired,
  executeExpense: PropTypes.func.isRequired,
};
export default Form;
