import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ButtonAppBar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Expenses from "./Components/Expenses/Expenses";
import PrivateRoute from "./Components/Firebase/PrivateRoute";
//import { CustomThemeContext } from "./Components/Themes/customThemeProvider";

const useStyles = makeStyles({
  containerStyle: {
    backgroundColor: "#153e5c",
    minHeight: "100vh",
    color: "white",
    paddingTop: "20px",
  },
});
function App() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Container className={classes.containerStyle} maxWidth="xl">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <PrivateRoute component={Expenses} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
