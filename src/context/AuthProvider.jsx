import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    return employees || [];
  });
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
