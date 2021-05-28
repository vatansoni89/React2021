# Understanding "let" and "const"

```javascript
//var don't care if we create multiple at same time.

//Scope to function.

var myName = "maxx";

var myName = "hjh";

console.log(myName);

//let don't allow to create multiple but we can change value

//Scoped to curly braces.

let myName = "maxx";

let myName = "hjh";

console.log(myName);

//const don't even allow to change value.

const myName = "maxx";

myName = "hjh";
```

# Arrow Functions

```javascript
////////Normal function////////

function getMyName(name) {
  console.log(name);
}

getMyName("vatan");

////////Arrow function////////

let getMyname = (name) => {
  console.log(name);
};

getMyname("soni");

////Compact Arrow function////

let getSonuName = (name) => console.log(name);

getSonuName("sonali");

///With no arguments/////

let noArgsGiven = () => console.log("No agrs provided.");

noArgsGiven();
```

# Understanding Classes

```javascript
//Don't give access specifier like Public for class

//Don't Vatan v = new Vatan();

//ES 6

class Man {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Vatan extends Man {
  constructor() {
    super();

    this.name = "Vatan";
  }

  printMyName() {
    console.log(this.name);
  }
}

const v = new Vatan();

v.printMyName();

v.printGender();
```

# Classes, Properties and Methods

```javascript
//Don't give access specifier

//Don't Vatan v = new Vatan();

//ES7

class Man {
  gender = "male";

  printGender = () => console.log(this.gender);
}

class Vatan extends Man {
  name = "Vatan";

  printMyName = () => console.log(this.name);
}

const v = new Vatan();

v.printMyName();

v.printGender();
```

# The Spread & Rest Operator

```javascript
Rest Operator

/////Rest operator////

const fun1 = (...arg) => arg.sort();

console.log(fun1);



fun1(5,4,3)

OP:

[3,4,5]
```

`Rest parameter`: collects all remaining elements into an array.

`Spread operator`: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

```javascript
///Spread operator///

const numbers = [1, 2, 3];

const extendNumbers = [...numbers, 4];

const typelessArray = [numbers, 5];

const getSortedNumbers = (...arg) => arg.sort();

const filter = (...arg) => arg.filter((el) => el === 1);

console.log(extendNumbers); //[1, 2, 3, 4]

console.log(typelessArray); //[[1, 2, 3], 5]

console.log(getSortedNumbers(4, 2, 5)); //[2, 4, 5]

console.log(filter(4, 2, 5, 1)); //[1]

///spread json example.

const name = {
  name: "vatan",
};

const fullname = {
  ...name,

  surname: "soni",
};

console.log(fullname);
//OP:
//[object Object] {

//name: "vatan",

//surname: "soni"

//}
```

# Destructuring

```javascript
//array de-structuring

const numbers = [1, 2, 3];

[n1, n2] = numbers;

console.log(n1, n2);

[p1, , p3] = [1, 2, 3];

console.log(p1, p3);
```

# Reference and Primitive Types Refresher

```javascript
//<<<<<<<<<Reference and Primitive types refresher>>>>>>>>

//<<<<Primitive types means value types>>>>

const num1 = 5; //primitive type

const num2 = num1; //copy value

console.log(num2);

//<<<<<<<<Reference types>>>>>>>>>>>

const person = {
  name: "Vatan",
};

const secondPerson = person;

person.name = "Name changed";

console.log(secondPerson);
```

# Refreshing Array Functions

```javascript
///<<<<<Refresh array functions>>>>>>>

//<<<Map()>>>

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => num * 2);

console.log(doubleNumArray);
```

# Creating A New React Project

```node
npx create-react-app react-complete-guide-new
cd react-complete-guide-new
npm install
npm start
```

# How React works

- public\index.html has index.html which have a div with id as root.
- src\index.js render the App component on this root div.
- All other component will be child to this App component.

# Function component

- Create a component file under component folder.
- Import necessary library.
- Declare function variable by let and return jsx.
- Export default variable.

```javascript
import "./ExpenseItem.css";

let expenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};

export default expenseItem;
```

# Composition by children props

- It is used when we have common stuff like style etc to apply on contained item.
- Create Card.js and Card.css, here Card.js is a container returns div with common styles and given style(prop style).
- Now <Card></Card> can be used as wrapper.

### `Card.css`

```css
.card {
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

### `Card.js`

```javascript
import "./Card.css";

const card = (props) => {
  let classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default card;
```

### `Expense.js`

```javascript
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

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
```

# Working with State

- Import useState from react.
- use useState(value) to initialize state variable.
- Destructure the return as it returns old value and a function to change old value.

```javascript
const [title, setTitle] = useState(props.item.title);
```

- Now use title to access get value and setTitle function to set value.

# Events & State

```yaml
App
  NewExpense
    ExpenseForm
  Expenses: Pass a props function to set the state and default val of dropdwn.
    ExpenseFilter: It has a local function which uses props function to set state.
    ExpensesChart
      Chart
        ChartBar
    ExpenseList
      ExpenseItem
        ExpenseDate
```

# Map function

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

# Understanding "Keys"

If we don't use key and add an item to list, then

- It addes the item to last.
- Rearrange list items and add the item to top.
  > Degrades performance
- So to solve this we add unique element as key, we don't need to do anything in component, just need to mention key as

```javascript
//No need to do anything inside ExpenseItem component.
<Card className="expenses">
  {props.expensesList.map((x) => (
    <ExpenseItem item={x} key={x.id} />
  ))}
</Card>
```

# Filter function

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

# How re-render works

Whatever is connected to state variable will re-render if the state variable changes/updated.

```javascript
let Expenses = (props) => {
  const [filteredYearOption, setFilterOptions] = useState("All Year");

  const filtereChangeHandler = (exp) => {
    setFilterOptions(exp);
  };

  const filterExpenseByYear = props.expensesList.filter(
    (x) => x.date.getFullYear() == filteredYearOption
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelection={filtereChangeHandler}
          defaultYear={filteredYearOption}
        />
        {filteredYearOption == "All Year" ? (
          props.expensesList.map((x) => <ExpenseItem item={x} key={x.id} />)
        ) : filterExpenseByYear.length == 0 ? (
          <p>No Expense</p>
        ) : (
          filterExpenseByYear.map((x) => <ExpenseItem item={x} key={x.id} />)
        )}
      </Card>
    </div>
  );
};
```

> Here filteredYearOption is connected to list and drop down both so both will re-render.

# Style takes object in react

Here we see `style={{ height: barFillHeight }}` because style takes a js object and inside that we pass calculated barFillHeight.

```javascript
const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
```

# unshift()

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

# Styling React Component

- Inline style: Accept js object.
  ```javascript
  <div className="form-control">
        <label style={{ color: isValid ? "black" : "red" }}>
          {isValid ? "Course Goal" : "Enter Something"}
        </label>
  ```
- CSS modules

  1. Rename example.css to example.module.css
  2. Import with name

  ```javascript
  import styles from "./CourseInput.module.css";
  ```

  3. using name as js object and access style example

  ```javascript
  const Button = (props) => {
    return (
      <button
        type={props.type}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };
  ```

  Or

  ```javascript
  <div className={`${styles["form-control"]} ${!isValid && styles.  invalid}`}>
  ```

* `Media query`:
  Define this in css module and use (example Button.module.css)

# Overlay

backdrop

# html

ul li
type of input
header-div-footer
dynamic header and body

# Fragments, Portals & Refs

- Fragments : It is used to simplify Div soup issue. Div is is nested divs because we need to return a single jsx node component. Use `<React.Fragment>` instead of `<div>`.

```javascript
<React.Fragment></React.Fragment>
```

- Portals : It is used to render a component at specific dom html id. for example if we want to render any coponent side by side to root component then
  `Steps`:

1. Define ids in root index.html.
   ```html
   <div id="root-backdrop"></div>
   <div id="root-overlay"></div>
   <div id="root"></div>
   ```
2. Import ReactDOM and use createPortal(customComponent, id)
   ```javascript
   return (
     <React.Fragment>
       {ReactDOM.createPortal(
         <Overlay message={props.message} title={props.title} />,
         document.getElementById("root-overlay")
       )}
     </React.Fragment>
   );
   ```

- Refs: it allow us to dom elements. It is used to read input fields. we are using state (useState) but we can use Refs also. we use useRefs(). we need to `import {useRef} from 'react';`

# Effects, Reducers and Context

- # `useEffect` : `useEffect(()=>{},[dependencies])`

  To decide whether a code section will execute on specific state change (dependency) or not.

  When state change then the component function re-execute, now if we want that a code section need to run only if specific state is changed then we use useeffect.

  It runs at last (after executing JSX), and if the state again gets chaged in useEffect then jsx execute again.

  > Here `setFormIsValid()` was being duplicated, and we can reduce it by using useState, Now whenever `enteredEmail or enteredPassword` `state` changes then only useEffect executes and validate.

  ```javascript
  const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };
  ```

  `UseEffect` can return a cleanup function also which will execute `before` the next UseEffect execution.

  ```javascript
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("from useEffect L15");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("from useEffect clean");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  ```

  > when page loads setTimeOut executes after 2 sec but for next exection it first executes clean-up function.

  So here the timer is being created on every key type for mail and password, but next key type is deleting the previous timer by `clearTimeout`, once user stops for 500 msec then only function inside setTimeout is executing.

- `localStorage` : The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

  The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
  The localStorage property is read-only.

  `Functions`:

  1. localStorage.setItem('userLogin' , '1');
  2. localStorage.getItem('userLogin');
  3. localStorage.removeItem('userLogin');

- # Reducers

  It's extension of useState. In usestate we get a ststeful variable and a function to set that variable. Here we get a function to set the state of stateful variable.

  ```javascript
  const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  ```

  Easy example explaination:

  ```javascript
  const [counter, setCounter] = useReducer(
    fun1 /*Execute on   setCounter call and have previous state and action object   passed by setCounter({object}) and it must return new updated   state*/,
    1 /*default value for stateful variale 'counter'*/
  );
  ```

  Easy example:

  ```javascript
  import { useReducer } from "react";

  const fun1 = (prevState, action) => {
    console.log("prevState >> ", prevState);
    console.log("action >> ", action);
    return prevState + 1;
  };

  const MyReducer = (props) => {
    const [counter, setCounter] = useReducer(fun1, 1);

    const counterClickHandler = () => {
      setCounter({ name: "vatan", value: 1000 });
    };

    return (
      <div>
        <button onClick={counterClickHandler} style={{ float: "right" }}>
          Clicked times: {counter}
        </button>
      </div>
    );
  };

  export default MyReducer;
  ```

  <img src="Images/Reducerconcept.jpg" alt="Reducer Concept"/>

- # useContext

  React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.
  Main actors: React.createContext(), useContext(SampleContext)

  Steps:

  1. Create context component and export by using `React.createContext()`. We can do this with no value also. The values here are only to support auto-complete.

  ```javascript
  import React from "react";

  const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, //help autocomplition.
  });

  export default AuthContext;
  ```

  2. Wrap the component where you want to use this context as

  ```javascript
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>
        <MyReducer />
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
  ```

  3. Now we can use context anywhere down the tree by `importing useContext` and using context variable by using `useContext(AuthContext)`.

  ```javascript
  import React, { useContext } from "react";
  import classes from "./Navigation.module.css";
  import AuthContext from "../../store/auth-context";
  const Navigation = () => {
    const ctx = useContext(AuthContext);

    return (
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  export default Navigation;
  ```
