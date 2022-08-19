import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutAuthUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // onSubscribe when component unmount
    const unsubscribe = onAuthStateChangedListener((res) => {
      console.log("onAuthStateChange result: ", res);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
