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
# How React works #
* public\index.html has index.html which have a div with id as root.
* src\index.js render the App component on this root div.
* All other component will be child to this App component.

# Function component #

* Create a component file under component folder.
* Import necessary library.
* Declare function variable by let and return jsx.
* Export default variable.
```javascript
import './ExpenseItem.css'

let expenseItem = () => {
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div className='expense-item__description'>
          <h2>Car Insurance</h2>
          <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
};

export default expenseItem;

```

# Composition by children props #
* It is used when we have common stuff like style etc to apply on contained item.
* Create Card.js and Card.css, here Card.js is a container returns div with common styles and given style(prop style).
* Now <Card></Card> can be used as wrapper.

### `Card.css`
```css
.card{
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

### `Card.js`
```javascript
import "./Card.css";

const card = (props) => {
  let classes = 'card ' + props.className;
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