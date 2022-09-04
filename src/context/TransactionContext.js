import React, { createContext, useReducer } from "react";
import { reducerFun } from "./ReducerFunc";

const initialTransaction = [];

const AppContext = createContext(initialTransaction);

const TransactionContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialTransaction);

  const AddTransactionFunc = (transObj) => {
    dispatch({
      type: "Add_transaction",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  };
  const DeleteTransaction = (id) => {
    dispatch({
      type: "Delete_transaction",
      payload: id,
    });
  };
  return (
    <AppContext.Provider
      value={{ transaction: state, AddTransactionFunc, DeleteTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { TransactionContext, AppContext };
