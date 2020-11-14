import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";

const setToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

setToken();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
