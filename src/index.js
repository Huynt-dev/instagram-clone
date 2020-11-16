import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import callApi from "./helpers/axios";

const setToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    callApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

setToken();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
