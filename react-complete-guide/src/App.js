import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Vatan", age: 33 },
      { name: "Tanu", age: 36 }
    ],
    nations:[
      {name: "India", pop: "2B"},
      {name: "UK", pop: "1B"}
    ]
  };

  switchNameHandler = (newName) => {
    //console.log('Name Swiched');
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: newName, age: 30 },
        { name: "TanuJi", age: 30 }
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler.bind(this,'MaxxFromBtn_bind')}>Click Me Bind!</button>
        <button onClick={()=> this.switchNameHandler('MaxxFromBtn_Arrow')}>Click Me Arrow!</button>
        <Person
          age={this.state.persons[1].name}
          name={this.state.persons[1].age}
          nation={this.state.nations[0].name}
          click={this.switchNameHandler.bind(this,'MaxxFromProp')}
        >
          Badminton
        </Person>
        <Person
          age={this.state.persons[2].name}
          name={this.state.persons[2].age}
          nation={this.state.nations[1].name}
        >
          Meditation
        </Person>
      </div>
    );
  }
}

export default App;
