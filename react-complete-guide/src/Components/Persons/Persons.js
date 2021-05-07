import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.personsTemp.map((x, index) => (
    <Person
      click={() => props.deletePersonHandler(index)}
      name={x.name}
      age={x.age}
      key={x.id}
      changed={(event) => props.nameChangedHandler(event, x.id)}
    />
  ));

export default persons;
