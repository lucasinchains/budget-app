import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Setting = ({ handleBudget, handleRemaining, handleSetting }) => {
  const [amount, handleAmount] = useState(0);

  const [error, handleError] = useState(false);

  const defineBudget = (e) => {
    handleAmount(parseInt(e.target.value));
  };

  const initialBudget = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      handleError(true);
      return;
    }

    handleError(false);

    handleBudget(amount);

    handleRemaining(amount);

    handleSetting(false);
  };

  return (
    <Fragment>
      <h2>Please, insert your budget</h2>
      <form onSubmit={initialBudget}>
        {error ? <Error message="Budget must be above zero." /> : null}
        <input
          type="number"
          className="u-full-width"
          placeholder="Which is your budget?"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Start"
        />
      </form>
    </Fragment>
  );
};

Setting.propTypes = {
  handleBudget: PropTypes.func.isRequired,
  handleRemaining: PropTypes.func.isRequired,
  handleSetting: PropTypes.func.isRequired,
};

export default Setting;
