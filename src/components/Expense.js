import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <li className="gastos">
    <p>
      {expense.expenseName}

      <span>$ {expense.expenseAmount}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default Expense;
