import React, { useState, useEffect, createContext } from "react";
import users from "./users";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ username: null, password: null });
  let condition = true;

  const authenticate = (username, password) => {
    for(let i = 0; i < users.length; i++){
      console.log(users[i]);
      if(users[i].username === username && users[i].password === password)
        setUser(username, password);
      else{
        condition = false;
      }
    }
    if(!condition){
      console.log("Snacky");
    }
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
