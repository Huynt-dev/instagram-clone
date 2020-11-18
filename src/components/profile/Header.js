import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
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
                <div className="mr-3 editProfile">Chỉnh sửa trang cá nhân</div>
                <div className="mr-3">
                  <FontAwesomeIcon icon={faCog} />
                </div>
              </div>
              <div className="editProfileMin">Chỉnh sửa trang cá nhân</div>
              <div className="mt-3 infoUser">
                <div className="mr-5">
                  <strong>0</strong> bài viết
                </div>
                <div className="mr-5">
                  <strong>38</strong> người theo dõi
                </div>
                <div className="mr-5">
                  Đang theo dõi <strong>3</strong> người dùng
                </div>
              </div>
              <div className="mt-3 infoUser">
                <h6>Tuấn Huy</h6>
              </div>
            </Col>
          </div>
        </Row>
      </div>
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
    </header>
  );
}
