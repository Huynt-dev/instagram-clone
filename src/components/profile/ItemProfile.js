import React from "react";

import Header from "./Header";
import Content from "./Content";
import "./css/ItemProfile.css";

export default function ItemProfile({
  userProfile = {},
  posts = [],
  postLength = 0,
  isFollow,
  setFollow
}) {
  return (
    <div>
      <Header
        userProfile={userProfile}
        postLength={postLength}
        isFollow={isFollow}
        setFollow={setFollow}
      />
      <div className="border-top">
        <Content posts={posts} />
      </div>
    </div>
  );
}
