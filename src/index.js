import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./Components/Firebase/init";
import UserDetails from "./Components/Firebase/UserContext";
import CustomThemeProvider from "./Components/Themes/customThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
    <FirebaseContext.Provider value={new Firebase()}>
      <UserDetails>
        <App />
      </UserDetails>
    </FirebaseContext.Provider>
  </CustomThemeProvider>,
  document.getElementById("root")
);
