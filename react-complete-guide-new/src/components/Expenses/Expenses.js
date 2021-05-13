import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

let Expenses = (props) => {
  const [filteredYearOption, setFilterOptions] = useState("All Year");

  const filtereChangeHandler = (exp) => {
    setFilterOptions(exp);
  };

 const filterExpenseByYear = props.expensesList.filter(x=>x.date.getFullYear() == filteredYearOption);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelection={filtereChangeHandler}
          defaultYear={filteredYearOption}
        />
        { filteredYearOption == 'All Year' ? props.expensesList.map((x) => (
          <ExpenseItem item={x}  key={x.id} />)) :
        (filterExpenseByYear.length == 0 ? <p>No Expense</p> : filterExpenseByYear.map((x) => (
          <ExpenseItem item={x}  key={x.id} />)
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
