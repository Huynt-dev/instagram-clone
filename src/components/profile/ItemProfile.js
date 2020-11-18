import React, { useState } from "react";
import classnames from "classnames";
import "./css/ItemProfile.css";
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
export default function ItemProfile() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <header>
        <div className="container">
          <Row>
            <div className="contentProfile">
              <Col className="mt-5" xl={3} lg={3} md={3} sm={4} xs={4}>
                <div className="avatarProfile"></div>
                <div className="avatarProfileMin"></div>
                <div className="mt-4 nameUserAvatar">
                  <h6>Tuấn Huy</h6>
                </div>
              </Col>
              <Col className="mt-5" xl={9} lg={9} md={9} sm={8} xs={8}>
                <div className="infoUserHeader">
                  <h2 className="mr-3">Huynt</h2>
                  <div className="mr-3 editProfile">
                    Chỉnh sửa trang cá nhân
                  </div>
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faCog} />
                  </div>
                </div>
                <div className="editProfileMin">Chỉnh sửa trang cá nhân</div>
                <div className="mt-3 infoUser">
                  <div className="mr-5">0 bài viết</div>
                  <div className="mr-5">38 người theo dõi</div>
                  <div className="mr-5">Đang theo dõi 3 người dùng</div>
                </div>
                <div className="mt-3 infoUser">
                  <h6>Tuấn Huy</h6>
                </div>
              </Col>
            </div>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="mt-3 border-top">
              <div className="mt-2 mb-2 infoUserMin container">
                <div className="mt-2">
                  <p>
                    <strong>0</strong>
                  </p>
                  <p className="textProfile">bài viết</p>
                </div>
                <div className="mt-2">
                  <p>
                    <strong>38</strong>
                  </p>
                  <p className="textProfile">người theo dõi</p>
                </div>
                <div className="mt-2">
                  <p className="textProfile">Đang theo dõi</p>
                  <p>
                    <strong>5</strong>
                  </p>
                  <p className="textProfile">người dùng</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </header>

      <div className="border-top">
        <Row>
          <Col>
            <div className="container">
              <Nav className="menuUser">
                <NavItem>
                  <NavLink
                    className={classnames({ active2: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    BÀI VIẾT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active2: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    IGTV
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active2: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    ĐÃ LƯU
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active2: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    ĐƯỢC GẮN THẺ
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="container" activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row className="contentTab">
                    <Col xl={6} lg={6} md="12" sm="12" xs={12}>
                      <img src="../images/2.jpg" alt="ok" width="380px" />
                    </Col>
                    <Col xl={6} lg={6} md="12" sm="12" xs={12}>
                      <div className="textInfo">
                        <p>
                          <strong>
                            Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.
                          </strong>
                        </p>
                        <p>
                          Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của
                          bạn.
                        </p>
                        <div>
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
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
