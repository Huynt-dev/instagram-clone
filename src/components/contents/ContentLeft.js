import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemContentLeft } from "../contents";
import "./css/contentLeft.css";
import callApi from "../../helpers/axios";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi.get("/posts");
        setPosts(res.posts);
        console.log(res.posts);
      } catch (error) {
        // console.log("error", error);
        localStorage.removeItem("token");
        history.push("/login");
      }
    };

    fetchData();
  }, []);

  const handleLikePost = (postId) => {
    const handleLike = async () => {
      try {
        const res = await callApi.put(`/posts/${postId}/like`);
        // setLike(true);
        console.log("res", res);
        if (res.like) {
          setLike(false);
        } else {
          setLike(true);
        }
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
            like={like}
            key={post._id}
            data={post}
            likePost={handleLikePost}
          />
        );
      })}
    </div>
  );
}
