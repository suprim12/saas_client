import React, { useState } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: RouteProps | any) => {
  const [access] = useState(true);
  return (
    <Route
      {...rest}
      render={(props) => {
        return access ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
