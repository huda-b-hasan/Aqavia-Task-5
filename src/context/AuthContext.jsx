import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  

  const [token, setToken] = useState(true); 
  const [userRole, setUserRole] = useState("admin"); 

  // هون باخد بيانات التسجيل من api

  const login = (role, userToken) => {
    setToken(userToken);
    setUserRole(role);
  };

  const logout = () => {
    setToken(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};