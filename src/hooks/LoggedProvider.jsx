// import hooks
import React, { createContext, useContext, useState } from "react";

// import dependencies
import Cookies from "js-cookie";

const LoggedContext = createContext();

export const useLoggedIn = () => {
  return useContext(LoggedContext);
};

export const LoggedProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("isLoggedIn") === "true"
  );

  const login = () => {
    setIsLoggedIn(true);
    Cookies.set("isLoggedIn", "true", { expires: 7 });
  };

  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove("isLoggedIn");
    Cookies.remove("access-token");
    Cookies.remove("client");
    Cookies.remove("uid");
  };

  return (
    <LoggedContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoggedContext.Provider>
  );
};
