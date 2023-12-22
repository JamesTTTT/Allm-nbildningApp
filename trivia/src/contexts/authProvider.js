import React, { createContext, useState, useContext, useEffect } from "react";
import { storeToken, deleteToken } from "../../models/storage";
import { loginUser, createUser } from "../../models/authModel";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleRegister = async (usersname, email, password) => {
    const result = createUser(usersname, email, password);
    if (result.success) {
      return { success: true };
    } else {
      return { success: false, error: result.error };
    }
  };

  const handleLogin = async (email, password) => {
    const result = loginUser(email, password);
    if (result.success) {
      storeToken(result.data.token);
      setIsLoggedin(true);
      return { success: true };
    } else {
      return { success: false, error: result.error };
    }
  };

  const handleLogout = async () => {
    deleteToken();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedin,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
