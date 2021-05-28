import { useEffect, useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password)=>{}
});

export const AuthContextProvider = (props) => {
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
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;