import React from "react";

const person = (props) => {
  return (
    <div>
      <div onClick={props.click}>
        I m a person, age is {props.age} and name is {props.name}, nation :{" "}
        {props.nation} and my hobby is {props.children}
      </div>
      <hr />
      <div>
        <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
    </div>
  );
};

export default person;
