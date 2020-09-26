import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../Firebase/init";
import { usercontext } from "../Firebase/UserContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: "0px 15px 0px 15px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = React.useContext(FirebaseContext);
  const user = React.useContext(usercontext);
  console.log(firebase);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#191a1d" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#00756c"
            aria-label="menu"
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EXPENSE TRACKER
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
          {!!user ? (
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => {
                history.push("/myExpenses");
              }}
            >
              My expense
            </Button>
          ) : (
            <div />
          )}
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => {
              if (user !== null) {
                firebase.doSignOut();
              } else {
                firebase.doSignInWithGoogle();
              }
            }}
          >
            {!!user ? "LOGOUT" : "LOGIN"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
