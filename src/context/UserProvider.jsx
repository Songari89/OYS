import React, { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../API/firebase";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      setLoading(false)
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ login, logout, user , admin: user && user.isAdmin, uid: user && user.uid, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default function useUserContext() {
  return useContext(UserContext);
}
