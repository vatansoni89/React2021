import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{}, //help autocomplition.
});

export default AuthContext;