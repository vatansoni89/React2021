import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const resetInput = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmit(expenseData);
    resetInput();
  };

  const cancelHandler = () => {
    props.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2011-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
        <button
          className="new-expense__actions"
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
