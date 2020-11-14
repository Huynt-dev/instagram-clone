import React from "react";
import { Route, Redirect } from "react-router-dom";
// import axios from "axios";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  // if (token) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
