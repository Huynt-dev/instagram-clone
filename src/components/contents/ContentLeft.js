import React, { useState, useEffect } from "react";
import { ItemContentLeft } from "../contents";
import "./css/contentLeft.css";
import callApi from "../../helpers/axios";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  // const [like, setLike] = useState(false);

  const handleLikePost = (postId) => {
    const likePost = async () => {
      try {
        const res = await callApi.put(`/posts/${postId}`);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };

    likePost();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi.get("/posts");
        setPosts(res.posts);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-left">
      {posts.map((post) => {
        return (
          <ItemContentLeft
            key={post._id}
            data={post}
            likePost={handleLikePost}
          />
        );
      })}
    </div>
  );
}
