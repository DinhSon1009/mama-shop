import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firsebase/firebase.utils";

export const UserContext = createContext({
  currentUSer: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUSer, setCurrentUser] = useState(null);
  const value = { currentUSer, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      // console.log(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
