import React, { Component } from "react";

import "./App.css";
import Persons from "./Components/Persons/Persons";
import Cockpit from "./Components/Cockpit/Cockpit";
class App extends Component {
  state = {
    persons: [
      { id: "abc101", name: "Max", age: 28 },
      { id: "abc102", name: "Vatan", age: 33 },
      { id: "abc103", name: "Tanu", age: 36 },
    ],
    nations: [
      { name: "India", pop: "2B" },
      { name: "UK", pop: "1B" },
      { name: "USA", pop: "1B" },
    ],
    showPersons: false,
  };

  showPersonBtnText = "Show Persons!!!";

  switchNameHandler = (newName) => {
    //console.log('Name Swiched');
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: newName, age: 30 },
        { name: "TanuJi", age: 30 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const tempArray = [...this.state.persons];
    const personIndex = tempArray.findIndex((x) => x.id === id);
    const persontoBeMofify = tempArray[personIndex];
    persontoBeMofify.name = event.target.value;

    tempArray[personIndex] = persontoBeMofify;
    console.log(tempArray);
    this.setState({
      persons: tempArray,
    });
  };

  showHidePersonsHandler = () => {
    let personsVisibilityState = this.state.showPersons;
    this.setState({ showPersons: !personsVisibilityState });
    this.showPersonBtnText = personsVisibilityState
      ? "Show Persons"
      : "Hide Persons";
  };

  deletePersonHandler = (index) => {
    let temp = [...this.state.persons];
    temp.splice(index, 1);
    console.log(temp);
    this.setState({ persons: temp });
  };

  mystyle = {
    backgroundColor: "red",
    border: "1px solid blue",
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      let personsTemp = [...this.state.persons];
      persons = (
        <div>
          <Persons
            personsTemp={personsTemp}
            deletePersonHandler={this.deletePersonHandler}
            nameChangedHandler={this.nameChangedHandler}
          ></Persons>
        </div>
      );
      console.log(persons);
    }

    return (
      <div className="App">
        <Cockpit
          showHidePersonsHandler={this.showHidePersonsHandler}
          showPersonBtnText={this.showPersonBtnText}
          switchNameHandler={this.switchNameHandler}
          mystyle={this.mystyle}
        />
        {persons}
      </div>
    );
  }
}

export default App;
