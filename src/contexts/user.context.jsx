import { createContext, useEffect, useState } from "react";
import {
  authStageChangeListener,
  createUserDocFromAuth,
} from "../Utility/Firebase/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unscribe = authStageChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
