import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [updatedExpenses, setExpenses] = useState(expenses);

  const newExpenseSubmitHandler = (newExpense) => {
    console.log("newExpense from App.js", newExpense);
    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };


  return (
    <div>
      <h2>Lets get started</h2>
      {console.log(
        "App return>>>",
        <NewExpense onSubmit={newExpenseSubmitHandler} />
      )}
      <NewExpense onSubmit={newExpenseSubmitHandler} />
      <Expenses expensesList={updatedExpenses}></Expenses>
    </div>
  );
};

export default App;
