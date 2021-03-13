import React from 'react';

const person = (props) => {
    return (<div>I m a person, age is {props.age} and name is {props.name}, nation : {props.nation} and my hobby is {props.children}</div>)
}

export default person;