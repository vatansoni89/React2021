import ExpenseItem from './ExpenseItem';

let expenses = (props) => {

  return props.expensesList.map((x) => <ExpenseItem item={x} />);
};

export default expenses;
