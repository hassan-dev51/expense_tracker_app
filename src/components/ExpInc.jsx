import React, { useContext } from "react";
import { AppContext } from "../context/TransactionContext";

const ExpInc = () => {
  const { transaction } = useContext(AppContext);
  const Amount = transaction.map((value) => value.amount);

  const income = Amount.filter((value) => value > 0).reduce(
    (acc, item) => (acc += item),
    0
  );

  const expense =
    Amount.filter((value) => value < 0).reduce(
      (acc, item) => (acc += item),
      0
    ) * -(1).toFixed(2);
  return (
    <div className="expInc">
      <div className="expense">
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Expense</h3>
        <span>$ {expense}</span>
      </div>
      <div className="income">
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Income</h3>
        <span style={{ marginTop: "1rem" }}>${income}</span>
      </div>
    </div>
  );
};

export default ExpInc;
