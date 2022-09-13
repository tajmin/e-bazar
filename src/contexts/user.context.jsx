import { createContext, useEffect, useReducer } from "react";
import {
  authStageChangeListener,
  createUserDocFromAuth,
} from "../Utility/Firebase/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`${type} unhandled in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };
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
