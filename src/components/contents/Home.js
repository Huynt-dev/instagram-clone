import React from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import { NavMenu } from "../menu";
import "./css/home.css";
import { Row, Col } from "reactstrap";

export default function Home() {
  return (
    <div>
      <NavMenu />
      <div className="content container">
        <Row>
          <Col className="mt-5" xl={8} lg={8} md={12} sm={12} xs={12}>
            <ContentLeft />
          </Col>

          <Col className="mt-5 hide" xl={4} lg={4} md={12} sm={12} xs={12}>
            <ContentRight />
          </Col>
        </Row>
      </div>
    </div>
  );
}
