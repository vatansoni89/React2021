import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);
  const [headerMessage, setHeaderMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setHeaderMessage("Username Or Age Error");
      setErrorMessage("Username or age is not correct.");
      setIsValidUser(false);
      return;
    }
    if (+enteredUserAge < 1) {
      setHeaderMessage("Age Error");
      setErrorMessage("This age is less than 1.");
      setIsValidUser(false);
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredUserAge,
    });
    resetUserInput();
  };

  const resetUserInput = () => {
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const checkValidUserHandler = () => {
    setIsValidUser(true);
    resetUserInput();
  };

  return (
    <div>
      {console.log(">>", Math.random().toString())}
      {!isValidUser ? (
        <ErrorModal
          title={headerMessage}
          message={errorMessage}
          checkValidUser={checkValidUserHandler}
        />
      ) : (
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={userNameChangeHandler}
              value={enteredUserName}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              onChange={userAgeChangeHandler}
              value={enteredUserAge}
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddUser;
