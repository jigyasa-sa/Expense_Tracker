import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { usercontext } from "../Firebase/UserContext";

export const Header = () => {
  const user = React.useContext(usercontext);
  return (
    <Grid container>
      {<br />}
      <Grid item xs={12}>
        {" "}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="right">
          {" "}
          <b>User Name:</b> {user.displayName}
        </Typography>
        <Grid item xs={12}>
          {" "}
        </Grid>
        <Typography variant="h6" align="right">
          {" "}
          <b>User Email: </b>
          {user.email}
        </Typography>
        <Grid item xs={12}>
          {" "}
        </Grid>
      </Grid>
    </Grid>
  );
};
