import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
const filteredList = props.expensesList.filter(x=>x.date.getFullYear() == props.filteredYearOption);
console.log('props.filteredYearOption',props.filteredYearOption);
  return (
    <div>
      {props.filteredYearOption == "All Year" ? (
        props.expensesList.map((x) => <ExpenseItem item={x} key={x.id} />)
      ) : filteredList.length == 0 ? (
        <p>No Expense</p>
      ) : (
        filteredList.map((x) => (
          <ExpenseItem item={x} key={x.id} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
