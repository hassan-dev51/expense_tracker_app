import React, { useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { AppContext } from "../context/TransactionContext";

const AddTransaction = () => {
  const { transaction, AddTransactionFunc, DeleteTransaction } =
    useContext(AppContext);
  const [AddDescription, setAddDescription] = useState("");

  const [AddAmount, setAddAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (AddDescription && AddAmount) {
      AddTransactionFunc({
        amount: Number(AddAmount),
        desc: AddDescription,
      });
    } else {
      alert("Please Add Something");
    }
  };
  return (
    <div className="add_transaction">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input_fields">
            <input
              type="text"
              name="text"
              placeholder="Add Transaction"
              autoComplete="off"
              onChange={(e) => setAddDescription(e.target.value)}
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Add Amount"
              onChange={(e) => setAddAmount(e.target.value)}
            />
          </div>
          <div className="check_fields">
            <h3>Use (-) sign for Expense</h3>
          </div>
          <div className="btn">
            <button type="submit">Add Transaction</button>
          </div>
        </form>
      </div>
      <div className="list">
        {transaction.map((currElem, ind) => {
          const sign = currElem.amount < 0 ? "-" : "+";
          return (
            <div
              className="todo_list"
              style={
                currElem.amount < 0
                  ? { borderLeft: "5px solid red" }
                  : { borderLeft: "5px solid green" }
              }
              key={ind}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65%",
                }}
              >
                <span>{currElem.desc}</span>
                <span>
                  {sign} {Math.abs(currElem.amount)}
                </span>{" "}
              </li>
              {/* this function throw error  */}
              {/* <DeleteIcon onClick={() => DeleteTransaction(ind)} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTransaction;
