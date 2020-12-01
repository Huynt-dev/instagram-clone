import React, { useState, useEffect } from "react";
import { NavMenu } from "../menu";
import ItemProfile from "./ItemProfile";
import callApi from "../../helpers/axios";

export default function Profile({ match }) {
  const [userProfile, setUserProfile] = useState({});
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
        } catch (error) {
          console.log("error", error);
        }
      };
      profileData();
    } else {
      setUserProfile(user);
    }
  }, []);

  return (
    <div>
      <NavMenu />
      <ItemProfile
        userProfile={userProfile}
        posts={posts}
        postLength={postLength}
      />
    </div>
  );
}
