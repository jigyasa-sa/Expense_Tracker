import React from "react";
import { Paper, makeStyles, Grid, Typography } from "@material-ui/core";
import { usercontext } from "../Firebase/UserContext";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "#52d2a9",
    minHeight: "100vh",
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
});
export default function Home() {
  const classes = useStyles();
  const user = React.useContext(usercontext);
  console.log(user);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.aboutSection} elevation={24}>
          <Typography variant="h3">About</Typography>
          <Typography className={classes.desp}>
            {!!user ? user.displayName : "NO USER"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.aboutSection} elevation={24}>
          <Typography variant="h3">About</Typography>
          <Typography className={classes.desp}>
            {" "}
            Expense tracker is complete app to track your all the expenses bared
            by your pocket or bared by you & manage your personal finance. So
            that you can trace where your money goes as well as from where money
            comes in, you can limit & plan accordingly. A feature rich tracking
            application with numerous powerful tools like, Income/Expense,
            Bills, Accounts, Reports etc. Not only that, app has all the
            information yet not un-secure as it does not ask to save any
            sensitive data for its operations.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.aboutSection} elevation={24}>
          <Typography variant="h3">About</Typography>
          <Typography className={classes.desp}>
            {" "}
            Also features like Income/Expense, keep tracking of your incoming &
            outgoing flows, Bills maintain your recurring expenses & keep
            reminding you as your helping hand. Out of these features reports is
            a mind blowing Artificial intelligence based feature, that analyzes
            based on your data and gives graphical results of your income &
            expenses. Over all a powerful personal finance tool that keeps on
            improving your productivity, saves a time & helps you to save your
            money.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
