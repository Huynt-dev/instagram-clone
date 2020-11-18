import React from "react";

import Header from "./Header";
import Content from "./Content";
import "./css/ItemProfile.css";
export default function ItemProfile() {
  return (
    <div>
      <Header />
      <div className="border-top">
        <Content />
      </div>
    </div>
  );
}
