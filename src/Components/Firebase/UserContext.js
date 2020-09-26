import React, { useEffect, useState, useContext, createContext } from "react";
import { FirebaseContext } from "./init";
export const usercontext = createContext(null);
const UserDetails = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const cleanup = firebase.auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setPending(false);
    });
    return () => {
      cleanup(); //destorys the listener
    };
  }, []);
  if (pending) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <usercontext.Provider value={currentUser}>
        {children}
      </usercontext.Provider>
    );
  }
};
export default UserDetails;
