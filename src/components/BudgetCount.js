import React, { Fragment } from "react";
import { checkBudget } from "../Helpers";
import PropTypes from "prop-types";

const BudgetCount = ({ budget, remainingBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={checkBudget(budget, remainingBudget)}>
        Remaining: $ {remainingBudget}
      </div>
    </Fragment>
  );
};

BudgetCount.propTypes = {
  budget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired,
};
export default BudgetCount;
