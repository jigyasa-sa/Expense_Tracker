import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Grid, Typography, Box } from "@material-ui/core";
//import { usercontext } from "../Firebase/UserContext";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h5" color="primary">
          {" "}
          <b>INCOME</b>
        </Typography>
        <Box className="money plus">{income}</Box>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5" color="secondary">
          {" "}
          <b>EXPENSE </b>
        </Typography>
        <Box className="money minus">{expense}</Box>
      </Grid>
      <Grid item xs={12}>
        <div style={{ margin: "40px" }}></div>
      </Grid>
    </Grid>

    // <div className="inc-exp-container">

    //   <div>
    //     <h4>Income</h4>
    //     <p className="money plus">{income}</p>
    //   </div>

    //   <div>
    //     <h4>Expense</h4>
    //     <p className="money minus">{expense}</p>
    //   </div>

    // </div>
  );
};
