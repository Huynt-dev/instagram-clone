import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/contentRight.css";
import callApi from "../../helpers/axios";
export default function ContentRight() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friendsData = async () => {
      try {
        const res = await callApi.get("/users/friend");
        setFriends(res.dataFriend);
      } catch (error) {
        console.log("error", error);
      }
    };

    friendsData();
  }, []);

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
      {friends.map((friend) => {
        return (
          <div className="content-box-right-1" key={friend._id}>
            <div className="box2">
              <img className="avatar-right-min" alt="ok" src={friend.avatar} />
              <div>
                <Link className="title-left" to={`${friend.user}/profile`}>
                  <p>{friend.name}</p>
                </Link>

                <p className="sub-left">{friend.email}</p>
              </div>
            </div>
            <p className="link-left">Theo Dõi</p>
          </div>
        );
      })}

      <ul className="list-footer-right mt-3">
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

      <p className="copy">© 2020 INSTAGRAM FROM FACEBOOK</p>
    </div>
  );
}
