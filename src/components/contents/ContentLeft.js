import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { ItemContentLeft } from "../contents";
import "./css/contentLeft.css";
import { CreatePost } from "../createPost";
import callApi from "../../helpers/axios";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi.get("/posts");
        setPosts(res.posts);
        // console.log(res.posts);
      } catch (error) {
        console.log("error", error);
        // localStorage.removeItem("token");
        // history.push("/login");
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

  const handleCreatePost = async (data) => {
    try {
      const clonePost = [...posts];
      const formData = new FormData();
      formData.append("picture", data.picture);
      formData.append("postNew", data.postNew);

      const res = await callApi.post("/posts/create", formData);
      clonePost.unshift(res.post);

      setPosts(clonePost);
    } catch (error) {
      console.log("error", { error });
    }
  };

  const handleComment = async (post) => {
    try {
      const res = await callApi.post("/comment/create", {
        content: post.comment,
        postId: post._id
      });

      const clonePost = [...posts];

      clonePost.map((x) => {
        if (x._id === post._id) {
          x.comments = [];
          x.totalComment = x.totalComment + 1;
          x.comments.push(res.comment);
          // console.log(res.comment);
        }
      });
      setPosts(clonePost);
    } catch (error) {
      console.log("error", error);
    }
  };

  const showComments = async (postId) => {
    const clonePost = [...posts];
    const res = await callApi.get(`posts/${postId}/comments`);
    clonePost.map((x) => {
      if (x._id === postId) {
        x.comments = [];
        x.comments = res.comments;
      }
    });

    setPosts(clonePost);
  };

  const removeComment = async (idComment, data) => {
    try {
      if (window.confirm("Xoá Bình Luận này?")) {
        await callApi.put(`comment/${idComment}/remove`, {
          idPost: data._id
        });

        const clonePost = [...posts];
        clonePost.map((x) => {
          if (x._id === data._id) {
            const cloneComment = [...x.comments];

            const comments = cloneComment.filter((comment) => {
              return comment._id !== idComment;
            });

            x.comments = comments;
          }
        });
        setPosts(clonePost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-left">
      <CreatePost createPost={handleCreatePost} />
      {posts.map((post) => {
        // console.log(post);
        return (
          <ItemContentLeft
            key={post._id}
            data={post}
            likePost={handleLikePost}
            commentPost={handleComment}
            showComments={showComments}
            removeComment={removeComment}
          />
        );
      })}
    </div>
  );
}
