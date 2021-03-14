import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id:"abc101", name: "Max", age: 28 },
      {id:"abc102", name: "Vatan", age: 33 },
      {id:"abc103", name: "Tanu", age: 36 },
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

  render() {
    const style = {
      backgroundColor: "red",
      border: "1px solid blue",
    };

    let persons = null;

    if (this.state.showPersons) {
      let personsTemp = [...this.state.persons];
      persons = (
        <div>
          {personsTemp.map((x, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={x.name}
                age={x.age}
                key={x.id}
                changed={(event) => this.nameChangedHandler(event, x.id)}
              />
            );
          })}

          {/* <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
          nation={this.state.nations[0].name}
          click={this.switchNameHandler.bind(this, "Maxx1FromProp")}
        >
          Beer!!!
        </Person>
        <Person
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          nation={this.state.nations[1].name}
          click={this.switchNameHandler.bind(this, "Maxx2FromProp")}
        >
          Badminton
        </Person>
        <Person
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
          nation={this.state.nations[2].name}
          changed={this.nameChangedHandler}
        >
          Meditation
        </Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.showHidePersonsHandler}>
          {this.showPersonBtnText}
        </button>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "MaxxFromBtn_bind")}
        >
          Click Me Bind!
        </button>
        <button onClick={() => this.switchNameHandler("MaxxFromBtn_Arrow")}>
          Click Me Arrow!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
