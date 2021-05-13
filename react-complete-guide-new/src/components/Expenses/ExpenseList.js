import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const filteredList = props.expensesList.filter(
    (x) => x.date.getFullYear() == props.filteredYearOption
  );
  
  console.log("props.filteredYearOption", props.filteredYearOption);
  return (
    <div>
      {props.filteredYearOption == "All Year" ? (
        props.expensesList.map((x) => <ExpenseItem item={x} key={x.id} />)
      ) : filteredList.length == 0 ? (
        <h2 className="expenses-list__fallback">No Expense</h2>
      ) : (<ul className='expenses-list'>
        {filteredList.map((x) => <ExpenseItem item={x} key={x.id} />)}</ul>
      )}
    </div>
  );
};

export default ExpenseList;
