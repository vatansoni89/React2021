import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submitFormHandler = (expense) => {
    const expenseData = {
      Id: Math.random().toString(),
      ...expense,
    };
    props.onSubmit(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={submitFormHandler} />
    </div>
  );
};

export default NewExpense;
