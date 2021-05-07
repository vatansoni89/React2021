import React from 'react';
import logo from "../../../src/logo.svg";

const cockpit = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={props.showHidePersonsHandler}>
        {props.showPersonBtnText}
      </button>
      <button
        style={props.mystyle}
        onClick={() => props.switchNameHandler("MaxxFromBtn_bind")}
      >
        Click Me Bind!
      </button>
      <button onClick={() => props.switchNameHandler("MaxxFromBtn_Arrow")}>
        Click Me Arrow!
      </button>
    </div>
  );
};

export default cockpit;
