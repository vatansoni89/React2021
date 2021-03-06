import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

let Expenses = (props) => {
  const [filteredYearOption, setFilterOptions] = useState("All Year");

  const filtereChangeHandler = (exp) => {
    setFilterOptions(exp);
  };

  const filteredExpenseForYear = props.expensesList.filter(
    (x) => x.date.getFullYear() == filteredYearOption
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelection={filtereChangeHandler}
          defaultYear={filteredYearOption}
        />
        <ExpensesChart expenses = {filteredExpenseForYear} />
        <ExpenseList
          filteredYearOption={filteredYearOption}
          expensesList={props.expensesList}
        />
      </Card>
    </div>
  );
};

export default Expenses;
