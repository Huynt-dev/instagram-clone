import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemContentLeft } from "../contents";
import "./css/contentLeft.css";
import callApi from "../../helpers/axios";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi.get("/posts");
        setPosts(res.posts);
        // console.log(res.posts);
      } catch (error) {
        // console.log("error", error);
        // localStorage.removeItem("token");
        history.push("/login");
      }
    };

    fetchData();
  }, []);

  const handleLikePost = (postId) => {
    const handleLike = async () => {
      try {
        const res = await callApi.put(`/posts/${postId}/like`);
        const clonePost = [...posts];

        clonePost.map((post, index) => {
          if (post._id === res.post._id) {
            post.likes = res.post.likes;
            post.totalLike = res.post.totalLike;
          }
        });

        setPosts(clonePost);
      } catch (error) {
        console.log("error", error);
      }
    };
    handleLike();
  };

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
