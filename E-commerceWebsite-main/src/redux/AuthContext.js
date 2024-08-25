import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsLoggedIn(!!loggedInStatus);
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
