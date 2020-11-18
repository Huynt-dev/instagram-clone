import React from "react";
import { useLocation } from "react-router-dom";
import { NavMenu } from "../menu";
export default function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <NavMenu />
      <div className="container mt-3">
        <h3>
          No Found <code>{location.pathname}</code>
        </h3>
      </div>
    </div>
  );
}
