import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';

let Expenses = (props) => {

  const [filteredOption, setFilterOptions] = useState('2020');

  const filteredExpense = (exp) => {
    setFilterOptions(exp);
  };
 
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onYearSelection={filteredExpense} defaultYear={filteredOption}/>
        { console.log(props.expensesList)}
        { console.log('Asli>>>',props.expensesList.map((x) => (
          <ExpenseItem item={x} />
        )))}
        {props.expensesList.map((x) => (
          <ExpenseItem item={x} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
