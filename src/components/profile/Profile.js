import React, { useState, useEffect } from "react";
import { NavMenu } from "../menu";
import ItemProfile from "./ItemProfile";
import callApi from "../../helpers/axios";

export default function Profile({ match }) {
  const [userProfile, setUserProfile] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const postLength = posts.length;

  useEffect(() => {
    const username = match.params.username || user.user;

    if (username) {
      const profileData = async () => {
        try {
          const res = await callApi.get(`users/${username}/profile`);
          setUserProfile(res.userProfile);
          setPosts(res.postOfUser);
          setIsFollow(res.isFollow);
        } catch (error) {
          console.log("error", error);
        }
      };
      profileData();
    } else {
      setUserProfile(user);
    }
  }, []);

  const follow = async (idUser) => {
    try {
      await callApi.post(`/follow/following`, { idUser });
    } catch (e) {
      console.log({ e });
    }
  };

  const unfollow = async (idUser) => {
    try {
      await callApi.post(`follow/unfollow`, { idUser });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div>
      <NavMenu />
      <ItemProfile
        isFollow={isFollow}
        userProfile={userProfile}
        posts={posts}
        postLength={postLength}
        follow={follow}
        unfollow={unfollow}
      />
    </div>
  );
}
