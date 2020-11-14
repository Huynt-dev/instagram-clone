import React from "react";
import { Route } from "react-router-dom";
const PublicRoute = ({ component: Component, ...rest }) => {
  // const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
