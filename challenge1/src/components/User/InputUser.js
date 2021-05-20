import styles from "./InputUser.module.css";
import { useState } from "react";

const User = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userSubmitHandler = (event) => {
    event.preventDefault();
    props.addUser({
      id: Math.random().toString(),
      name: userName,
      age: userAge
    });
    resetInputs();
  };

  const resetInputs = () => {
    setUserName('');
    setUserAge('');
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <div>
      <form className={styles["form-control"]} onSubmit={userSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={userName}
        ></input>
        <label>Age (Years)</label>
        <input type="text" onChange={ageChangeHandler} value={userAge}></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default User;
