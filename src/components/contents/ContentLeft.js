import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemContentLeft } from "../contents";
import axios from "axios";
import "./css/contentLeft.css";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  // const [like, setLike] = useState(false);
  const history = useHistory();

  // const likePost = () => {
  //   setLike(!like);
  // };

  const handleLikePost = (postId) => {
    const deletePost = async () => {
      try {
        const res = await axios.put(
          `https://2i8yt.sse.codesandbox.io/posts/${postId}`
        );

        alert("Like thanh cong");
      } catch (e) {
        console.log("loi roiiii", { e });
      }
    };

    deletePost();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://2i8yt.sse.codesandbox.io/posts");
        if (res.data.posts) {
          setPosts(res.data.posts);
        }
      } catch (e) {
        console.log("loi roiiii", { e });

        if (e.response.data.error.message === "invalid token") {
          // xoa local storage
          // xoa headers
          history.push("/login");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-left">
      {posts.map((post, index) => {
        return (
          <ItemContentLeft
            index={index}
            data={post}
            likePost={handleLikePost}
          />
        );
      })}
    </div>
  );
}
