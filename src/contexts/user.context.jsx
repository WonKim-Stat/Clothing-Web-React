import { createContext, useState, useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
  SignoutUser,
} from "../utilities/firebase/firebase.utility";

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
}); // We need default value(initial value).

// actual component wrpping component tree
export const UserProvider = ({ children }) => {
  //we want to store current user info
  const [currentUser, setCurrentUser] = useState(null); // initialize the value null
  const value = { currentUser, setCurrentUser };

  // run the function once only when the function component mounts in the beginning.
  // onAuthStateChangedListner ==> callback whenever Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// There are four steps to using React context:

// Create context using the createContext method.
// Take your created context and wrap the context provider around your component tree.
// Put any value you like on your context provider using the value prop.
// Read that value within any component by using the context consumer.
