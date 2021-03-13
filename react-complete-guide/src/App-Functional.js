import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Vatan", age: 33 },
      { name: "Tanu", age: 36 },
    ],
  });

  const [nationState, setNationState] = useState({
    nations: [
      { name: "India", pop: "2B" },
      { name: "UK", pop: "1B" },
    ],
  });

  const switchNameHandler = () => {
    console.log('Name Swiched');
    setPersonsState({
      persons: [
        { name: "Max", age: 30 },
        { name: "Vatan", age: 30 },
        { name: "TanuJi", age: 30 },
      ],
    });

    setNationState({
      nations: [
        { name: "America", pop: "2B" },
        { name: "Americaaa", pop: "1B" },
      ],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={switchNameHandler}>Click Me!</button>
      <Person
        age={personsState.persons[1].age}
        name={personsState.persons[1].name}
        nation={nationState.nations[0].name}
      >
        Badminton
      </Person>
      <Person
        age={personsState.persons[2].age}
        name={personsState.persons[2].name}
        nation={nationState.nations[1].name}
      >
        Meditation
      </Person>
    </div>
  );
};

export default app;
