import React, { useState, useEffect } from "react";
import MyReducer from "./components/ReducerConcept/MyReducer";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect>>isUserloggedin", Math.random().toString());
    const isUserloggedin = localStorage.getItem("userLogin");
    if (isUserloggedin === "1") {
      console.log("deep inside useEffect");
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("userLogin", "1");
    setIsLoggedIn(true);
    console.log("from loginHandler");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userLogin");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader /*isAuthenticated={isLoggedIn} */ /*onLogout={logoutHandler}*/
      />
      <main>
        <MyReducer />
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
