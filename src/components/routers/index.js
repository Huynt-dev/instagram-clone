import React from "react";
import "../../styles.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../contents";
import { HomeLogin } from "../login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NoFound from "./NoFound";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={HomeLogin} />
        <PrivateRoute path="/" exact component={Home} />
        <PublicRoute path="*" exact component={NoFound} />
      </Switch>
    </Router>
  );
}
