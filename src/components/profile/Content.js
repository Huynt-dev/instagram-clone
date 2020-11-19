import React, { useState } from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
export default function Content() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="container">
      <Nav className="menuUser">
        <NavItem>
          <NavLink
            className={classnames("colorLink", { active2: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>BÀI VIẾT</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames("colorLink", { active2: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>IGTV</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames("colorLink", { active2: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>ĐÃ LƯU</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames("colorLink", { active2: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>ĐƯỢC GẮN THẺ</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="contentTab">
            <img className="imagesTab" src="../images/2.jpg" alt="ok" />

            <div className="textInfo">
              <div className="textInfoCenter">
                <p>
                  <strong>Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.</strong>
                </p>
                <p>Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.</p>
                <div className="mt-2">
                  <img
                    className="img-download"
                    alt="ok"
                    src="../images/ios.png"
                  />
                  <img
                    className="img-download"
                    alt="ok"
                    src="../images/android.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
