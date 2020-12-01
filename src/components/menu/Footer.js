import React from "react";
import { Row, Col } from "reactstrap";
import "./css/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col lg={9} md={8} sm={12}>
            <ul className="list-footer">
              <li>
                <a href="/">GIỚI THIỆU</a>
              </li>
              <li>
                <a href="/">TRỢ GIÚP</a>
              </li>
              <li>
                <a href="/">BÁO CHÍ</a>
              </li>
              <li>
                <a href="/">API</a>
              </li>
              <li>
                <a href="/">VIỆC LÀM</a>
              </li>
              <li>
                <a href="/">QUYỀN RIÊNG TƯ</a>
              </li>
              <li>
                <a href="/">ĐIỀU KHOẢN</a>
              </li>
              <li>
                <a href="/">VỊ TRÍ</a>
              </li>
              <li>
                <a href="/">TÀI KHOẢN</a>
              </li>
              <li>
                <a href="/">LIÊN QUAN NHẤT</a>
              </li>
              <li>
                <a href="/">HASHTAG</a>
              </li>
              <li>
                <a href="/">NGÔN NGỮ</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="copyRight">
              <span>© 2020 INSTAGRAM FAKE FROM HUYNT</span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
