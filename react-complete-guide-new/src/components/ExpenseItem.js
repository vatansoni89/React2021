import "./ExpenseItem.css";

let expenseItem = (props) => {
  console.log("Prop is>>", props);
  return props.expensesList.map((x) => {
    let month = x.date.toLocaleString("en-US", { month: "long" });
    let day = x.date.toLocaleString("en-US", { day: "2-digit" });
    let year = x.date.getFullYear();
    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{x.title}</h2>
          <div className="expense-item__price">{x.amount}</div>
        </div>
      </div>
    );
  });
};

export default expenseItem;
