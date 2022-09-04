import React, { useContext } from "react";
import { AppContext } from "../context/TransactionContext";

const TotalBalance = () => {
  const { transaction } = useContext(AppContext);
  const Amount = transaction.map((value) => value.amount);

  const Total = Number(
    Amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
  );
  return (
    <div className="total_balance">
      <h2 style={{ margin: 0, padding: "1rem" }}>Your Total Balance</h2>
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bolder",
          marginLeft: "1rem",
        }}
      >
        ${Total}
      </span>
    </div>
  );
};

export default TotalBalance;
