import React from "react";
import { Paper, makeStyles, Grid, Typography } from "@material-ui/core";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../Context/GlobalState";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "#f2be54",
    minHeight: "500vh",
    color: "white",
    padding: "30px",
  },
  aboutSection: {
    textAlign: "center",
    padding: "10px 50px 10px 50px",
    margin: "20px 10px 20px 10px",
    backgroundColor: "#87aeb4",
  },
  desp: {
    margin: "20px 10px 20px 10px",
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.aboutSection} elevation={24}>
          <Typography variant="h4">
            {" "}
            <b>TRACK YOUR EXPENSE HERE</b>
          </Typography>
          <GlobalProvider>
            <Header />

            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </GlobalProvider>
        </Paper>
      </Grid>
    </Grid>
  );
}
