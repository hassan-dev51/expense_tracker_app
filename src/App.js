import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import ExpInc from "./components/ExpInc";
import TotalBalance from "./components/TotalBalance";

function App() {
  return (
    <div className="main_div">
      <p>Expense Tracker App</p>
      <div className="child_div">
        <TotalBalance />
        <ExpInc />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
