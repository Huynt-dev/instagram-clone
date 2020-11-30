import React, { useState, useEffect } from "react";
import "./css/contentRight.css";
import callApi from "../../helpers/axios";
export default function ContentRight() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const friendsData = async () => {
      try {
        const res = await callApi.get("/users/friend");
        setFriends(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log("error", error);
        // localStorage.removeItem("token");
        // history.push("/login");
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
                <p className="title-left">{friend.name}</p>
                <p className="sub-left">{friend.email}</p>
              </div>
            </div>
            <p className="link-left">Theo Dõi</p>
          </div>
        );
      })}
    </div>
  );
}
