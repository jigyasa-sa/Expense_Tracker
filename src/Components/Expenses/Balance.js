import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Grid, Typography } from "@material-ui/core";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{ margin: "40px" }}></div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          <b>YOUR BALANCE </b>
        </Typography>
        <Typography> ${total}</Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ margin: "40px" }}></div>
      </Grid>
    </Grid>
    // <>
    //   <h4>Your Balance</h4>
    //   <h1>${total}</h1>
    // </>
  );
};
