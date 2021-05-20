import React, { useState } from "react";
import InputUser from "./components/User/InputUser";
import ShowUsers from "./components/User/ShowUsers";
import InvalidInput from './components/User/InvalidInput';

const App = () => {
  const[isValidUser, setIsValidUser] = useState(true);
  const [users, setUsers] = useState([
    { name: "Vatan", age: 31, id: 1 },
    { name: "Tanu", age: 30, id: 2 },
  ]);

  const addUserHandler = (user) => {
    if (user.name.length > 0 && user.age.length > 0) {
      setUsers(prevUsers => {return [user ,...prevUsers]});
      setIsValidUser(true);
    }else{
      setIsValidUser(false);
    }
  };

  const isValidUserhandler = () => {
    setIsValidUser(true);
  };

  return (
    <div>
      {isValidUser ? <InputUser addUser={addUserHandler}/> : <InvalidInput setValidUserState = {isValidUserhandler}/>}
      <ShowUsers users={users} />
    </div>
  );
};

export default App;
