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

  const filterExpenseByYear = props.expensesList.filter(
    (x) => x.date.getFullYear() == filteredYearOption
  );

  let xxx = //If 'all year' then show full list else if filtered list lenth is 0 then show msz or show filtered list.
    filteredYearOption == "All Year" ? (
      props.expensesList.map((x) => <ExpenseItem item={x} key={x.id} />)
    ) : filterExpenseByYear.length == 0 ? (
      <p>No Expense</p>
    ) : (
      filterExpenseByYear.map((x) => <ExpenseItem item={x} key={x.id} />)
    );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelection={filtereChangeHandler}
          defaultYear={filteredYearOption}
        />
        {xxx}
      </Card>
    </div>
  );
};

export default Expenses;
