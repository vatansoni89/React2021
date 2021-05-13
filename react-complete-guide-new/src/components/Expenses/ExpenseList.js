import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  return (
    <div>
      {props.filteredYearOption == "All Year" ? (
        props.expensesList.map((x) => <ExpenseItem item={x} key={x.id} />)
      ) : props.filterExpenseByYear.length == 0 ? (
        <p>No Expense</p>
      ) : (
        props.filterExpenseByYear.map((x) => <ExpenseItem item={x} key={x.id} />)
      )}
    </div>
  );
};

export default ExpenseList;