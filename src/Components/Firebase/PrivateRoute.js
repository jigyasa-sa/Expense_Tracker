import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { usercontext } from "./UserContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  console.log("PRIVATE ROUTE CALLED");
  const currentUser = useContext(usercontext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect path="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
