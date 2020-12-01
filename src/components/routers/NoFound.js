import React from "react";
import { useLocation } from "react-router-dom";
import { NavMenu } from "../menu";
export default function NoMatch() {
  let location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {user ? <NavMenu /> : ""}
      <div className="container mt-3">
        <h3>
          No Found <code>{location.pathname}</code>
        </h3>
      </div>
    </div>
  );
}
