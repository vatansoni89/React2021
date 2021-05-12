import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

let ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);
  
  const clickHandler = () => {
    console.log('Title is frm item>>> ',props.item.title);
    setTitle(props.item.title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.item.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me!!</button>
    </Card>
  );
};

export default ExpenseItem;
