import React from 'react';

const person = (props) => {
    return (<div onClick={props.click}>I m a person, age is {props.age} and name is {props.name}, nation : {props.nation} and my hobby is {props.children}</div>)
}

export default person;