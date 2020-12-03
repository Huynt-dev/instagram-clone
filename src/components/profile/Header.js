import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import callApi from "../../helpers/axios";
const user = JSON.parse(localStorage.getItem("user"));

const Header = ({ userProfile, postLength }) => {
  const follow = async (idUser) => {
    try {
      await callApi.post(`/follow/following`, { idUser });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <header>
      <div className="container">
        <Row>
          <div className="contentProfile">
            <Col className="mt-5" xl={3} lg={3} md={3} sm={3} xs={3}>
              <img
                className="avatarProfile"
                src={userProfile.avatar}
                alt="ok"
              />

              <img
                className="avatarProfileMin"
                src={userProfile.avatar}
                alt="ok"
              />

              <div className="mt-4 nameUserAvatar">
                <h6>{userProfile.user}</h6>
              </div>
            </Col>
            <Col className="mt-5" xl={9} lg={9} md={9} sm={9} xs={9}>
              <div className="infoUserHeader">
                <h2 className="mr-3">{userProfile.user}</h2>
                {user.user === userProfile.user ? (
                  <button className="mr-3 editProfile">
                    Chỉnh sửa trang cá nhân
                  </button>
                ) : (
                  <button
                    onClick={() => follow(userProfile._id)}
                    className="mr-3 editProfile"
                  >
                    Theo dõi
                  </button>
                )}
              </div>
              <div className="editProfileMin">Chỉnh sửa trang cá nhân</div>
              <div className="mt-3 infoUser">
                <div className="mr-4">
                  <strong>{postLength}</strong> bài viết
                </div>
                <div className="mr-4">
                  <strong>38</strong> người theo dõi
                </div>
                <div className="mr-4">
                  Đang theo dõi <strong>3</strong> người dùng
                </div>
              </div>
              <div className="mt-3 infoUser">
                <h6>{userProfile.name}</h6>
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
};

export default Header;
