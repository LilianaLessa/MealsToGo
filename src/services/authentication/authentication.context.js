import React, { useState, createContext } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
} from "./authentication.service";
import { getAuth } from "firebase/auth";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  getAuth().onAuthStateChanged((u) => {
    if (u) {
      setUser(u);
    }
    setIsLoading(false);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError({
        message: "Error: passwords do not match",
      });
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
