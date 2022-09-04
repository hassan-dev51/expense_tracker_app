import React from "react";

const ExpInc = () => {
  return (
    <div className="expInc">
      <div className="expense">
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Expense</h3>
        <span>$56</span>
      </div>
      <div className="income">
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Income</h3>
        <span style={{ marginTop: "1rem" }}>$45</span>
      </div>
    </div>
  );
};

export default ExpInc;
