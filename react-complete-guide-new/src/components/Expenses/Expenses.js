import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';

let expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expensesList.map((x) => (
        <ExpenseItem item={x} />
      ))}
    </Card>
  );
};

export default expenses;
