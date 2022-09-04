import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
const AddTransaction = () => {
  return (
    <div className="add_transaction">
      <div className="form">
        <form>
          <div className="input_fields">
            <input
              type="text"
              name="text"
              placeholder="Add Transaction"
              autoComplete="off"
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Add Amount"
            />
          </div>
          <div className="check_fields">
            <label htmlFor="Expense">
              Expense
              <input type="radio" name="radio" id="expense" checked="checked" />
            </label>
            <label htmlFor="Expense">
              Income
              <input type="radio" name="radio" id="income" />
            </label>
          </div>
          <div className="btn">
            <input type="submit" value="Add Transaction" />
          </div>
        </form>
      </div>
      <div className="list">
        <div className="todo_list" style={{ borderLeft: "5px solid red" }}>
          <li>Bills</li>
          <span>$34</span>
          <div className="todo_icon add_todo">
            <Tooltip
              title="Delete"
              placement="top-start"
              style={{ cursor: "pointer" }}
            >
              <DeleteIcon />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
