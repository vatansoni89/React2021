import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';


const NewExpense = (props) => {
  const submitFormHandler = (expense) => {
    const expenseData = {
      Id: Math.random().toString(),
      ...expense,
    };
    props.onSubmit(expenseData);
  };

  const[isAddExpense, setIsAddExpense] = useState(false);

  const addExpenseHandler = (option) => {
    setIsAddExpense(option);
  };

  return (
    <div>
      <div>
        {console.log("isAddExpense > ", isAddExpense)}
        {isAddExpense ? (
          <div className="new-expense">
            <ExpenseForm onSubmit={submitFormHandler} onCancel={addExpenseHandler}/>
          </div>
        ) : (
          <div className="new-expense">
            <button onClick={()=>addExpenseHandler(true)}>Wana Add Expense</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewExpense;
