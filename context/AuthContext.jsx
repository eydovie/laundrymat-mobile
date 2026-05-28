import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // role: 'customer' | 'admin'
  const [role, setRole] = useState("customer");
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  // Simple admin login — in production replace with
  // a real JWT authentication system
  const loginAsAdmin = async (password) => {
    if (password === "laundrymart2024") {
      setRole("admin");
      setAdminAuthenticated(true);
      await AsyncStorage.setItem("role", "admin");
      return true;
    }
    return false;
  };

  const logout = async () => {
    setRole("customer");
    setAdminAuthenticated(false);
    await AsyncStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        adminAuthenticated,
        loginAsAdmin,
        logout,
        isAdmin: role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
