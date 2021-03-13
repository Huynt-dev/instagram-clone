import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { ItemContentLeft } from "../contents";
import "./css/contentLeft.css";
import { CreatePost } from "../createPost";
import callApi from "../../helpers/axios";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi.get(`/posts/?limit=${page}`);
        setPosts(res.posts);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [page]);

  const handleLikePost = (postId) => {
    const handleLike = async () => {
      try {
        const res = await callApi.put(`/posts/${postId}/like`);
        const clonePost = [...posts];

        clonePost.map((post) => {
          if (post._id === res.post._id) {
            post.likes = res.post.likes;
            post.totalLike = res.post.totalLike;
          }
          return post;
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
        postId: post._id,
      });

      const clonePost = [...posts];

      clonePost.map((x) => {
        if (x._id === post._id) {
          x.comments = [];
          x.totalComment = x.totalComment + 1;
          x.comments.push(res.comment);
          // console.log(res.comment);
        }
        return x;
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
      return x;
    });

    setPosts(clonePost);
  };

  const removeComment = async (idComment, data) => {
    try {
      if (window.confirm("Xoá Bình Luận này?")) {
        await callApi.put(`comment/${idComment}/remove`, {
          idPost: data._id,
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
          return x;
        });
        setPosts(clonePost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreData = async () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 300);
  };

  return (
    <div className="content-left">
      <CreatePost createPost={handleCreatePost} />
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={true}
      >
        {posts.map((post) => {
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
      </InfiniteScroll>
    </div>
  );
}
