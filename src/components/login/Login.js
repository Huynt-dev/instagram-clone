import React from "react";
import "./css/HomeLogin.css";
import { FormLogin, Slider } from "../login";
import Footer from "../../components/menu/Footer";
import { Row, Col } from "reactstrap";

export default function Login({ children }) {
  return (
    <div>
      <div className="container content-login">
        <Row>
          <Col className="mt-4 img-box" xl={7} lg={7} md={12} sm={12} xs={12}>
            <div className="background-img">
              <Slider />
            </div>
          </Col>

          <Col className="mt-5" xl={5} lg={5} md={12} sm={12} xs={12}>
            {children}
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
