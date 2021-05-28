import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const emailReducer = (lastStateSnap, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    //console.log('Action >> ',action.value)
    return {
      value: lastStateSnap.value,
      isValid: lastStateSnap.value.includes("@"),
    };
  }
  return { value: "", isValid: false }; //new state
};

const passwordReducer = (lastStateSnap, action) => {
  if (action.type === "USER_PASSWORD") {
    console.log("Password action.val.length>", action.val.length);
    return { value: action.val, isValid: action.val.length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    //console.log('Action >> ',action.value)
    return {
      value: lastStateSnap.value,
      isValid: lastStateSnap.value.length > 6,
    };
  }
  return { value: "", isValid: false }; //new state
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  const {isValid: emailIsValid} = emailState; //emailState.isValid >>goes-to>> emailIsValid, (alias) 
  const {isValid: passwordIsValid} = passwordState;

  //Benefit: useEffect will not run for 'password is valid over valid'(means if password is already > 6 length and 
  //if add more characters then still the isValid will be same as no re-render.) and same for email.

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("from useEffect L15");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("from useEffect clean");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    // setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
    console.log("passwordChangeHandler > ", passwordState);
    //setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
