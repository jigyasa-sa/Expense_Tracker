import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Paper, makeStyles, Grid, Typography, Button } from "@material-ui/core";

import { usercontext } from "../Firebase/UserContext";
import { FirebaseContext } from "../Firebase/init";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "#77999e",
    minHeight: "50vh",
    color: "white",
    padding: "10px",
  },
  aboutSection: {
    textAlign: "center",
    padding: "10px 50px 10px 50px",
    backgroundColor: "#f2be54",
    margin: "20px 10px 20px 10px",
  },
  desp: {
    margin: "20px 10px 20px 10px",
  },
  root: {
    "& > *": {
      margin: "20px 10px 20px 10px",
      width: "25ch",
    },
  },
});
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);
  const { addTransaction, updateState, globalState } = useContext(
    GlobalContext
  );
  const classes = useStyles();

  const [databaseData, setdatabaseData] = useState(null);
  const [pending, setPending] = useState(true);
  const userData = React.useContext(usercontext);
  const firebase = React.useContext(FirebaseContext);
  useEffect(() => {
    firebase.database
      .collection("users")
      .doc(userData.uid)
      .get()
      .then((data) => {
        setdatabaseData(data.data().userTransaction);
        setPending(false);
      });
    return () => {
      console.log(globalState);
    };
  }, []);
  //console.log(databaseData);
  useEffect(() => {
    console.log("here");
    if (pending === false && databaseData !== null) {
      console.log("STATE_INITIALISE");
      updateState(databaseData);
    }
  }, [pending]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    console.log(amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <Paper className={classes.paperStyle} elevation={24}>
      <form
        //className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Grid container style={{ margin: "0px" }}>
          {pending ? (
            <h3> LOADING.....................</h3>
          ) : (
            <>
              {" "}
              <Grid item xs={12}>
                <Paper className={classes.aboutSection} elevation={24}>
                  <Typography variant="h5">
                    <b>ADD NEW TRANSACTION </b>{" "}
                  </Typography>
                  <div style={{ margin: "20px" }}></div>

                  <TextField
                    id="filled-basic"
                    label="Enter Transaction Name"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text..."
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.aboutSection} elevation={24}>
                  <Typography variant="h5">
                    {" "}
                    <b>AMOUNT </b>
                  </Typography>
                  <div style={{ margin: "20px" }}></div>
                  <TextField
                    type="number"
                    id="filled-basic"
                    value={amount}
                    label="Enter Transaction Amount"
                    variant="outlined"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount..."
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Add Transaction
                </Button>
              </Grid>{" "}
            </>
          )}
        </Grid>
      </form>
    </Paper>
  );
};
