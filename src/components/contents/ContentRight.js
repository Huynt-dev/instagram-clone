import React from "react";
import "./css/contentRight.css";
export default function ContentRight() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="content-right">
      <div className="content-box-right">
        <div className="box2">
          <img className="avatar-right" alt="ok" src={user.avatar} />

          <div>
            <p className="title-left">{user.user}</p>
            <p className="sub-left">{user.user}</p>
          </div>
        </div>
        <p className="link-left">Chuyển</p>
      </div>

      <div className="content-box-right">
        <p className="title1">Gợi ý cho bạn</p>
        <p className="title2">Xem tất cả</p>
      </div>

      <div className="content-box-right-1">
        <div className="box2">
          <img
            className="avatar-right-min"
            alt="ok"
            src="../images/instagram-logo-1.png"
          />
          <div>
            <p className="title-left">huynt.info</p>
            <p className="sub-left">Tuấn Huy</p>
          </div>
        </div>
        <p className="link-left">Theo Dõi</p>
      </div>

      <div className="content-box-right-1">
        <div className="box2">
          <img
            className="avatar-right-min"
            alt="ok"
            src="../images/instagram-logo-1.png"
          />
          <div>
            <p className="title-left">huynt.info</p>
            <p className="sub-left">Tuấn Huy</p>
          </div>
        </div>
        <p className="link-left">Theo Dõi</p>
      </div>

      <div className="content-box-right-1">
        <div className="box2">
          <img
            className="avatar-right-min"
            alt="ok"
            src="../images/instagram-logo-1.png"
          />
          <div>
            <p className="title-left">huynt.info</p>
            <p className="sub-left">Tuấn Huy</p>
          </div>
        </div>
        <p className="link-left">Theo Dõi</p>
      </div>
    </div>
  );
}
