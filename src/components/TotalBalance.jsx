import React from "react";

const TotalBalance = () => {
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
        $200
      </span>
    </div>
  );
};

export default TotalBalance;
