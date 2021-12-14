import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ username: null, password: null });

  const authenticate = (username, password) => {
    setUser({ username, password });
  };

  const isAuthenticated = user.username === null ? false : true

  const signout = () => {
    setTimeout(() => setUser( { username: null, password: null } ), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
