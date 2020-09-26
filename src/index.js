import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./Components/Firebase/init";
import UserDetails from "./Components/Firebase/UserContext";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <UserDetails>
      <App />
    </UserDetails>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
