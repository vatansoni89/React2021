import { useReducer } from "react";

const fun1 = (prevState, action) => {
    console.log('prevState >> ',prevState);
    console.log('action >> ',action);
return prevState+1;
};   

const MyReducer = (props) => {
const [counter, setCounter] = useReducer(fun1,1);
const counterClickHandler = () =>{
    setCounter({name: 'vatan', value: 1000});
};

  return <div>
      <button onClick={counterClickHandler} style={{float: 'right'}}>Clicked times: {counter}</button>
  </div>;
};

export default MyReducer;
