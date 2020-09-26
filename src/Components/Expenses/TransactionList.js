import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";
import { Grid, Typography } from "@material-ui/core";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <Grid container>
        <Grid item xs={"12"}>
          <Typography variant="h5">
            <b>HISTORY</b>
          </Typography>
        </Grid>
      </Grid>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
