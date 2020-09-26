import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { usercontext } from "../Firebase/UserContext";
import { FirebaseContext } from "../Firebase/init";

// initial state
const initialState = {
  transactions: [],
  fromdb: false,
};

// create context

export const GlobalContext = createContext(null);

//provider component

export const GlobalProvider = ({ children }) => {
  const userData = React.useContext(usercontext);
  const firebase = React.useContext(FirebaseContext);

  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state);
  useEffect(() => {
    console.log("about to write");
    if (state.fromdb) {
      console.log("writing onto database");
      console.log(state.transactions);
      firebase.database
        .collection("users")
        .doc(userData.uid)
        .update({ "userTransaction.transactions": state.transactions });
    }
  }, [state]);

  function updateState(databaseData) {
    dispatch({
      type: "INITIAL_UPDATE",
      payload: databaseData,
    });
  }

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        updateState,
        globalState: state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
