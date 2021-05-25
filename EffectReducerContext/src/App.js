import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    console.log('useEffect>>isUserloggedin', Math.random().toString());
    const isUserloggedin = localStorage.getItem('userLogin');
    if (isUserloggedin === '1') {
      console.log('deep inside useEffect');
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('userLogin' , '1');
    setIsLoggedIn(true);
    console.log('from loginHandler');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userLogin');
  };

  return (
    <React.Fragment>
      {console.log('from Jsx')}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
